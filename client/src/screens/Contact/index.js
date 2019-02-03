import React, { Component, Fragment } from 'react';
import ContactUsImg from '../../assets/images/paper-plane.svg';
import Form from './Form';
import MailSent from './MailSent';
import PrevButton from '../../components/PrevButton';
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
        <PrevButton history={this.props.history} />
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
