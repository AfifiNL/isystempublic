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
  
  // Check if we're on a legal page (which bypasses language routing)
  const isLegalPage = pathname?.startsWith('/legal/');
  
  // Replace path segment for correct language link
  const getLocalizedPath = (locale: string) => {
    if (!pathname || isLegalPage) return `/${locale}`;
    
    const segments = pathname.split('/');
    if (segments.length > 1 && i18n.locales.includes(segments[1] as any)) {
      segments[1] = locale;
      return segments.join('/');
    }
    
    return `/${locale}${pathname}`;
  };

  // For legal pages, use Dutch text regardless of the current language
  const displayLanguage = isLegalPage ? 'nl' : currentLanguage;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            href={isLegalPage ? '/' : `/${currentLanguage}`} 
            className="flex items-center gap-2"
          >
            <Image 
              src="/academy-logo.svg" 
              alt="iSystem Academy Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto" 
            />
            <span className="text-xl font-semibold">iSystem Academy</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href={isLegalPage ? '/' : `/${currentLanguage}`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {displayLanguage === 'nl' ? 'Home' : 
             displayLanguage === 'en' ? 'Home' : 
             displayLanguage === 'ar' ? 'الرئيسية' : 'Головна'}
          </Link>
          <Link 
            href={isLegalPage ? '/courses' : `/${currentLanguage}/courses`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {displayLanguage === 'nl' ? 'Cursussen' : 
             displayLanguage === 'en' ? 'Courses' : 
             displayLanguage === 'ar' ? 'الدورات' : 'Курси'}
          </Link>
          <Link 
            href={isLegalPage ? '/enrollment' : `/${currentLanguage}/enrollment`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {displayLanguage === 'nl' ? 'Inschrijven' : 
             displayLanguage === 'en' ? 'Enrollment' : 
             displayLanguage === 'ar' ? 'التسجيل' : 'Зарахування'}
          </Link>
          <Link 
            href="https://isystem.ai" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {displayLanguage === 'nl' ? 'Terug naar iSystem.ai' : 
             displayLanguage === 'en' ? 'Back to iSystem.ai' : 
             displayLanguage === 'ar' ? 'العودة إلى iSystem.ai' : 'Повернутися до iSystem.ai'}
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          {!isLegalPage && (
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
          )}
          
          <Button asChild size="sm">
            <Link href={isLegalPage ? '/enrollment' : `/${currentLanguage}/enrollment`}>
              {displayLanguage === 'nl' ? 'Inschrijven' : 
               displayLanguage === 'en' ? 'Enroll now' : 
               displayLanguage === 'ar' ? 'سجل الآن' : 'Зареєструйтеся зараз'}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}