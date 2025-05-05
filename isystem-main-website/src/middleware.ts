import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import { i18n } from './lib/i18n-config';

// Get the user locale preferences
function getLocale(request: NextRequest) {
  // Retrieve the locale from cookie first (for persisting user's choice)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // If no cookie, detect from headers
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language') || '';
  headers.set('accept-language', acceptLanguage);

  const negotiator = new Negotiator({ headers: Object.fromEntries(headers.entries()) });
  
  try {
    const languages = negotiator.languages();
    return matchLocale(languages, i18n.locales, i18n.defaultLocale);
  } catch (error) {
    console.error('Error matching locale:', error);
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Special case for legal pages that bypass language routing
  if (pathname.startsWith('/legal/')) {
    return NextResponse.next();
  }

  // If it needs a locale, redirect
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // For the root path, redirect to the locale 
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    // Otherwise, prepend the locale to the path
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except for:
  // - API routes
  // - Static files (e.g. images, icons)
  // - favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};