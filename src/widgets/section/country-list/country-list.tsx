'use client';
import Link from 'next/link';

import { useCountriesInfo } from '@/entities/utils/country/useCountriesInfo.hook';
import { FlagAvatar } from '@/shared/ui/flag-avatar/flag-avatar';
import type { CountryInfo } from '@entities/model';
import { useListVisibility } from '@entities/utils';
import { Button, List, Typography } from '@shared/ui';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './country-list.module.css';
import { CountryListSkeleton } from './skeleton/country-list-skeleton';
import classNames from 'classnames';

interface CountriesInfoListProps {
  countries: Array<CountryInfo>;
  initialLimit?: number | 'all';
  showAllButton?: boolean;
  className?: string;
  skeletonCount?: number;
}

export const CountriesInfoList = ({
  countries,
  initialLimit = 'all',
  showAllButton = true,
  className = ""
}: CountriesInfoListProps) => {
  const { displayedItems, showAll, hasMoreItems, handleShowAll } = useListVisibility({
    items: countries,
    initialLimit,
  });

  const { t } = useTranslation();
  
  const renderCountryInfoItem = (country: CountryInfo) => (
    <Link
      href={country.url}
      key={country.id}
      className={styles.countryListItem}
      aria-label={`Выбрать страну ${country.country}. Цена от ${country.price.symbol}${country.cost_per_gb} за гигабайт`}
    >
      <div className={styles.countryListItemInner}>
        <FlagAvatar iso={country.iso} country={country.country} />
        <div className={styles.infoWrapper}>
          <span className={styles.country}>{country.country}</span>
          <span className={styles.price}>
            от {country.price.symbol}
            {country.cost_per_gb}/GB
          </span>
        </div>
      </div>
      <ChevronRight className={styles.chevronIcon} size={20} />
    </Link>
  );

  const footerContent = showAllButton && hasMoreItems && (
    <div className={classNames(styles.buttonGroup, className)}>
      {!showAll && (
        <Button onClick={handleShowAll} aria-label={t('showAllCountries')}>
          {t('showAllCountries')}
        </Button>
      )}
    </div>
  );

  return (
    <List<CountryInfo>
      className={styles.list}
      items={displayedItems}
      renderItem={renderCountryInfoItem}
      getItemKey={(country) => country.id}
      showFooter={showAllButton && hasMoreItems}
      footerContent={footerContent}
    />
  );
};

interface MostPopularCountriesListProps {
  className?: string;
}

export const MostPopularCountriesList = ({ className }: MostPopularCountriesListProps) => {
  const { t } = useTranslation();
  const { data: countries, isLoading } = useCountriesInfo();

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <Typography variant="h2" as="h2" className={styles.title}>
        {t('popularCountries')}
      </Typography>
      {isLoading ? (
        <CountryListSkeleton count={12} />
      ) : (
        <CountriesInfoList initialLimit={12} countries={countries || []} />
      )}
    </div>
  );
};
