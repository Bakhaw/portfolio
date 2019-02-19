import React from 'react';
import { withNamespaces } from 'react-i18next';
import Link from 'react-router-dom/Link';
import Button from '../../components/Button';

function MailSent({ t }) {
  return (
    <div className='MailSent'>
      <h3>{t('MailSent__success')}</h3>
      <img
        alt='Mail sent'
        className='MailSent__image'
        src='assets/images/send-mail-success.svg'
      />
      <Link to='/'>
        <Button>Retour au menu</Button>
      </Link>
    </div>
  );
}

export default withNamespaces()(MailSent);
