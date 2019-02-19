import React from 'react';
import { withNamespaces } from 'react-i18next';
import ChangeLanguageButton from '../ChangeLanguageButton';
import NavLink from './NavLink';
import routes from './routes';

function NavBar({ t }) {
  return (
    <div className='NavBar'>
      <div className='NavBar__NavLinks'>
        <ul>
          {routes.map(({ text, to }, index) => (
            <li key={index}>
              <NavLink to={to}>{t(text)}</NavLink>
            </li>
          ))}
        </ul>
        <ChangeLanguageButton />
      </div>
    </div>
  );
}

export default withNamespaces()(NavBar);
