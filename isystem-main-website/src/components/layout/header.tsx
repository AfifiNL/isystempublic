'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { i18n } from '@/lib/i18n-config';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();
  const { currentLanguage, changeLanguage } = useLanguage();
  
  // Replace path segment for correct language link
  const getLocalizedPath = (locale: string) => {
    if (!pathname) return `/${locale}`;
    
    const segments = pathname.split('/');
    if (segments.length > 1 && i18n.locales.includes(segments[1] as any)) {
      segments[1] = locale;
      return segments.join('/');
    }
    
    return `/${locale}${pathname}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/${currentLanguage}`} className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="iSystem.ai Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto" 
            />
            <span className="text-xl font-semibold">iSystem.ai</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href={`/${currentLanguage}`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {currentLanguage === 'nl' ? 'Home' : 
             currentLanguage === 'en' ? 'Home' : 
             currentLanguage === 'ar' ? 'الرئيسية' : 'Головна'}
          </Link>
          <Link 
            href={`/${currentLanguage}/about`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {currentLanguage === 'nl' ? 'Over ons' : 
             currentLanguage === 'en' ? 'About us' : 
             currentLanguage === 'ar' ? 'من نحن' : 'Про нас'}
          </Link>
          <Link 
            href={`/${currentLanguage}/contact`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {currentLanguage === 'nl' ? 'Contact' : 
             currentLanguage === 'en' ? 'Contact' : 
             currentLanguage === 'ar' ? 'اتصل بنا' : 'Контакти'}
          </Link>
          <Link 
            href="/academy" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {currentLanguage === 'nl' ? 'Academy' : 
             currentLanguage === 'en' ? 'Academy' : 
             currentLanguage === 'ar' ? 'الأكاديمية' : 'Академія'}
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {i18n.locales.map((locale) => (
              <Button
                key={locale}
                variant={locale === currentLanguage ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage(locale)}
                className="text-xs h-8 px-2"
              >
                {locale.toUpperCase()}
              </Button>
            ))}
          </div>
          
          <Button asChild size="sm">
            <Link href={`/${currentLanguage}/contact`}>
              {currentLanguage === 'nl' ? 'Start nu' : 
               currentLanguage === 'en' ? 'Get started' : 
               currentLanguage === 'ar' ? 'ابدأ الآن' : 'Почати'}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}