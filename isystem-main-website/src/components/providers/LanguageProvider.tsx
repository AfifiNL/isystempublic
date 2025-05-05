'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import '../../lib/i18n'; // Import i18n configuration

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  changeLanguage: () => {},
  isRtl: false,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isRtl, setIsRtl] = useState<boolean>(false);
  
  // Initialize language from URL or cookie on client-side
  useEffect(() => {
    // Extract language from pathname if present
    const pathLang = pathname?.split('/')[1];
    
    if (pathLang && ['en', 'nl', 'ar', 'uk'].includes(pathLang)) {
      setCurrentLanguage(pathLang);
      i18n.changeLanguage(pathLang);
      Cookies.set('NEXT_LOCALE', pathLang, { expires: 365 });
    } else {
      // Fallback to cookie or browser preference
      const savedLang = Cookies.get('NEXT_LOCALE') || navigator.language.split('-')[0];
      const lang = ['en', 'nl', 'ar', 'uk'].includes(savedLang) ? savedLang : 'en';
      setCurrentLanguage(lang);
      i18n.changeLanguage(lang);
    }
  }, [i18n, pathname]);
  
  // Set RTL status based on current language
  useEffect(() => {
    setIsRtl(currentLanguage === 'ar');
    
    // Set HTML dir attribute for RTL support
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);
  }, [currentLanguage]);
  
  // Function to change language
  const changeLanguage = (lang: string) => {
    if (['en', 'nl', 'ar', 'uk'].includes(lang)) {
      setCurrentLanguage(lang);
      i18n.changeLanguage(lang);
      Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
      
      // Update URL to reflect language change
      const segments = pathname?.split('/') || [];
      
      if (segments.length > 1 && ['en', 'nl', 'ar', 'uk'].includes(segments[1])) {
        segments[1] = lang;
      } else {
        segments.splice(1, 0, lang);
      }
      
      router.push(segments.join('/'));
    }
  };
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}