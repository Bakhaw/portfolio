import React from 'react';
import Logo from '../../assets/images/favicon.ico';

// text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

function NavBrand() {
  return (
    <div className='NavBar__NavBrand'>
      <img alt='NavBrand logo' className='NavBar__NavBrand__image' src={Logo} />
      <p className='NavBar__NavBrand__text'>Faïssal Hattou</p>
    </div>
  );
}

export default NavBrand;
