'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  status: 'enrollment-open' | 'coming-soon' | 'full' | 'in-progress';
  lang: string;
}

// Translations object for all the texts
const translations = {
  enroll: {
    nl: 'Inschrijven',
    en: 'Enroll',
    ar: 'التسجيل',
    uk: 'Зареєструватися',
  },
  learnMore: {
    nl: 'Meer informatie',
    en: 'Learn More',
    ar: 'معرفة المزيد',
    uk: 'Дізнатися більше',
  },
  comingSoon: {
    nl: 'Binnenkort beschikbaar',
    en: 'Coming Soon',
    ar: 'قريبًا',
    uk: 'Незабаром',
  },
  full: {
    nl: 'Volgeboekt',
    en: 'Full',
    ar: 'مكتمل',
    uk: 'Заповнено',
  },
  inProgress: {
    nl: 'Cursus loopt',
    en: 'In Progress',
    ar: 'قيد التقدم',
    uk: 'У процесі',
  },
  level: {
    nl: 'Niveau',
    en: 'Level',
    ar: 'المستوى',
    uk: 'Рівень',
  },
  beginner: {
    nl: 'Beginners',
    en: 'Beginner',
    ar: 'مبتدئ',
    uk: 'Початковий',
  },
  intermediate: {
    nl: 'Gemiddeld',
    en: 'Intermediate',
    ar: 'متوسط',
    uk: 'Середній',
  },
  advanced: {
    nl: 'Gevorderd',
    en: 'Advanced',
    ar: 'متقدم',
    uk: 'Просунутий',
  },
  duration: {
    nl: 'Duur',
    en: 'Duration',
    ar: 'المدة',
    uk: 'Тривалість',
  },
};

export function CourseCard({
  id,
  title,
  description,
  image,
  level,
  duration,
  status,
  lang,
}: CourseCardProps) {
  // Get translation based on language
  const getTranslation = (key: keyof typeof translations) => {
    return translations[key][lang as keyof (typeof translations)[typeof key]] || translations[key].en;
  };

  // Get level translation
  const getLevelTranslation = () => {
    return getTranslation(level as keyof typeof translations);
  };

  // Status text and color
  const statusConfig = {
    'enrollment-open': {
      text: getTranslation('enroll'),
      color: 'bg-green-100 text-green-800',
      disabled: false,
    },
    'coming-soon': {
      text: getTranslation('comingSoon'),
      color: 'bg-yellow-100 text-yellow-800',
      disabled: true,
    },
    'full': {
      text: getTranslation('full'),
      color: 'bg-red-100 text-red-800',
      disabled: true,
    },
    'in-progress': {
      text: getTranslation('inProgress'),
      color: 'bg-blue-100 text-blue-800',
      disabled: true,
    },
  };

  const { text, color, disabled } = statusConfig[status];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col h-full transition-transform transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className={`absolute top-4 right-4 rounded-full px-3 py-1 ${color} text-xs font-medium`}>
          {text}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between mt-auto mb-4">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-gray-500">{getTranslation('level')}</span>
            <span className="text-sm font-medium">{getLevelTranslation()}</span>
          </div>
          <div className="flex flex-col space-y-1 items-end">
            <span className="text-xs text-gray-500">{getTranslation('duration')}</span>
            <span className="text-sm font-medium">{duration}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            href={`/${lang}/courses/${id}`} 
            className="flex-1"
          >
            <Button 
              variant="outline" 
              fullWidth={true}
            >
              {getTranslation('learnMore')}
            </Button>
          </Link>
          
          {status === 'enrollment-open' ? (
            <Link 
              href={`/${lang}/enrollment?course=${id}`}
              className="flex-1"
            >
              <Button 
                fullWidth={true}
                disabled={disabled}
              >
                {getTranslation('enroll')}
              </Button>
            </Link>
          ) : (
            <Button 
              fullWidth={true}
              disabled={true}
              className="flex-1"
            >
              {text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}