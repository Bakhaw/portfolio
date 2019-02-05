import React from 'react';

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

function Socials() {
  return (
    <div className='Socials'>
      {socials.map(({ href, icon }, index) => (
        <a key={index} href={href} rel='noopener noreferrer' target='_blank'>
          <img
            alt={`icône ${icon}`}
            className='Socials__icon'
            src={`src/assets/socials/${icon}.webp`}
          />
        </a>
      ))}
    </div>
  );
}

export default Socials;
