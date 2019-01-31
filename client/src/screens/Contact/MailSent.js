import React from 'react';
import MailSentImg from '../../assets/images/mail_sent.webp';

function MailSent() {
  const joy = '\u{1F389}';
  return (
    <div className='MailSent'>
      <h3>
        Your email has been sent successfully {joy} {joy}
      </h3>
      <img alt='Mail sent' className='MailSent__image' src={MailSentImg} />
    </div>
  );
}

export default MailSent;
