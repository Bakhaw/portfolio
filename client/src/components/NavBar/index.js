import React from 'react';
import { withNamespaces } from 'react-i18next';
import ChangeLanguageButton from '../ChangeLanguageButton';
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

function NavBar({ t }) {
  return (
    <div className='NavBar'>
      <div className='NavBar__NavLinks'>
        <ul>
          {routes.map(({ text, to }, index) => (
            <NavLink key={index} to={to}>
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
