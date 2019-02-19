import React, { useState } from 'react';
import Form from './Form';
import MailError from './MailError';
import MailSent from './MailSent';

function Contact() {
  const [sendMailStatus, setMailStatus] = useState('');
  const toggleSendMailStatus = status => setMailStatus(status);

  if (sendMailStatus === 'error')
    return (
      <div className='Contact'>
        <div className='ContactCard'>
          <MailError />
        </div>
      </div>
    );

  if (sendMailStatus === 'success')
    return (
      <div className='Contact'>
        <div className='ContactCard'>
          <MailSent />
        </div>
      </div>
    );

  return (
    <div className='Contact'>
      <div className='ContactCard'>
        <img className='ContactCard__image' src='assets/images/hands.svg' />
        <Form toggleSendMailStatus={toggleSendMailStatus} />
      </div>
    </div>
  );
}

export default Contact;
