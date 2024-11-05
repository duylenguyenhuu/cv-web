export const RESOURCE_KEYS = {
  application: {
    header: {
      userinfo1: {
        labels: {
          loggedInAs: 'application.header.userinfo1.label...',
          logoutButton: '',
          them: 'application.header.userinfo',
        },
      },
    },
  },
};

const a = RESOURCE_KEYS.application.header.userinfo1.labels.loggedInAs;
const b = 'application.header.userinfo1.labels.loggedInAs';

type LanguageKeys = typeof RESOURCE_KEYS;

const en: LanguageKeys = {
  application: {
    header: {
      userinfo1: {
        loggedInAs: 'loggedInAs',
        logoutButton: '',
        them: 'Them test',
      },
    },
  },
};
const vn = { 'index.hi': 'xin chào' };

const de = { 'index.hi': 'hello' };

const RESOURCES = {
  en,
  vn,
  de,
};
const { t } = useTranslation('translation', { lng: 'de' });
const language = 'en';
const test = RESOURCES[language].application.header.userinfo1.labels.them;
const text = t('application.header.userinfo1.labels.loggedInAs');
const text = t(en.application.header.userinfo1.labels.them);
