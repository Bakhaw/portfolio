import React from 'react';
import { withNamespaces } from 'react-i18next';

function MailSent({ t }) {
  const joy = '\u{1F389}';
  return (
    <div className='MailSent'>
      <h3>
        {t('MailSent__success')} {joy} {joy}
      </h3>
      <img
        alt='Mail sent'
        className='MailSent__image'
        src='assets/images/mail_sent.png'
      />
    </div>
  );
}

export default withNamespaces()(MailSent);
