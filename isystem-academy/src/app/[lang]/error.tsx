'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { getLocalizedUrl } from '@/lib/i18n';

/**
 * Global error component for error handling in the language routes
 * This provides a user-friendly error experience while maintaining branding
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.ReactElement {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  
  // Log the error to console (would be replaced with proper error tracking in production)
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="py-4 px-6 border-b border-slate-200">
            <Logo lang={currentLanguage} size="md" showText={true} />
          </header>
          
          <main className="flex-grow flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center">
              <div className="mb-8">
                <div className="mx-auto w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {t('errors.somethingWentWrong', 'Something went wrong!')}
              </h1>
              
              <p className="text-gray-600 mb-8">
                {t('errors.weHaveBeenNotified', 'We\'ve been notified about this issue and are working to fix it.')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset}>
                  {t('buttons.tryAgain', 'Try again')}
                </Button>
                
                <Link href={getLocalizedUrl(currentLanguage, '/')}>
                  <Button variant="outline">
                    {t('buttons.goHome', 'Go to homepage')}
                  </Button>
                </Link>
              </div>
            </div>
          </main>
          
          <footer className="py-4 px-6 border-t border-slate-200 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} iSystem Academy
          </footer>
        </div>
      </body>
    </html>
  );
}
