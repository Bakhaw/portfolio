import React from 'react';
import i18n from '../../i18n';

export default function ChangeLanguageButton() {
  const currentLng = window.localStorage.i18nextLng === 'fr-FR' ? 'FR' : 'EN';
  const flag = currentLng === 'FR' ? 'france' : 'uk';
  return (
    <img
      alt='Change language button'
      className='ChangeLanguageButton'
      onClick={() => i18n.changeLanguage(currentLng === 'FR' ? 'en' : 'fr-FR')}
      src={`assets/images/${flag}.svg`}
    />
  );
}
