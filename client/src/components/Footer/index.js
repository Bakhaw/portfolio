import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const socials = [
  {
    href: 'https://www.linkedin.com/in/faissal-hattou/',
    icon: 'linkedin'
  },
  {
    href: 'https://twitter.com/Faissal_Hattou',
    icon: 'twitter'
  },
  {
    href: 'https://github.com/Bakhaw/',
    icon: 'github'
  }
];

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer__contact__button'>
        <Link to='/contact'>
          <Button backgroundColor='#ef4b6c'>Contact me !</Button>
        </Link>
      </div>
      <div className='Footer__socials'>
        {socials.map(({ href, icon }, index) => (
          <a key={index} href={href} rel='noopener noreferrer' target='_blank'>
            <img
              alt={`icône ${icon}`}
              className='Footer__socials__icon'
              src={require(`../../assets/socials/${icon}.svg`)}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
