import React from 'react';
import Logo from '../../assets/images/pineapple.svg';

function NavBrand() {
  return (
    <div className='NavBar__NavBrand'>
      <img alt='NavBrand logo' className='NavBar__NavBrand__image' src={Logo} />
    </div>
  );
}

export default NavBrand;
