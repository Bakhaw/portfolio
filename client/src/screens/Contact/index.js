import React from 'react';
import ContactUsImg from '../../assets/images/contact_us.svg';
import Form from './Form';

function Contact() {
  return (
    <div className='Contact'>
      <div className='Contact__container'>
        <div className='Contact__container__children'>
          <img
            alt='Contact us banner'
            className='Contact__container__children__image'
            src={ContactUsImg}
          />
        </div>
        <div className='Contact__container__children'>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
