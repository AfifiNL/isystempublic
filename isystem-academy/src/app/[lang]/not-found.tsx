'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { getLocalizedUrl } from '@/lib/i18n';
import { OptimizedImage } from '@/components/ui/optimized-image';

/**
 * Not Found (404) page component
 * Displays when a page is not found, with proper i18n support
 */
export default function NotFound(): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const isRtl = currentLanguage === 'ar';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with logo */}
      <header className="py-4 px-6 border-b border-slate-200">
        <Logo lang={currentLanguage} size="md" showText={true} />
      </header>
      
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 p-8">
          {/* 404 illustration */}
          <div className="relative w-full max-w-xs h-64">
            <OptimizedImage
              src="/404.svg"
              alt="Page not found illustration"
              fill
              aspectRatio="1/1"
              className="object-contain"
            />
          </div>
          
          {/* Text content */}
          <div className={`text-center md:text-${isRtl ? 'right' : 'left'} max-w-md`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('errors.pageNotFound', 'Page Not Found')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('errors.pageNotFoundDescription', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.')}
            </p>
            
            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href={getLocalizedUrl(currentLanguage, '/')}>
                <Button>
                  {t('buttons.goHome', 'Go to homepage')}
                </Button>
              </Link>
              
              <Link href={getLocalizedUrl(currentLanguage, '/courses')}>
                <Button variant="outline">
                  {t('buttons.exploreCourses', 'Explore Courses')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-4 px-6 border-t border-slate-200 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} iSystem Academy
      </footer>
    </div>
  );
}
