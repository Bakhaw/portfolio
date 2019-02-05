import React from 'react';
import Link from 'react-router-dom/Link';
import Me from '../../assets/images/me.svg';
import Button from '../Button';
import Socials from '../Socials';

function Hero() {
  return (
    <div className='Hero flicker-in'>
      <div className='Hero__HeroCard'>
        <img alt='Me' className='Hero__HeroCard__image' src={Me} />
        <div className='Hero__HeroCard__profile'>
          <h1>Faïssal Hattou</h1>
          <h2>Web developer</h2>
        </div>
        <h2 className='Hero__HeroCard__location'>Paris, France</h2>
        <Socials />
      </div>
      <Link to='/contact'>
        <Button backgroundColor='#706dd8'>Contact me</Button>
      </Link>
    </div>
  );
}

export default Hero;
