import React from 'react';
import MaterialButton from '@material-ui/core/Button';

// ? Button background color is defined in _styles file where is used
export default function Button({ children, onClick }) {
  return (
    <MaterialButton className='Button' onClick={onClick}>
      {children}
    </MaterialButton>
  );
}
