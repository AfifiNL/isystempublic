export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'nl', 'ar', 'uk'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames = {
  en: 'English',
  nl: 'Nederlands',
  ar: 'العربية',
  uk: 'Українська',
};

export const localeDirections = {
  en: 'ltr',
  nl: 'ltr',
  ar: 'rtl',
  uk: 'ltr',
};