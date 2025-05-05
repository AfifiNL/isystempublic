'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export function Footer() {
  const { currentLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Format date based on language
  const formattedDate = format(new Date(), 'PPP', { locale: nl });
  
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href={`/${currentLanguage}`} className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="iSystem.ai Logo" 
                width={32} 
                height={32} 
                className="h-8 w-auto" 
              />
              <span className="text-xl font-semibold">iSystem.ai</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {currentLanguage === 'nl' 
                ? 'AI-gestuurd integratie platform voor nieuwkomers in Nederland' 
                : currentLanguage === 'en' 
                ? 'AI-powered integration platform for newcomers in the Netherlands'
                : currentLanguage === 'ar'
                ? 'منصة تكامل مدعومة بالذكاء الاصطناعي للقادمين الجدد في هولندا'
                : 'Платформа інтеграції на базі штучного інтелекту для новоприбулих у Нідерландах'}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">
              {currentLanguage === 'nl' ? 'Navigatie' : 
               currentLanguage === 'en' ? 'Navigation' : 
               currentLanguage === 'ar' ? 'التنقل' : 'Навігація'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${currentLanguage}`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Home' : 
                   currentLanguage === 'en' ? 'Home' : 
                   currentLanguage === 'ar' ? 'الرئيسية' : 'Головна'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${currentLanguage}/about`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Over ons' : 
                   currentLanguage === 'en' ? 'About us' : 
                   currentLanguage === 'ar' ? 'من نحن' : 'Про нас'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${currentLanguage}/contact`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Contact' : 
                   currentLanguage === 'en' ? 'Contact' : 
                   currentLanguage === 'ar' ? 'اتصل بنا' : 'Контакти'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">
              {currentLanguage === 'nl' ? 'Academy' : 
               currentLanguage === 'en' ? 'Academy' : 
               currentLanguage === 'ar' ? 'الأكاديمية' : 'Академія'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/academy" 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Bekijk cursussen' : 
                   currentLanguage === 'en' ? 'Browse courses' : 
                   currentLanguage === 'ar' ? 'تصفح الدورات' : 'Перегляд курсів'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/academy/nl/enrollment" 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Inschrijven' : 
                   currentLanguage === 'en' ? 'Enroll now' : 
                   currentLanguage === 'ar' ? 'سجل الآن' : 'Зареєструйтеся зараз'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">
              {currentLanguage === 'nl' ? 'Juridisch' : 
               currentLanguage === 'en' ? 'Legal' : 
               currentLanguage === 'ar' ? 'قانوني' : 'Правова інформація'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${currentLanguage}/privacy`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Privacybeleid' : 
                   currentLanguage === 'en' ? 'Privacy Policy' : 
                   currentLanguage === 'ar' ? 'سياسة الخصوصية' : 'Політика конфіденційності'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${currentLanguage}/terms`} 
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {currentLanguage === 'nl' ? 'Algemene voorwaarden' : 
                   currentLanguage === 'en' ? 'Terms of Use' : 
                   currentLanguage === 'ar' ? 'شروط الاستخدام' : 'Умови використання'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} iSystem.ai. {currentLanguage === 'nl' ? 'Alle rechten voorbehouden.' : 
                                              currentLanguage === 'en' ? 'All rights reserved.' : 
                                              currentLanguage === 'ar' ? 'جميع الحقوق محفوظة.' : 
                                              'Усі права захищені.'}
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            {currentLanguage === 'nl' ? `Laatste update: ${formattedDate}` : 
             currentLanguage === 'en' ? `Last updated: ${formattedDate}` : 
             currentLanguage === 'ar' ? `آخر تحديث: ${formattedDate}` : 
             `Останнє оновлення: ${formattedDate}`}
          </p>
        </div>
      </div>
    </footer>
  );
}