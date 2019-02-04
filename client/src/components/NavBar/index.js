import React from 'react';
import NavBrand from './NavBrand';
import NavLink from './NavLink';

const routes = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Portfolio',
    to: '/portfolio'
  },
  {
    text: 'Contact',
    to: '/contact'
  }
];

function NavBar() {
  return (
    <div className='NavBar'>
      <NavLink to='/'>
        <NavBrand />
      </NavLink>
      <div className='NavBar__NavLinks'>
        {routes.map(({ text, to }, index) => (
          <NavLink key={index} to={to}>
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
