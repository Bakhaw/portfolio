import React from 'react';

function InputError({ error, text }) {
  return error ? <p className='Input__error__label'>{text}</p> : null;
}

export default InputError;
