import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from './en/translations.json';
import translationFR from './fr/translations.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passesi18n downto react-i18next
  .init({
    detection: {
      order: ['localStorage', 'navigator', 'querystring', 'cookie', 'htmlTag']
    },
    resources,
    fallbackLng: 'fr', // use fr is detected lng is not available
    keySeparator: false, // we do not usekeys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
