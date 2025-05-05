'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { getAcademyBaseUrl, getAcademyUrl } from '@/lib/academyHelpers';

export function MainNav() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { currentLanguage, changeLanguage, isRtl } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Navigation items
  const mainNavItems = [
    { href: `/${currentLanguage}`, label: t('nav.home') },
    { href: `/${currentLanguage}/about`, label: t('nav.about') },
    { href: `/${currentLanguage}/contact`, label: t('nav.contact') },
  ];
  
  // Get Academy URL from our centralized helpers
  const academyUrl = getAcademyUrl(currentLanguage);
  
  // Languages
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'ar', name: 'العربية' },
    { code: 'uk', name: 'Українська' },
  ];
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${currentLanguage}`} className="flex items-center">
            <span className="text-xl font-bold text-primary">iSystem.ai</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <a
              href={academyUrl}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === academyUrl ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {t('nav.academy')}
            </a>
            
            {/* Language Selector */}
            <div className="relative ml-6">
              <select
                className="appearance-none bg-transparent border border-gray-300 rounded-md px-3 py-1 text-sm"
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <a
                href={academyUrl}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === academyUrl ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {t('nav.academy')}
              </a>
              
              {/* Mobile Language Selector */}
              <div className="pt-2 pb-2 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {t('nav.language')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={currentLanguage === lang.code ? "default" : "outline"}
                      size="sm"
                      onClick={() => changeLanguage(lang.code)}
                      className="justify-start"
                    >
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}