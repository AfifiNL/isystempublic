import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './lib/i18n-config';

function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  
  // Check if there's already a locale cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    languages = [cookieLocale, ...languages];
  }
  
  return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;
  
  // Skip if it's an API call, static asset, or custom Next.js resource
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/public/') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.ico')
  ) {
    return NextResponse.next();
  }
  
  // Special handling for legal pages which bypass language routing
  if (pathname.startsWith('/legal')) {
    return NextResponse.next();
  }
  
  // Check if the pathname already includes a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  // Get the preferred locale
  const locale = getLocale(request);
  
  // Create a new URL with the locale prefix
  const newUrl = new URL(
    `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    request.url
  );
  
  // If search params exist, add them to the new URL
  if (request.nextUrl.search) {
    newUrl.search = request.nextUrl.search;
  }
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|public|legal|favicon.ico).*)'],
};