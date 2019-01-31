require('dotenv').config();
import express from 'express';
import cors from 'cors';
import config from './config';
import nodemailer from './nodemailer';

// TODO serve client from here
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', nodemailer);

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.listen(config.PORT, () =>
  console.log(`Serveur connecté au port ${config.PORT} ...`)
);
