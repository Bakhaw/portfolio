import React from 'react';
import ContentWrapper from '../ContentWrapper';
import Me from '../../assets/images/me.svg';

function Hero() {
  return (
    <ContentWrapper>
      <div className='Hero'>
        <div className='Hero__HeroCard flicker-inz'>
          <img className='Hero__HeroCard__image' src={Me} />
          <h1 className='Hero__HeroCard__text Hero__HeroCard__title'>
            Faïssal Hattou
          </h1>
          <h2 className='Hero__HeroCard__text'>Web developer</h2>
          <h2 className='Hero__HeroCard__text'>Paris, France</h2>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Hero;
