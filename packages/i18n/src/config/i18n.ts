import type { RequestTranslationCallback } from '../types';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import requestTranslation from '../helpers/request-translation';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '{{lng}}/{{ns}}',
      async request(
        _config: any,
        path: string,
        _payload: any,
        callback: RequestTranslationCallback
      ) {
        await requestTranslation(path, callback);
      },
    },
    debug: process.env.NODE_ENV === 'development',
    defaultNS: false,
    fallbackLng: 'en',
    fallbackNS: false,
    interpolation: {
      escapeValue: false,
    },
    ns: [],
    react: {
      transKeepBasicHtmlNodesFor: ['a', 'b', 'br', 'em', 'i', 'li', 'ol', 'strong', 'ul'],
    },
    returnNull: false,
    supportedLngs: ['en', 'es'],
  });

export default i18next;
