import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'iSystem Academy',
  description: 'Educational platform for newcomers in the Netherlands',
};

interface HomePageProps {
  params: {
    lang: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  
  // Content translations
  const content = {
    hero: {
      title: {
        nl: 'Begin je nieuwe hoofdstuk in Nederland',
        en: 'Start your new chapter in the Netherlands',
        ar: 'ابدأ فصلك الجديد في هولندا',
        uk: 'Почніть нову главу в Нідерландах',
      },
      subtitle: {
        nl: 'Leer de taal, ontdek de cultuur en creëer je toekomst',
        en: 'Learn the language, discover the culture, and create your future',
        ar: 'تعلم اللغة، اكتشف الثقافة، وأنشئ مستقبلك',
        uk: 'Вивчайте мову, відкривайте культуру та створюйте своє майбутнє',
      },
      cta: {
        nl: 'Bekijk onze cursussen',
        en: 'View our courses',
        ar: 'عرض دوراتنا',
        uk: 'Переглянути наші курси',
      },
    },
    features: {
      title: {
        nl: 'Waarom kiezen voor iSystem Academy?',
        en: 'Why choose iSystem Academy?',
        ar: 'لماذا تختار أكاديمية iSystem؟',
        uk: 'Чому вибирають Академію iSystem?',
      },
      items: [
        {
          title: {
            nl: 'Taal & Cultuur',
            en: 'Language & Culture',
            ar: 'اللغة والثقافة',
            uk: 'Мова та культура',
          },
          description: {
            nl: 'Leer Nederlands en ontdek de Nederlandse cultuur in een interactieve leeromgeving.',
            en: 'Learn Dutch and explore Dutch culture in an interactive learning environment.',
            ar: 'تعلم اللغة الهولندية واكتشف الثقافة الهولندية في بيئة تعليمية تفاعلية.',
            uk: 'Вивчайте голландську мову та досліджуйте голландську культуру в інтерактивному навчальному середовищі.',
          },
        },
        {
          title: {
            nl: 'Professionele Vaardigheden',
            en: 'Professional Skills',
            ar: 'المهارات المهنية',
            uk: 'Професійні навички',
          },
          description: {
            nl: 'Ontwikkel vaardigheden die je nodig hebt om succesvol te zijn op de Nederlandse arbeidsmarkt.',
            en: 'Develop the skills you need to succeed in the Dutch job market.',
            ar: 'طور المهارات التي تحتاجها للنجاح في سوق العمل الهولندي.',
            uk: 'Розвивайте навички, необхідні для успіху на голландському ринку праці.',
          },
        },
        {
          title: {
            nl: 'Gemeenschap',
            en: 'Community',
            ar: 'المجتمع',
            uk: 'Спільнота',
          },
          description: {
            nl: 'Word deel van een ondersteunende gemeenschap van studenten en professionals.',
            en: 'Become part of a supportive community of students and professionals.',
            ar: 'كن جزءًا من مجتمع داعم من الطلاب والمحترفين.',
            uk: 'Станьте частиною дружньої спільноти студентів та професіоналів.',
          },
        },
      ],
    },
    courses: {
      title: {
        nl: 'Onze Populaire Cursussen',
        en: 'Our Popular Courses',
        ar: 'دوراتنا الشائعة',
        uk: 'Наші популярні курси',
      },
      viewAll: {
        nl: 'Bekijk alle cursussen',
        en: 'View all courses',
        ar: 'عرض جميع الدورات',
        uk: 'Переглянути всі курси',
      },
    },
    testimonials: {
      title: {
        nl: 'Wat onze studenten zeggen',
        en: 'What our students say',
        ar: 'ما يقوله طلابنا',
        uk: 'Що кажуть наші студенти',
      },
    },
    cta: {
      title: {
        nl: 'Klaar om te beginnen?',
        en: 'Ready to get started?',
        ar: 'مستعد للبدء؟',
        uk: 'Готові почати?',
      },
      subtitle: {
        nl: 'Schrijf je vandaag nog in voor een cursus en begin aan je nieuwe hoofdstuk in Nederland.',
        en: 'Enroll in a course today and start your new chapter in the Netherlands.',
        ar: 'سجل في دورة اليوم وابدأ فصلك الجديد في هولندا.',
        uk: 'Зареєструйтеся на курс сьогодні та почніть свою нову главу в Нідерландах.',
      },
      button: {
        nl: 'Inschrijven',
        en: 'Enroll Now',
        ar: 'سجل الآن',
        uk: 'Зареєструватися зараз',
      },
    },
  };

  // Helper function to get translated content
  const t = (obj: any, key: string) => {
    return obj[key]?.[lang] || obj[key]?.en || '';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t(content.hero, 'title')}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {t(content.hero, 'subtitle')}
            </p>
            <Link href={`/${lang}/courses`}>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                {t(content.hero, 'cta')}
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/hero-academy.jpg" 
                alt="Students learning" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t(content.features, 'title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.items.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* Icon would go here */}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(feature, 'title')}
                </h3>
                <p className="text-gray-600">
                  {t(feature, 'description')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {t(content.courses, 'title')}
            </h2>
            <Link href={`/${lang}/courses`} className="text-blue-600 hover:underline">
              {t(content.courses, 'viewAll')} →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course cards would go here */}
            <div className="bg-gray-100 h-64 rounded-lg animate-pulse"></div>
            <div className="bg-gray-100 h-64 rounded-lg animate-pulse"></div>
            <div className="bg-gray-100 h-64 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t(content.cta, 'title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t(content.cta, 'subtitle')}
          </p>
          <Link href={`/${lang}/enrollment`}>
            <Button size="lg">
              {t(content.cta, 'button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}