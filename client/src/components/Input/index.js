import React from 'react';

function Input({ name, placeholder, type, onChange, value }) {
  if (type === 'textarea') {
    return (
      <textarea
        className='Input Input__textarea'
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        rows='4'
        value={value}
      />
    );
  } else {
    return (
      <input
        className='Input'
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default Input;
