import React from 'react';
import links from './links';

export default function Socials() {
  return (
    <div className='Socials'>
      {links.map(({ href, icon }, index) => (
        <a key={index} href={href} rel='noopener noreferrer' target='_blank'>
          <img
            alt={`icône ${icon}`}
            className='Socials__icon'
            src={`assets/socials/${icon}.webp`}
          />
        </a>
      ))}
    </div>
  );
}
