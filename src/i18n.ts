import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import kz from './locales/kz/translation.json'
import ru from './locales/ru/translation.json'
import en from './locales/en/translation.json'
import zh from './locales/zh/translation.json'

export const LANGUAGES = [
  { code: 'kz', label: 'ҚАЗ', nativeLabel: 'Қазақша' },
  { code: 'ru', label: 'РУС', nativeLabel: 'Русский' },
  { code: 'en', label: 'ENG', nativeLabel: 'English' },
  { code: 'zh', label: '中文', nativeLabel: '简体中文' },
]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      kz: { translation: kz },
      ru: { translation: ru },
      en: { translation: en },
      zh: { translation: zh },
    },
    fallbackLng: 'kz',
    defaultNS: 'translation',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'proitguys_language',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
