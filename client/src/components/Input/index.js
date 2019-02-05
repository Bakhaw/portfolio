import React from 'react';
import { withNamespaces } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import InputError from './InputError';

function Input({ error, name, onChange, placeholder, type, t, value }) {
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
          text={`${t('SendEmail__message__error')} ${cry}`}
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
          text={`${t('SendEmail__email__error')} ${lol}`}
        />
      </div>
    );
  }
}

export default withNamespaces()(Input);
