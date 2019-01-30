import React from 'react';

function Button({ backgroundColor, children, onClick }) {
  return (
    <button
      className='Button'
      onClick={onClick}
      style={{ background: backgroundColor }}
    >
      {children}
    </button>
  );
}

export default Button;
