import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    template: '%s | iSystem Academy',
    default: 'Juridische Informatie | iSystem Academy',
  },
  description: 'Juridische informatie en voorwaarden voor iSystem Academy.',
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="iSystem Academy Logo" 
              width={120} 
              height={40} 
              className="h-8 w-auto" 
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/nl" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/nl/courses"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cursussen
                </Link>
              </li>
              <li>
                <Link 
                  href="/nl/enrollment"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Inschrijven
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          {children}
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">iSystem Academy</h3>
              <p className="text-gray-600 text-sm">
                Educatieve platform voor nieuwkomers in Nederland.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Juridisch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/legal/terms" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Gebruiksvoorwaarden
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/legal/privacy" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Privacybeleid
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600 text-sm">
                Email: info@isystem.ai<br />
                Telefoon: +31 20 123 4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} iSystem Academy. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}