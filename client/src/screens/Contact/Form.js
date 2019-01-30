import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import Input from '../../components/Input';

class Form extends Component {
  state = {
    email: '',
    message: ''
  };

  handleFormSubmit = () => {
    const url = '/sendMail';
    const data = new URLSearchParams();
    const { email, message } = this.state;
    data.append('from', email);
    data.append('text', message);

    axios({
      method: 'POST',
      data,
      url
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, message } = this.state;
    console.log(this.state);
    return (
      <div className='Form'>
        <h1 className='Form__title'>Contact me</h1>
        <div className='Form__container'>
          <Input
            name='email'
            onChange={this.handleChange}
            placeholder='Email'
            type='email'
            value={email}
          />
          <Input
            name='message'
            onChange={this.handleChange}
            placeholder='Message...'
            type='textarea'
            value={message}
          />
          <Button backgroundColor='#827FFC' onClick={this.handleFormSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Form;
