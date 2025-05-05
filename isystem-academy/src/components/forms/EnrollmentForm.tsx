'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface EnrollmentFormProps {
  lang: string;
  preselectedCourse?: string;
}

export function EnrollmentForm({ lang, preselectedCourse = '' }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: preselectedCourse,
    background: '',
    preferredLanguage: lang,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real implementation, we would send this to ActivePieces
      // ActivePieces handles the form submission and connects to other systems
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Something went wrong with your enrollment. Please try again.');
      }
      
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        background: '',
        preferredLanguage: lang,
      });
    } catch (err) {
      setError((err as Error).message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Translations for form labels and messages
  const translations = {
    firstName: {
      nl: 'Voornaam',
      en: 'First Name',
      ar: 'الاسم الأول',
      uk: 'Ім\'я',
    },
    lastName: {
      nl: 'Achternaam',
      en: 'Last Name',
      ar: 'اسم العائلة',
      uk: 'Прізвище',
    },
    email: {
      nl: 'E-mail',
      en: 'Email',
      ar: 'البريد الإلكتروني',
      uk: 'Електронна пошта',
    },
    phone: {
      nl: 'Telefoonnummer',
      en: 'Phone Number',
      ar: 'رقم الهاتف',
      uk: 'Номер телефону',
    },
    course: {
      nl: 'Cursus',
      en: 'Course',
      ar: 'الدورة',
      uk: 'Курс',
    },
    background: {
      nl: 'Achtergrond / Ervaring',
      en: 'Background / Experience',
      ar: 'الخلفية / الخبرة',
      uk: 'Досвід / Кваліфікація',
    },
    preferredLanguage: {
      nl: 'Voorkeurstaal',
      en: 'Preferred Language',
      ar: 'اللغة المفضلة',
      uk: 'Бажана мова',
    },
    submit: {
      nl: 'Inschrijven',
      en: 'Submit Enrollment',
      ar: 'إرسال التسجيل',
      uk: 'Подати заявку',
    },
    success: {
      nl: 'Inschrijving ontvangen! We nemen binnenkort contact met je op.',
      en: 'Enrollment received! We will contact you soon.',
      ar: 'تم استلام التسجيل! سنتصل بك قريبًا.',
      uk: 'Заявку отримано! Ми зв\'яжемося з вами найближчим часом.',
    },
    required: {
      nl: 'Verplicht',
      en: 'Required',
      ar: 'مطلوب',
      uk: 'Обов\'язково',
    },
    selectCourse: {
      nl: 'Selecteer een cursus',
      en: 'Select a course',
      ar: 'اختر دورة',
      uk: 'Виберіть курс',
    },
    dutchBasics: {
      nl: 'Nederlandse Basiscursus',
      en: 'Dutch Basics',
      ar: 'أساسيات اللغة الهولندية',
      uk: 'Основи голландської мови',
    },
    dutchCulture: {
      nl: 'Nederlandse Cultuur',
      en: 'Dutch Culture',
      ar: 'الثقافة الهولندية',
      uk: 'Голландська культура',
    },
    professionalIntegration: {
      nl: 'Professionele Integratie',
      en: 'Professional Integration',
      ar: 'الاندماج المهني',
      uk: 'Професійна інтеграція',
    },
  };

  // Get translation based on language
  const getTranslation = (key: keyof typeof translations) => {
    return translations[key][lang as keyof (typeof translations)[typeof key]] || translations[key].en;
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
          <p className="text-lg font-medium">{getTranslation('success')}</p>
        </div>
        <Button onClick={() => setIsSuccess(false)}>
          {lang === 'nl' ? 'Terug naar formulier' : 
           lang === 'en' ? 'Back to form' : 
           lang === 'ar' ? 'العودة إلى النموذج' : 
                          'Повернутися до форми'}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            {getTranslation('firstName')} <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            {getTranslation('lastName')} <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {getTranslation('email')} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            {getTranslation('phone')}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="course" className="block text-sm font-medium mb-1">
          {getTranslation('course')} <span className="text-red-500">*</span>
        </label>
        <select
          id="course"
          name="course"
          required
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">{getTranslation('selectCourse')}</option>
          <option value="dutch-basics">{getTranslation('dutchBasics')}</option>
          <option value="dutch-culture">{getTranslation('dutchCulture')}</option>
          <option value="professional-integration">{getTranslation('professionalIntegration')}</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="background" className="block text-sm font-medium mb-1">
          {getTranslation('background')}
        </label>
        <textarea
          id="background"
          name="background"
          rows={4}
          value={formData.background}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      
      <div>
        <label htmlFor="preferredLanguage" className="block text-sm font-medium mb-1">
          {getTranslation('preferredLanguage')} <span className="text-red-500">*</span>
        </label>
        <select
          id="preferredLanguage"
          name="preferredLanguage"
          required
          value={formData.preferredLanguage}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="nl">Nederlands</option>
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="uk">Українська</option>
        </select>
      </div>
      
      <div className="pt-4">
        <Button type="submit" disabled={isSubmitting} className="w-full py-3">
          {isSubmitting ? 
            (lang === 'nl' ? 'Bezig met verzenden...' : 
             lang === 'en' ? 'Submitting...' : 
             lang === 'ar' ? 'جار الإرسال...' : 
                           'Відправлення...') : 
            getTranslation('submit')}
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        {lang === 'nl' ? 'Door je in te schrijven ga je akkoord met onze privacybeleid en gebruiksvoorwaarden.' : 
         lang === 'en' ? 'By enrolling, you agree to our privacy policy and terms of use.' : 
         lang === 'ar' ? 'بالتسجيل، فإنك توافق على سياسة الخصوصية وشروط الاستخدام الخاصة بنا.' : 
                       'Реєструючись, ви погоджуєтеся з нашою політикою конфіденційності та умовами використання.'}
      </p>
    </form>
  );
}