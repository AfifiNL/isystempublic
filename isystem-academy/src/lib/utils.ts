import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS specific merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price with currency
 */
export function formatPrice(
  price: number,
  currency: string = 'EUR',
  locale: string = 'nl-NL'
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
}

/**
 * Get course status label based on status code
 */
export function getCourseStatusLabel(
  status: 'enrollment-open' | 'coming-soon' | 'full' | 'in-progress',
  locale: string = 'nl'
): string {
  const statusLabels = {
    'enrollment-open': {
      nl: 'Inschrijving open',
      en: 'Enrollment open',
      ar: 'التسجيل مفتوح',
      uk: 'Відкрита реєстрація',
    },
    'coming-soon': {
      nl: 'Binnenkort beschikbaar',
      en: 'Coming soon',
      ar: 'قريبًا',
      uk: 'Незабаром',
    },
    'full': {
      nl: 'Volgeboekt',
      en: 'Full',
      ar: 'مكتمل',
      uk: 'Заповнено',
    },
    'in-progress': {
      nl: 'Cursus loopt',
      en: 'In progress',
      ar: 'قيد التقدم',
      uk: 'У процесі',
    },
  };

  return statusLabels[status][locale as keyof typeof statusLabels[typeof status]] || 
         statusLabels[status].en;
}

/**
 * Truncate text to a specific length with ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Generate readable date in the correct locale format
 */
export function formatDate(
  date: Date | string,
  locale: string = 'nl-NL',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
): string {
  const dateToFormat = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateToFormat);
}

/**
 * Convert locale code to full language name
 */
export function localeToLanguageName(locale: string): string {
  const languageNames: Record<string, string> = {
    nl: 'Nederlands',
    en: 'English',
    ar: 'العربية',
    uk: 'Українська',
  };

  return languageNames[locale] || locale;
}

/**
 * Check if email is valid
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Get course difficulty level label
 */
export function getCourseLevelLabel(
  level: 'beginner' | 'intermediate' | 'advanced',
  locale: string = 'nl'
): string {
  const levelLabels = {
    beginner: {
      nl: 'Beginners',
      en: 'Beginner',
      ar: 'مبتدئ',
      uk: 'Початковий',
    },
    intermediate: {
      nl: 'Gemiddeld',
      en: 'Intermediate',
      ar: 'متوسط',
      uk: 'Середній',
    },
    advanced: {
      nl: 'Gevorderd',
      en: 'Advanced',
      ar: 'متقدم',
      uk: 'Просунутий',
    },
  };

  return levelLabels[level][locale as keyof typeof levelLabels[typeof level]] || 
         levelLabels[level].en;
}