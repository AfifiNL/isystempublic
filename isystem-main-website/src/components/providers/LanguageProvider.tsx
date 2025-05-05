'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { i18n, Locale, localeDirections } from '@/lib/i18n-config';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  currentLanguage: Locale;
  isRtl: boolean;
  changeLanguage: (newLocale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const { i18n: i18nInstance } = useTranslation();
  
  // Initialize with default locale, but update from URL params when available
  const [currentLanguage, setCurrentLanguage] = useState<Locale>(i18n.defaultLocale);
  const isRtl = localeDirections[currentLanguage] === 'rtl';
  
  // Set language from URL parameters
  useEffect(() => {
    if (params && params.lang && typeof params.lang === 'string') {
      const newLocale = params.lang as Locale;
      if (i18n.locales.includes(newLocale)) {
        setCurrentLanguage(newLocale);
        i18nInstance.changeLanguage(newLocale);
        document.documentElement.lang = newLocale;
        document.documentElement.dir = localeDirections[newLocale];
        Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 });
      }
    }
  }, [params, i18nInstance]);
  
  // Function to change language by redirecting to the same page with different locale
  const changeLanguage = (newLocale: Locale) => {
    if (!pathname) return;
    
    // Get current path segments
    const segments = pathname.split('/');
    
    // Check if the first segment (after empty string) is a locale
    if (i18n.locales.includes(segments[1] as Locale)) {
      // Replace the locale segment
      segments[1] = newLocale;
      const newPath = segments.join('/');
      router.push(newPath);
    }
  };
  
  // Set RTL direction based on language
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl]);
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, isRtl, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}