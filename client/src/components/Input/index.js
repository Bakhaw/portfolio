import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import InputError from './InputError';

function Input({ error, name, onChange, placeholder, type, value }) {
  const lol = '\u{1F61B}';
  const cry = '\u{1F622}';

  if (type === 'textarea') {
    return (
      <div>
        <TextField
          label={placeholder}
          margin='normal'
          multiline
          name={name}
          onChange={onChange}
          rows='4'
          type={type}
          value={value}
        />
        <InputError
          error={error}
          text={`You don't want to send me a message ? ${cry}`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <TextField
          label={placeholder}
          margin='normal'
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        />
        {/* <input
          className={classNames('Input', error && 'Input__error')}
        /> */}
        <InputError
          error={error}
          text={`I need to know your email to answer ${lol}`}
        />
      </div>
    );
  }
}

export default Input;
