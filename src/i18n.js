import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import global_en from '../src/locales/en/global.json';
import global_ar from '../src/locales/ar/global.json';



i18n.use(initReactI18next).use(languageDetector).init({
    resources: {
        en: {global: global_en},
        ar: {global: global_ar},
    },
    detection: {
        order: ['htmlTag' , 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
        caches: ['cookie']
      },
      fallbackLng: 'en',
});

export default i18n;