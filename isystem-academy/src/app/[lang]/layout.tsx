import React from 'react';
import { Metadata } from 'next';
import { i18n } from '@/lib/i18n-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Properly await params before destructuring in Next.js
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  
  return {
    title: {
      template: '%s | iSystem Academy',
      default: 'iSystem Academy - Learn Integration Skills',
    },
    description: 'Learn essential integration skills for newcomers in the Netherlands',
    alternates: {
      canonical: 'https://isystem.ai/academy',
      languages: {
        'en': 'https://isystem.ai/academy/en',
        'nl': 'https://isystem.ai/academy/nl',
        'ar': 'https://isystem.ai/academy/ar',
        'uk': 'https://isystem.ai/academy/uk',
      },
    },
  };
}

export default function AcademyLangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}