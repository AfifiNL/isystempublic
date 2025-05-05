import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'iSystem.ai - Integration Platform for Newcomers',
  description: 'AI-powered integration platform for newcomers in the Netherlands',
};

export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex flex-col gap-4 md:gap-6 max-w-md md:max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                {params.lang === 'nl' 
                  ? 'Integratie voor nieuwkomers, verbeterd door AI' 
                  : params.lang === 'en' 
                  ? 'Integration for newcomers, enhanced by AI'
                  : params.lang === 'ar'
                  ? 'الاندماج للقادمين الجدد، معزز بالذكاء الاصطناعي'
                  : 'Інтеграція для новоприбулих, покращена штучним інтелектом'}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                {params.lang === 'nl' 
                  ? 'iSystem.ai helpt nieuwkomers in Nederland om eenvoudig te integreren met behulp van AI technologie en persoonlijke begeleiding.' 
                  : params.lang === 'en' 
                  ? 'iSystem.ai helps newcomers in the Netherlands to integrate easily using AI technology and personal guidance.'
                  : params.lang === 'ar'
                  ? 'يساعد iSystem.ai القادمين الجدد في هولندا على الاندماج بسهولة باستخدام تقنية الذكاء الاصطناعي والتوجيه الشخصي.'
                  : 'iSystem.ai допомагає новоприбулим у Нідерландах легко інтегруватися за допомогою технології штучного інтелекту та персонального керівництва.'}
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href={`/${params.lang}/contact`}>
                    {params.lang === 'nl' ? 'Start nu' : 
                     params.lang === 'en' ? 'Get started' : 
                     params.lang === 'ar' ? 'ابدأ الآن' : 'Почати'}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/academy">
                    {params.lang === 'nl' ? 'Bekijk academy' : 
                     params.lang === 'en' ? 'View academy' : 
                     params.lang === 'ar' ? 'عرض الأكاديمية' : 'Переглянути академію'}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[500px] aspect-video w-full max-w-lg md:max-w-xl lg:max-w-2xl">
              <Image
                src="/hero-image.jpg"
                alt="iSystem.ai Integration Platform"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              {params.lang === 'nl' ? 'Waarom iSystem.ai?' : 
               params.lang === 'en' ? 'Why iSystem.ai?' : 
               params.lang === 'ar' ? 'لماذا iSystem.ai؟' : 'Чому iSystem.ai?'}
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl">
              {params.lang === 'nl' 
                ? 'Wij combineren AI-technologie met persoonlijke begeleiding om nieuwkomers te helpen sneller en effectiever te integreren.' 
                : params.lang === 'en' 
                ? 'We combine AI technology with personal guidance to help newcomers integrate faster and more effectively.'
                : params.lang === 'ar'
                ? 'نحن نجمع بين تقنية الذكاء الاصطناعي والتوجيه الشخصي لمساعدة القادمين الجدد على الاندماج بشكل أسرع وأكثر فعالية.'
                : 'Ми поєднуємо технологію штучного інтелекту з особистим керівництвом, щоб допомогти новоприбулим інтегруватися швидше та ефективніше.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}