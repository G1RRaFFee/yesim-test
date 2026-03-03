'use client';

import type { Operator } from '@/entities/model';
import { useCountry } from '@/entities/utils/country/use-country.hook';
import { List, Typography } from '@/shared/ui';
import { FlagAvatar } from '@/shared/ui/flag-avatar/flag-avatar';
import { useTranslation } from 'react-i18next';

import styles from './operators-list.module.css';
import { OperatorsSkeleton } from './skeleton/operators-list.skeleton';
import classNames from 'classnames';

interface OperatorsListProps {
  countryName: string;
  widgetClassName?: string
}

export const OperatorsListWidget = ({ widgetClassName, countryName }: OperatorsListProps) => {
  const { data: country, isLoading } = useCountry(countryName);
  const { t } = useTranslation();

  return (
    <section className={classNames(styles.wrapper, widgetClassName)}>
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
    </section>
  );
};
