import React, { useState } from 'react';
import Hands from '../../assets/images/hands.svg';
import Form from './Form';
import MailSent from './MailSent';

function Contact() {
  const [mailSent, setMailSent] = useState(false);
  const toggleMailSent = bool => setMailSent({ mailSent: bool });

  if (mailSent)
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
        <img className='ContactCard__image' src={Hands} />
        <Form toggleMailSent={toggleMailSent} />
      </div>
    </div>
  );
}

export default Contact;
