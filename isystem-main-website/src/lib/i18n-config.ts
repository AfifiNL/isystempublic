export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'nl', 'ar', 'uk'],
  domains: []
};

export type Locale = (typeof i18nConfig)['locales'][number];

/**
 * Returns true if the provided string is a supported locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return i18nConfig.locales.includes(locale as Locale);
}