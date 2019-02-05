import React from 'react';
import { withNamespaces } from 'react-i18next';
import Link from 'react-router-dom/Link';
import Me from '../../assets/images/me.svg';
import Button from '../Button';
import Socials from '../Socials';

function Hero({ t }) {
  return (
    <div className='Hero slide-in-blurred-right'>
      <div className='Hero__HeroCard'>
        <img alt='Me' className='Hero__HeroCard__image' src={Me} />
        <div className='Hero__HeroCard__profile'>
          <h1>Faïssal Hattou</h1>
          <h2>{t('Web developer')}</h2>
        </div>
        <h2 className='Hero__HeroCard__location'>Paris, France</h2>
        <Socials />
      </div>
      <Link to='/contact'>
        <Button backgroundColor='#706dd8'>{t('Contact me')}</Button>
      </Link>
    </div>
  );
}

export default withNamespaces()(Hero);
