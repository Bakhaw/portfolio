import React from 'react';
import Link from 'react-router-dom/Link';
import NavBrand from './NavBrand';
import NavLink from './NavLink';

const routes = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Skills',
    to: '/skills'
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

function NavBar({ location }) {
  return (
    <div className='NavBar'>
      <Link to='/'>
        <NavBrand />
      </Link>
      <div className='NavBar__NavLinks'>
        {routes.map(({ text, to }, index) => (
          <NavLink key={index} location={location} to={to}>
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
