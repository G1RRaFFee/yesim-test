import en from '@messages/locales/en.json' with { type: 'json' };
import ru from '@messages/locales/ru.json' with { type: 'json' };
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ru';
    resources: {
      ru: typeof ru;
      en: typeof en;
    };
  }
}
