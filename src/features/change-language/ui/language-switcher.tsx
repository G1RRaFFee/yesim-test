'use client';

import { AvailableLanguage } from '@/app/types/language.type';
import { useLanguage } from '@/shared/hooks/useLanguage.hook';
import { Select } from '@shared/ui';

const languages = [
  { value: 'ru', label: 'rus' },
  { value: 'en', label: 'eng' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = async (value: string) => {
    setLanguage(value as AvailableLanguage);
  };

  return <Select value={language} onChange={handleChangeLanguage} options={languages} />;
};
