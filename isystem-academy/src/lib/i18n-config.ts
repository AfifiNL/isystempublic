export const i18n = {
  defaultLocale: 'nl',
  locales: ['nl', 'en', 'ar', 'uk'],
  localeNames: {
    nl: 'Nederlands',
    en: 'English',
    ar: 'العربية',
    uk: 'Українська',
  },
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}