import { FallbackLng } from './../../node_modules/i18next/typescript/options.d';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'here is your cv': ' Here is your CV',
    },
  },
  vi: {
    translation: {
      'here is your cv': 'Đây là CV của bạn',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
