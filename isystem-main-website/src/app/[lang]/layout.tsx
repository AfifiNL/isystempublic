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
      template: '%s | iSystem.ai',
      default: 'iSystem.ai - Integration Platform for Newcomers',
    },
    description: 'AI-powered integration platform for newcomers in the Netherlands',
    alternates: {
      canonical: 'https://isystem.ai',
      languages: {
        'en': 'https://isystem.ai/en',
        'nl': 'https://isystem.ai/nl',
        'ar': 'https://isystem.ai/ar',
        'uk': 'https://isystem.ai/uk',
      },
    },
  };
}

export default function LangLayout({
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