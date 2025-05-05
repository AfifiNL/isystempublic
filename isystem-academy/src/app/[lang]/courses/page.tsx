import React from 'react';
import { Metadata } from 'next';
import { CourseCard } from '@/components/courses/CourseCard';

export const metadata: Metadata = {
  title: 'Courses | iSystem Academy',
  description: 'Explore our courses for newcomers in the Netherlands',
};

// Mock course data - in a real application, this would come from an API or CMS
const courseData = [
  {
    id: 'dutch-basics',
    status: 'enrollment-open',
    imageUrl: '/images/course-dutch-basics.jpg',
    duration: '8 weeks',
    level: 'beginner',
    titles: {
      nl: 'Nederlandse Basiscursus',
      en: 'Dutch Basics',
      ar: 'أساسيات اللغة الهولندية',
      uk: 'Основи голландської мови',
    },
    descriptions: {
      nl: 'Leer de basis van de Nederlandse taal. Deze cursus is ontworpen voor nieuwkomers die willen beginnen met het leren van Nederlands.',
      en: 'Learn the basics of the Dutch language. This course is designed for newcomers who want to start learning Dutch.',
      ar: 'تعلم أساسيات اللغة الهولندية. تم تصميم هذه الدورة للوافدين الجدد الذين يرغبون في بدء تعلم اللغة الهولندية.',
      uk: 'Вивчіть основи голландської мови. Цей курс розроблений для новачків, які хочуть почати вивчати голландську мову.',
    }
  },
  {
    id: 'dutch-culture',
    status: 'enrollment-open',
    imageUrl: '/images/course-dutch-culture.jpg',
    duration: '6 weeks',
    level: 'beginner',
    titles: {
      nl: 'Nederlandse Cultuur',
      en: 'Dutch Culture',
      ar: 'الثقافة الهولندية',
      uk: 'Голландська культура',
    },
    descriptions: {
      nl: 'Ontdek de Nederlandse cultuur, tradities en gewoonten. Leer hoe Nederlanders leven, werken en ontspannen.',
      en: 'Discover Dutch culture, traditions, and customs. Learn how the Dutch live, work, and relax.',
      ar: 'اكتشف الثقافة والتقاليد والعادات الهولندية. تعرف على كيفية عيش وعمل واسترخاء الهولنديين.',
      uk: 'Відкрийте для себе голландську культуру, традиції та звичаї. Дізнайтеся, як голландці живуть, працюють і відпочивають.',
    }
  },
  {
    id: 'professional-integration',
    status: 'coming-soon',
    imageUrl: '/images/course-professional.jpg',
    duration: '10 weeks',
    level: 'intermediate',
    titles: {
      nl: 'Professionele Integratie',
      en: 'Professional Integration',
      ar: 'الاندماج المهني',
      uk: 'Професійна інтеграція',
    },
    descriptions: {
      nl: 'Bereid je voor op werken in Nederland. Leer over de Nederlandse werkcultuur, sollicitatieprocedures en professionele communicatie.',
      en: 'Prepare for working in the Netherlands. Learn about Dutch work culture, job application procedures, and professional communication.',
      ar: 'استعد للعمل في هولندا. تعرف على ثقافة العمل الهولندية وإجراءات التقدم للوظائف والتواصل المهني.',
      uk: 'Підготуйтеся до роботи в Нідерландах. Дізнайтеся про голландську робочу культуру, процедури подання заявок на роботу та професійне спілкування.',
    }
  },
  {
    id: 'advanced-dutch',
    status: 'in-progress',
    imageUrl: '/images/course-advanced-dutch.jpg',
    duration: '12 weeks',
    level: 'advanced',
    titles: {
      nl: 'Gevorderd Nederlands',
      en: 'Advanced Dutch',
      ar: 'اللغة الهولندية المتقدمة',
      uk: 'Поглиблена голландська мова',
    },
    descriptions: {
      nl: 'Verbeter je Nederlandse taalvaardigheid naar een gevorderd niveau. Deze cursus is geschikt voor mensen die al basiskennis hebben van Nederlands.',
      en: 'Improve your Dutch language skills to an advanced level. This course is suitable for people who already have basic knowledge of Dutch.',
      ar: 'حسّن مهارات اللغة الهولندية لديك إلى مستوى متقدم. هذه الدورة مناسبة للأشخاص الذين لديهم بالفعل معرفة أساسية باللغة الهولندية.',
      uk: 'Покращіть свої навички голландської мови до просунутого рівня. Цей курс підходить для людей, які вже мають базові знання голландської мови.',
    }
  }
];

interface CoursePageProps {
  params: {
    lang: string;
  };
}

export default function CoursesPage({ params }: CoursePageProps) {
  const { lang } = params;
  
  // Translations for page content
  const pageTranslations = {
    title: {
      nl: 'Onze Cursussen',
      en: 'Our Courses',
      ar: 'دوراتنا',
      uk: 'Наші курси',
    },
    subtitle: {
      nl: 'Ontdek onze cursussen om je te helpen integreren in Nederland',
      en: 'Discover our courses to help you integrate in the Netherlands',
      ar: 'اكتشف دوراتنا لمساعدتك على الاندماج في هولندا',
      uk: 'Відкрийте для себе наші курси, які допоможуть вам інтегруватися в Нідерландах',
    },
    filter: {
      nl: 'Filter Cursussen',
      en: 'Filter Courses',
      ar: 'تصفية الدورات',
      uk: 'Фільтрувати курси',
    },
    all: {
      nl: 'Alle',
      en: 'All',
      ar: 'الكل',
      uk: 'Всі',
    },
    available: {
      nl: 'Beschikbaar voor inschrijving',
      en: 'Available for enrollment',
      ar: 'متاح للتسجيل',
      uk: 'Доступно для реєстрації',
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
  };

  // Get translation based on language
  const getTranslation = (key: keyof typeof pageTranslations) => {
    return pageTranslations[key][lang as keyof (typeof pageTranslations)[typeof key]] || pageTranslations[key].en;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {getTranslation('title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {getTranslation('subtitle')}
        </p>
      </div>

      {/* Filters - in a real app, these would be functional */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <h2 className="font-medium mb-3">{getTranslation('filter')}</h2>
        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
            {getTranslation('all')}
          </button>
          <button className="bg-white border border-gray-300 px-4 py-1 rounded-full text-sm hover:bg-gray-50">
            {getTranslation('available')}
          </button>
          <button className="bg-white border border-gray-300 px-4 py-1 rounded-full text-sm hover:bg-gray-50">
            {getTranslation('beginner')}
          </button>
          <button className="bg-white border border-gray-300 px-4 py-1 rounded-full text-sm hover:bg-gray-50">
            {getTranslation('intermediate')}
          </button>
          <button className="bg-white border border-gray-300 px-4 py-1 rounded-full text-sm hover:bg-gray-50">
            {getTranslation('advanced')}
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.titles[lang as keyof typeof course.titles] || course.titles.en}
            description={course.descriptions[lang as keyof typeof course.descriptions] || course.descriptions.en}
            image={course.imageUrl}
            level={course.level as 'beginner' | 'intermediate' | 'advanced'}
            duration={course.duration}
            status={course.status as 'enrollment-open' | 'coming-soon' | 'full' | 'in-progress'}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}