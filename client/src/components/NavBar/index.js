import React from 'react';
import { withNamespaces } from 'react-i18next';
import Link from 'react-router-dom/Link';
import ChangeLanguageButton from '../ChangeLanguageButton';
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

function NavBar({ location, t }) {
  return (
    <div className='NavBar'>
      <Link to='/'>
        <NavBrand />
      </Link>
      <ChangeLanguageButton />
      <div className='NavBar__NavLinks'>
        {routes.map(({ text, to }, index) => (
          <NavLink key={index} location={location} to={to}>
            {t(text)}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default withNamespaces()(NavBar);
