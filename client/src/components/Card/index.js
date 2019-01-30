import React from 'react';
import CardMedia from './CardMedia';
import CardTitle from './CardTitle';

// See props list in components/CardMedia.js
function Card(props) {
  return (
    <div className='Card'>
      <CardMedia {...props} />
      <CardTitle {...props} />
    </div>
  );
}

export default Card;
