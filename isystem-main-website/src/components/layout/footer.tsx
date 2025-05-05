'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Container } from '@/components/ui/container';
import { getAcademyUrl } from '@/lib/academyHelpers';

export function Footer() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Get the Academy URL using the central helper
  const academyUrl = getAcademyUrl(currentLanguage);
  
  // Navigation sections
  const footerSections = [
    {
      title: t('footer.platform'),
      links: [
        { href: `/${currentLanguage}/platform`, label: t('nav.platform') },
        { href: academyUrl, label: t('nav.academy') }
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { href: `/${currentLanguage}/about`, label: t('nav.about') },
        { href: `/${currentLanguage}/contact`, label: t('nav.contact') }
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { href: `/${currentLanguage}/privacy`, label: t('footer.privacy') },
        { href: `/${currentLanguage}/terms`, label: t('footer.terms') }
      ],
    },
  ];
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href={`/${currentLanguage}`} className="flex items-center mb-4">
              <span className="text-xl font-bold text-primary">iSystem.ai</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="h-5 w-5 text-gray-600 hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="h-5 w-5 text-gray-600 hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.072 10.072 0 01-3.127 1.195A4.92 4.92 0 0016.953 2a4.93 4.93 0 00-4.926 4.926c0 .387.042.763.12 1.124C7.69 7.827 4.072 5.857 1.67 2.915A4.93 4.93 0 001 5.93a4.923 4.923 0 002.19 4.097 4.875 4.875 0 01-2.23-.616v.06c0 2.39 1.7 4.38 3.95 4.83a4.982 4.982 0 01-2.224.085 4.934 4.934 0 004.6 3.42 9.884 9.884 0 01-6.115 2.108A10.065 10.065 0 010 20.1c2.112 1.36 4.61 2.14 7.3 2.14 8.754 0 13.545-7.257 13.545-13.546 0-.206-.005-.412-.015-.618A9.71 9.71 0 0024 4.588z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Columns */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; {currentYear} iSystem.ai. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-600">{t('footer.madein')}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}