import React from 'react';

export default function Banner({ projectName }) {
  return (
    <div className='fade-in Portfolio__list__listitem__banner__container'>
      <img
        alt='Project screen shot'
        className='Portfolio__list__listitem__banner__image'
        src={`src/assets/projects/${projectName}/banner.webp`}
      />
    </div>
  );
}
