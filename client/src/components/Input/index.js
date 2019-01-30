import React from 'react';
import classNames from 'classnames';
import InputError from './InputError';

function Input({ error, name, onChange, placeholder, type, value }) {
  const lol = '\u{1F61B}';
  const cry = '\u{1F622}';

  if (type === 'textarea') {
    return (
      <div>
        <textarea
          className={classNames(
            'Input',
            'Input__textarea',
            error && 'Input__error'
          )}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          rows='4'
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
        <input
          className={classNames('Input', error && 'Input__error')}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
        <InputError
          error={error}
          text={`I need to know your email to answer ${lol}`}
        />
      </div>
    );
  }
}

export default Input;
