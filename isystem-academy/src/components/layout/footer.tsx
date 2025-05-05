'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { usePathname } from 'next/navigation';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export function Footer() {
  const { currentLanguage } = useLanguage();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  
  // Check if we're on a legal page (which bypasses language routing)
  const isLegalPage = pathname?.startsWith('/legal/');
  
  // For legal pages, use Dutch text regardless of the current language
  const displayLanguage = isLegalPage ? 'nl' : currentLanguage;
  
  // Format date based on language
  const formattedDate = format(new Date(), 'PPP', { locale: nl });
  
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link 
              href={isLegalPage ? '/' : `/${currentLanguage}`} 
              className="flex items-center gap-2 mb-4"
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
            <p className="text-sm text-muted-foreground max-w-xs">
              {displayLanguage === 'nl' 
                ? 'Leer essentiële integratie vaardigheden voor nieuwkomers in Nederland' 
                : displayLanguage === 'en' 
                ? 'Learn essential integration skills for newcomers in the Netherlands'
                : displayLanguage === 'ar'
                ? 'تعلم مهارات الاندماج الأساسية للقادمين الجدد في هولندا'
                : 'Вивчайте основні навички інтеграції для новоприбулих у Нідерландах'}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">
              {displayLanguage === 'nl' ? 'Navigatie' : 
               displayLanguage === 'en' ? 'Navigation' : 
               displayLanguage === 'ar' ? 'التنقل' : 'Навігація'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={isLegalPage ? '/' : `/${currentLanguage}`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Home' : 
                   displayLanguage === 'en' ? 'Home' : 
                   displayLanguage === 'ar' ? 'الرئيسية' : 'Головна'}
                </Link>
              </li>
              <li>
                <Link 
                  href={isLegalPage ? '/courses' : `/${currentLanguage}/courses`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Cursussen' : 
                   displayLanguage === 'en' ? 'Courses' : 
                   displayLanguage === 'ar' ? 'الدورات' : 'Курси'}
                </Link>
              </li>
              <li>
                <Link 
                  href={isLegalPage ? '/enrollment' : `/${currentLanguage}/enrollment`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Inschrijven' : 
                   displayLanguage === 'en' ? 'Enrollment' : 
                   displayLanguage === 'ar' ? 'التسجيل' : 'Зарахування'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">
              {displayLanguage === 'nl' ? 'iSystem.ai' : 
               displayLanguage === 'en' ? 'iSystem.ai' : 
               displayLanguage === 'ar' ? 'iSystem.ai' : 'iSystem.ai'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://isystem.ai" 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Terug naar iSystem.ai' : 
                   displayLanguage === 'en' ? 'Back to iSystem.ai' : 
                   displayLanguage === 'ar' ? 'العودة إلى iSystem.ai' : 'Повернутися до iSystem.ai'}
                </Link>
              </li>
              <li>
                <Link 
                  href="https://isystem.ai/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Contact' : 
                   displayLanguage === 'en' ? 'Contact' : 
                   displayLanguage === 'ar' ? 'اتصل بنا' : 'Контакти'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">
              {displayLanguage === 'nl' ? 'Juridisch' : 
               displayLanguage === 'en' ? 'Legal' : 
               displayLanguage === 'ar' ? 'قانوني' : 'Правова інформація'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/legal/privacy" 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Privacybeleid' : 
                   displayLanguage === 'en' ? 'Privacy Policy' : 
                   displayLanguage === 'ar' ? 'سياسة الخصوصية' : 'Політика конфіденційності'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/terms" 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {displayLanguage === 'nl' ? 'Algemene voorwaarden' : 
                   displayLanguage === 'en' ? 'Terms of Use' : 
                   displayLanguage === 'ar' ? 'شروط الاستخدام' : 'Умови використання'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} iSystem Academy. {displayLanguage === 'nl' ? 'Alle rechten voorbehouden.' : 
                                           displayLanguage === 'en' ? 'All rights reserved.' : 
                                           displayLanguage === 'ar' ? 'جميع الحقوق محفوظة.' : 
                                           'Усі права захищені.'}
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            {displayLanguage === 'nl' ? `Laatste update: ${formattedDate}` : 
             displayLanguage === 'en' ? `Last updated: ${formattedDate}` : 
             displayLanguage === 'ar' ? `آخر تحديث: ${formattedDate}` : 
             `Останнє оновлення: ${formattedDate}`}
          </p>
        </div>
      </div>
    </footer>
  );
}