import React from 'react';
import i18n from '../../i18n';
import France from '../../assets/images/france.svg';
import UK from '../../assets/images/uk.svg';

export default function ChangeLanguageButton() {
  const currentLng = window.localStorage.i18nextLng === 'fr-FR' ? 'FR' : 'EN';
  const flag = currentLng === 'FR' ? UK : France;
  return (
    <img
      alt='Change language button'
      className='ChangeLanguageButton'
      onClick={() => i18n.changeLanguage(currentLng === 'FR' ? 'en' : 'fr-FR')}
      src={flag}
    />
  );
}
