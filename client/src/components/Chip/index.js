import React from 'react';

function Chip({ backgroundColor, text }) {
  return (
    <div
      className='Chip'
      style={{
        backgroundColor
      }}
    >
      <span>{text}</span>
    </div>
  );
}

export default Chip;
