import React from 'react';
import { withNamespaces } from 'react-i18next';
import Link from 'react-router-dom/Link';

import Button from '../Button';
import Bio from './Bio';
import Media from './Media';
import Socials from '../Socials';

function ProfileCard({ t }) {
  return (
    <div className='ProfileCard slide-in-blurred-right'>
      <div className='ProfileCard__content'>
        <Media />
        <Bio t={t} />
        <Socials />
      </div>
      <Link to='/contact'>
        <Button>{t('Contact me')}</Button>
      </Link>
    </div>
  );
}

export default withNamespaces()(ProfileCard);
