import classNames from 'classnames';

import styles from './country-list-skeleton.module.css';

const CountryItemSkeleton = () => (
  <div className={classNames(styles.countryListItem, styles.skeleton)} aria-hidden="true">
    <div className={styles.countryListItemInner}>
      <div className={styles.flagSkeleton} />
      <div className={styles.infoWrapper}>
        <div className={styles.countrySkeleton} />
        <div className={styles.priceSkeleton} />
      </div>
    </div>
    <div className={styles.chevronSkeleton} />
  </div>
);

export const CountryListSkeleton = ({ count = 12 }) => (
  <div className={styles.countryList} aria-label="Загрузка списка стран" role="status">
    {Array.from({ length: count }).map((_, index) => (
      <CountryItemSkeleton key={`skeleton-${index}`} />
    ))}
  </div>
);
