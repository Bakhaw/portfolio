import { Router } from 'express';
import config from './config';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

const router = Router();

const transport = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: config.USER,
    pass: config.PASS
  }
};

const transporter = nodemailer.createTransport(smtpTransport(transport));

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/sendMail', (req, res, next) => {
  const { from, text } = req.body;
  const mailObject = {
    from,
    to: config.USER,
    subject: 'Email from portfolio !',
    html: `${text} <br> <br> Sent by ${from}`
  };

  transporter.sendMail(mailObject, (err, data) => {
    const result = {
      data,
      msg: err ? 'fail' : 'success'
    };

    return res.json(result);
  });
});

export default router;
