import React from 'react';
import { withNamespaces } from 'react-i18next';
import classNames from 'classnames';
import Button from '../../components/Button';

const links = [
  {
    href: 'github',
    text: 'Github__button'
  },
  {
    href: 'online',
    text: 'Demo__button'
  }
];

function Links({ currentProject, t }) {
  return (
    <ul className='Project__links'>
      {links.map(({ href, text }, index) => (
        <li key={index}>
          <a
            className={classNames(
              currentProject.links[href] === null &&
                'Project__links__button__disabled'
            )}
            href={currentProject.links[href]}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Button>{t(text)}</Button>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default withNamespaces()(Links);
