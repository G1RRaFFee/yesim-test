import { type AvailableLanguage } from '@/app/types/i18n/language.type';
import en from '@public/locales/en.json' with { type: 'json' };
import ru from '@public/locales/ru.json' with { type: 'json' };
import { createInstance } from 'i18next';

export async function initI18n(lang: AvailableLanguage) {
  const i18n = createInstance();

  await i18n.init({
    lng: lang,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}
