import React from 'react';

function MailSent() {
  const joy = '\u{1F389}';
  return (
    <div className='MailSent'>
      <h3>
        Your email has been sent successfully {joy} {joy}
      </h3>
      <img
        alt='Mail sent'
        className='MailSent__image'
        src='assets/images/mail_sent.webp'
      />
    </div>
  );
}

export default MailSent;
