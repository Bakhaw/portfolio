import React, { Component, Fragment } from 'react';
import ContactUsImg from '../../assets/images/contact_us.svg';
import Form from './Form';
import MailSent from './MailSent';
import Socials from '../../components/Socials';

class Contact extends Component {
  state = {
    mailSent: false
  };

  toggleMailSent = () => {
    this.setState({ mailSent: true });
  };

  render() {
    const { mailSent } = this.state;
    return (
      <div className='Contact'>
        <div className='Contact__container'>
          {mailSent ? (
            <MailSent />
          ) : (
            <Fragment>
              <div className='Contact__container__children'>
                <img
                  alt='Contact us banner'
                  className='Contact__container__children__image'
                  src={ContactUsImg}
                />
              </div>
              <div className='Contact__container__children'>
                <Form toggleMailSent={this.toggleMailSent} />
              </div>
            </Fragment>
          )}
        </div>
        <Socials />
      </div>
    );
  }
}

export default Contact;
