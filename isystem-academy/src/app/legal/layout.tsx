import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | iSystem Academy',
    default: 'Juridisch | iSystem Academy',
  },
  description: 'Juridische informatie voor iSystem Academy',
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="legal-layout">
        {children}
      </main>
      <Footer />
    </>
  );
}