'use client';

import type { Operator } from '@/entities/model';
import { useCountry } from '@/entities/utils/country/useCountry.hook';
import { List, Typography } from '@/shared/ui';
import { FlagAvatar } from '@/shared/ui/flag-avatar/flag-avatar';
import { useTranslation } from 'react-i18next';

import styles from './operators-list.module.css';

interface OperatorsListProps {
  countryName: string;
}

const OperatorsSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonCountryInfo}>
        <div className={styles.skeletonFlag} />
        <div className={styles.skeletonText} />
      </div>
      <div className={styles.skeletonList}>
        <div className={styles.skeletonText} />
        <div className={styles.skeletonText} />
      </div>
    </div>
  );
};

export const OperatorsList = ({ countryName }: OperatorsListProps) => {
  const { data: country, isLoading } = useCountry(countryName);
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title} as="h2" variant="h2">
        {t('countriesOperators')}
      </Typography>

      <div className={styles.item}>
        {isLoading ? (
          <OperatorsSkeleton />
        ) : country ? (
          <>
            <div className={styles.countryInfo}>
              <FlagAvatar iso={country.iso} country={country.country} />
              <span className={styles.country}>{country.country}</span>
            </div>

            <List<Operator>
              items={country.operators}
              getItemKey={(operator) => operator.prefix}
              renderItem={(operator) => (
                <span className={styles.operator}>{operator.phone_view}</span>
              )}
            />
          </>
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  );
};
