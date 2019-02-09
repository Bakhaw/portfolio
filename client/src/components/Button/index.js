import React from 'react';
import MaterialButton from '@material-ui/core/Button';

export default function Button({ backgroundColor, children, onClick }) {
  return (
    <MaterialButton
      className='Button'
      onClick={onClick}
      style={{ background: backgroundColor }}
    >
      {children}
    </MaterialButton>
  );
}
