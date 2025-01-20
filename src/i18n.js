import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

// دمج ملفات الترجمة
const resources = {
  en: {
    translation: enTranslation
  },
  ar: {
    translation: arTranslation
  }
};

// تحميل اللغة المحفوظة أو اللغة الافتراضية
const savedLanguage = localStorage.getItem('language') || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // تعيين اللغة المحفوظة أو الافتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react بالفعل يقوم بحماية الـ XSS
    }
  });

export default i18n;
