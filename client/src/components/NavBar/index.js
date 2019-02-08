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
      {/* <Link to='/'>
        <NavBrand />
      </Link> */}
      <div className='NavBar__NavLinks'>
        <ul>
          {routes.map(({ text, to }, index) => (
            <NavLink key={index} location={location} to={to}>
              {t(text)}
            </NavLink>
          ))}
        </ul>
        <ChangeLanguageButton />
      </div>
    </div>
  );
}

export default withNamespaces()(NavBar);
