import React from 'react';
import me from '../../assets/images/me.svg';

export default function Media() {
  return (
    <img
      alt='Faïssal Hattou'
      className='ProfileCard__content__media'
      src={me}
    />
  );
}
