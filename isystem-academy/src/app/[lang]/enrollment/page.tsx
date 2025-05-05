import React from 'react';
import { Metadata } from 'next';
import { EnrollmentForm } from '@/components/forms/EnrollmentForm';

export const metadata: Metadata = {
  title: 'Course Enrollment | iSystem Academy',
  description: 'Enroll in iSystem Academy courses for newcomers in the Netherlands',
};

export default function EnrollmentPage({ params, searchParams }: { 
  params: { lang: string },
  searchParams?: { course?: string }
}) {
  const { lang } = params;
  const courseSlug = searchParams?.course || '';

  const title = {
    nl: 'Inschrijven voor Cursus',
    en: 'Course Enrollment',
    ar: 'التسجيل في الدورة',
    uk: 'Зарахування на курс'
  };

  const subtitle = {
    nl: 'Vul het formulier hieronder in om je in te schrijven voor een van onze cursussen.',
    en: 'Fill out the form below to enroll in one of our courses.',
    ar: 'املأ النموذج أدناه للتسجيل في إحدى دوراتنا.',
    uk: 'Заповніть форму нижче, щоб зареєструватися на один із наших курсів.'
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {title[lang as keyof typeof title]}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle[lang as keyof typeof subtitle]}
        </p>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <EnrollmentForm lang={lang} preselectedCourse={courseSlug} />
      </div>
    </div>
  );
}