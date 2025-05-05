import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Courses | iSystem Academy',
  description: 'Explore our courses for newcomers in the Netherlands',
};

type CourseProps = {
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
  slug: string;
};

// Course component
const CourseCard = ({ course, lang }: { course: CourseProps; lang: string }) => {
  const { title, description, level, duration, image, slug } = course;

  const levelText = {
    nl: 'Niveau',
    en: 'Level',
    ar: 'المستوى',
    uk: 'Рівень',
  };

  const durationText = {
    nl: 'Duur',
    en: 'Duration',
    ar: 'المدة',
    uk: 'Тривалість',
  };

  const enrollText = {
    nl: 'Inschrijven',
    en: 'Enroll Now',
    ar: 'سجل الآن',
    uk: 'Зареєструватися',
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl course-card">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between mb-4 text-sm">
          <div>
            <span className="font-medium">{levelText[lang as keyof typeof levelText]}: </span>
            {level}
          </div>
          <div>
            <span className="font-medium">{durationText[lang as keyof typeof durationText]}: </span>
            {duration}
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={\`/\${lang}/enrollment?course=\${slug}\`}>
            {enrollText[lang as keyof typeof enrollText]}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function CoursesPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  const courseData = [
    {
      title: lang === 'nl' ? 'Nederlandse Basiscursus' : 
             lang === 'en' ? 'Dutch Basics' : 
             lang === 'ar' ? 'أساسيات اللغة الهولندية' : 
                           'Основи голландської мови',
      description: lang === 'nl' ? 'Leer de basisprincipes van de Nederlandse taal voor dagelijks gebruik.' : 
                   lang === 'en' ? 'Learn the fundamentals of the Dutch language for everyday use.' : 
                   lang === 'ar' ? 'تعلم أساسيات اللغة الهولندية للاستخدام اليومي.' : 
                                'Вивчіть основи голландської мови для повсякденного використання.',
      level: lang === 'nl' ? 'Beginner' : 
             lang === 'en' ? 'Beginner' : 
             lang === 'ar' ? 'مبتدئ' : 
                           'Початковий',
      duration: lang === 'nl' ? '8 weken' : 
                lang === 'en' ? '8 weeks' : 
                lang === 'ar' ? '٨ أسابيع' : 
                              '8 тижнів',
      image: '/course-dutch.jpg',
      slug: 'dutch-basics'
    },
    {
      title: lang === 'nl' ? 'Nederlandse Cultuur' : 
             lang === 'en' ? 'Dutch Culture' : 
             lang === 'ar' ? 'الثقافة الهولندية' : 
                           'Голландська культура',
      description: lang === 'nl' ? 'Ontdek de Nederlandse cultuur, tradities en sociale normen.' : 
                   lang === 'en' ? 'Discover Dutch culture, traditions, and social norms.' : 
                   lang === 'ar' ? 'اكتشف الثقافة الهولندية والتقاليد والمعايير الاجتماعية.' : 
                                'Відкрийте для себе голландську культуру, традиції та соціальні норми.',
      level: lang === 'nl' ? 'Beginner' : 
             lang === 'en' ? 'Beginner' : 
             lang === 'ar' ? 'مبتدئ' : 
                           'Початковий',
      duration: lang === 'nl' ? '4 weken' : 
                lang === 'en' ? '4 weeks' : 
                lang === 'ar' ? '٤ أسابيع' : 
                              '4 тижнів',
      image: '/course-culture.jpg',
      slug: 'dutch-culture'
    },
    {
      title: lang === 'nl' ? 'Professionele Integratie' : 
             lang === 'en' ? 'Professional Integration' : 
             lang === 'ar' ? 'الاندماج المهني' : 
                           'Професійна інтеграція',
      description: lang === 'nl' ? 'Leer de Nederlandse arbeidsmarkt kennen en ontwikkel waardevolle professionele vaardigheden.' : 
                   lang === 'en' ? 'Learn about the Dutch job market and develop valuable professional skills.' : 
                   lang === 'ar' ? 'تعرف على سوق العمل الهولندي وطور المهارات المهنية القيمة.' : 
                                'Дізнайтеся про голландський ринок праці та розвивайте цінні професійні навички.',
      level: lang === 'nl' ? 'Gemiddeld' : 
             lang === 'en' ? 'Intermediate' : 
             lang === 'ar' ? 'متوسط' : 
                           'Середній',
      duration: lang === 'nl' ? '6 weken' : 
                lang === 'en' ? '6 weeks' : 
                lang === 'ar' ? '٦ أسابيع' : 
                              '6 тижнів',
      image: '/course-professional.jpg',
      slug: 'professional-integration'
    }
  ];

  const title = 
    lang === 'nl' ? 'Onze Cursussen' : 
    lang === 'en' ? 'Our Courses' : 
    lang === 'ar' ? 'دوراتنا' : 
    'Наші курси';

  const description = 
    lang === 'nl' ? 'Ontdek onze cursussen voor nieuwkomers in Nederland' : 
    lang === 'en' ? 'Explore our courses for newcomers in the Netherlands' : 
    lang === 'ar' ? 'استكشف دوراتنا للقادمين الجدد في هولندا' : 
    'Перегляньте наші курси для новоприбулих у Нідерландах';

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <CourseCard key={index} course={course} lang={lang} />
        ))}
      </div>
    </div>
  );
}