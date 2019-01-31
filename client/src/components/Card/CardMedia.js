import React from 'react';

function CardMedia({ backgroundColor, projectName }) {
  const imgUrl = require(`../../assets/projects/${projectName}/banner.webp`);
  return (
    <div
      className='Card__CardMedia'
      style={{
        background: backgroundColor
      }}
    >
      <div
        className='Card__CardMedia__background'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}

export default CardMedia;
