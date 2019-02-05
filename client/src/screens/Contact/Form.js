import React, { Component } from 'react';
import axios from 'axios';
import Icon from '@material-ui/core/Icon';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

class Form extends Component {
  state = {
    isLoading: false,
    email: {
      error: false,
      value: ''
    },
    message: {
      error: false,
      value: ''
    },
    mailSent: true
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: { error: false, value } });
  };

  toggleLoading = async bool => {
    await this.setState({ isLoading: bool });
  };

  toggleError = key => {
    this.setState(prevState => ({ [key]: { ...prevState[key], error: true } }));
  };

  checkFormErrors = async () => {
    const { email, message } = this.state;
    const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const isEmailValid = regex.test(String(email.value).toLowerCase());
    const msgIsFine = message.value !== '' && !message.error;
    const emailIsFine = email.value !== '' && !email.error && isEmailValid;

    if (email.value === '') {
      this.toggleError('email');
    }
    if (message.value === '') {
      this.toggleError('message');
    }
    if (!isEmailValid) {
      this.toggleError('email');
    }

    if (emailIsFine && msgIsFine) {
      this.handleFormSubmit();
    }
  };

  // TODO handle error in .catch(err)
  handleFormSubmit = async () => {
    await this.toggleLoading(true);

    const url = '/api/sendMail';
    const data = new URLSearchParams();
    const { email, message } = this.state;
    data.append('from', email.value);
    data.append('text', message.value);

    axios({
      method: 'POST',
      data,
      url
    })
      .then(async res => {
        if (res.data.msg === 'success') {
          await this.toggleLoading(false);
          this.props.toggleMailSent();
        }
      })
      .catch(err => console.log(err)); // TODO handle error here
  };

  render() {
    const { email, isLoading, message } = this.state;

    return (
      <div className='Form'>
        <h1 className='Form__title'>Contact me</h1>
        <div className='Form__container'>
          <Input
            error={email.error}
            name='email'
            onChange={this.handleChange}
            placeholder='Email'
            type='email'
            InputProps={{
              classes: {
                input: { color: 'red' }
              }
            }}
            value={email.value}
          />
          <Input
            error={message.error}
            name='message'
            onChange={this.handleChange}
            placeholder='Message...'
            type='textarea'
            value={message.value}
          />
          <Button backgroundColor='#F4AB33' onClick={this.checkFormErrors}>
            {isLoading ? <Spinner /> : 'Send'}
            <Icon style={{ fontSize: 20 }}>send</Icon>
          </Button>
        </div>
      </div>
    );
  }
}

export default Form;
