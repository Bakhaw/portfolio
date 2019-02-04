import React from 'react';
import Me from '../../assets/images/me.svg';

function Hero() {
  return (
    <div className='Hero flicker-inz'>
      <img className='Hero__image' src={Me} />
      <h1 className='Hero__text Hero__title'>Faïssal Hattou</h1>
      <h2 className='Hero__text'>Web developer</h2>
      <h2 className='Hero__text'>Paris, France</h2>
    </div>
  );
}

export default Hero;
