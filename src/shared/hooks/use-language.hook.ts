'use client';

import { useCallback } from 'react';

import { useRouter } from 'next/navigation';

import { useTranslation } from 'react-i18next';
import { AvailableLanguage } from '@/app/types/i18n/language.type';

const LANGUAGE_COOKIE_KEY = 'lang';
const ONE_YEAR = 60 * 60 * 24 * 365;

export function useLanguage() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const setLanguage = useCallback(
    (lng: AvailableLanguage) => {
      i18n.changeLanguage(lng);

      document.cookie = `${LANGUAGE_COOKIE_KEY}=${lng}; path=/; max-age=${ONE_YEAR}`;

      router.refresh();
    },
    [i18n, router],
  );

  return {
    language: i18n.language as AvailableLanguage,
    setLanguage,
  };
}
