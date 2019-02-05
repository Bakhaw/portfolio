import React, { Component } from 'react';
import Hands from '../../assets/images/hands.svg';
import Form from './Form';

class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <div className='ContactCard'>
          <img className='ContactCard__image' src={Hands} />
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
