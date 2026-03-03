'use client';

import { Typography } from '@/shared/ui';
import { CountrySearch } from '@/features/country/country-search/country-search';
import { useTranslation } from 'react-i18next';

import styles from './sim-section.module.css';

interface CountrySearchWidgetProps {
  className?: string;
}

export const CountrySearchWidget = ({ className }: CountrySearchWidgetProps) => {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <Typography variant="h1" as="h1" className={styles.title}>
        {t('simTitle')}
      </Typography>
      <CountrySearch />
    </section>
  );
};
