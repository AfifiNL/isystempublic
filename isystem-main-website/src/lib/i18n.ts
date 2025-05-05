'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translations
import enTranslation from '../locales/en/translation.json';
import nlTranslation from '../locales/nl/translation.json';
import arTranslation from '../locales/ar/translation.json';
import ukTranslation from '../locales/uk/translation.json';

// Export resources for metadata generation
export const resources = {
  en: {
    translation: enTranslation
  },
  nl: {
    translation: nlTranslation
  },
  ar: {
    translation: arTranslation
  },
  uk: {
    translation: ukTranslation
  }
};

// Initialize i18n
// The initialization needs to happen regardless of environment
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // not needed for React
    },
    detection: {
      order: ['path', 'cookie', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['cookie']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;