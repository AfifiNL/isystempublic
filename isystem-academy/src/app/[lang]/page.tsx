import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'iSystem Academy - Learn Integration Skills',
  description: 'Learn essential integration skills for newcomers in the Netherlands',
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
                  ? 'Leer essentiële integratie vaardigheden' 
                  : params.lang === 'en' 
                  ? 'Learn essential integration skills'
                  : params.lang === 'ar'
                  ? 'تعلم مهارات الاندماج الأساسية'
                  : 'Вивчайте основні навички інтеграції'}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                {params.lang === 'nl' 
                  ? 'De iSystem Academy biedt gerichte cursussen om nieuwkomers te helpen succesvol te integreren in de Nederlandse samenleving en arbeidsmarkt.' 
                  : params.lang === 'en' 
                  ? 'iSystem Academy offers targeted courses to help newcomers successfully integrate into Dutch society and the job market.'
                  : params.lang === 'ar'
                  ? 'تقدم أكاديمية iSystem دورات مستهدفة لمساعدة القادمين الجدد على الاندماج بنجاح في المجتمع الهولندي وسوق العمل.'
                  : 'Академія iSystem пропонує цільові курси, щоб допомогти новоприбулим успішно інтегруватися в голландське суспільство та ринок праці.'}
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href={`/${params.lang}/enrollment`}>
                    {params.lang === 'nl' ? 'Inschrijven' : 
                     params.lang === 'en' ? 'Enroll now' : 
                     params.lang === 'ar' ? 'سجل الآن' : 'Зареєструйтеся зараз'}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${params.lang}/courses`}>
                    {params.lang === 'nl' ? 'Bekijk cursussen' : 
                     params.lang === 'en' ? 'Browse courses' : 
                     params.lang === 'ar' ? 'تصفح الدورات' : 'Перегляд курсів'}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[500px] aspect-video w-full max-w-lg md:max-w-xl lg:max-w-2xl">
              <Image
                src="/academy-hero.jpg"
                alt="iSystem Academy"
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
              {params.lang === 'nl' ? 'Onze cursussen' : 
               params.lang === 'en' ? 'Our courses' : 
               params.lang === 'ar' ? 'دوراتنا' : 'Наші курси'}
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl">
              {params.lang === 'nl' 
                ? 'Van taalvaardigheden tot culturele kennis en carrièreontwikkeling - onze cursussen zijn ontworpen om je te helpen slagen.' 
                : params.lang === 'en' 
                ? 'From language skills to cultural knowledge and career development - our courses are designed to help you succeed.'
                : params.lang === 'ar'
                ? 'من مهارات اللغة إلى المعرفة الثقافية وتطوير المهنة - دوراتنا مصممة لمساعدتك على النجاح.'
                : 'Від мовних навичок до культурних знань та розвитку кар'єри - наші курси розроблені, щоб допомогти вам досягти успіху.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Course Card 1 */}
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden course-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {params.lang === 'nl' ? 'Nederlandse Taal Basis' : 
                     params.lang === 'en' ? 'Dutch Language Basics' : 
                     params.lang === 'ar' ? 'أساسيات اللغة الهولندية' : 
                     'Основи голландської мови'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {params.lang === 'nl' ? 'Leer de fundamenten van de Nederlandse taal voor dagelijks gebruik.' : 
                     params.lang === 'en' ? 'Learn the fundamentals of the Dutch language for everyday use.' : 
                     params.lang === 'ar' ? 'تعلم أساسيات اللغة الهولندية للاستخدام اليومي.' : 
                     'Вивчіть основи голландської мови для повсякденного використання.'}
                  </p>
                </div>
              </div>
              
              {/* Course Card 2 */}
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden course-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {params.lang === 'nl' ? 'Nederlandse Cultuur & Gewoonten' : 
                     params.lang === 'en' ? 'Dutch Culture & Customs' : 
                     params.lang === 'ar' ? 'الثقافة والعادات الهولندية' : 
                     'Голландська культура та звичаї'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {params.lang === 'nl' ? 'Ontdek de Nederlandse cultuur, tradities en sociale normen.' : 
                     params.lang === 'en' ? 'Discover Dutch culture, traditions, and social norms.' : 
                     params.lang === 'ar' ? 'اكتشف الثقافة الهولندية والتقاليد والمعايير الاجتماعية.' : 
                     'Відкрийте для себе голландську культуру, традиції та соціальні норми.'}
                  </p>
                </div>
              </div>
              
              {/* Course Card 3 */}
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden course-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {params.lang === 'nl' ? 'Professionele Integratie' : 
                     params.lang === 'en' ? 'Professional Integration' : 
                     params.lang === 'ar' ? 'الاندماج المهني' : 
                     'Професійна інтеграція'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {params.lang === 'nl' ? 'Vaardigheden en kennis voor succesvol werken in Nederland.' : 
                     params.lang === 'en' ? 'Skills and knowledge for successful employment in the Netherlands.' : 
                     params.lang === 'ar' ? 'المهارات والمعرفة للعمل الناجح في هولندا.' : 
                     'Навички та знання для успішного працевлаштування в Нідерландах.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}