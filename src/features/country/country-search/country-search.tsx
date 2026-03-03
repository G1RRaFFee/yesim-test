'use client';

import { type ChangeEvent } from 'react';

import { useCountrySearch } from '@/entities/utils';
import { useCountriesInfo } from '@/entities/utils/country/use-countries-info.hook';
import { TextInput } from '@/shared/ui';
import { SearchIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { CountriesInfoList } from '../../../widgets/section/popular-country-list/popular-country-list.widget';
import styles from './country-search.module.css';

export const CountrySearch = () => {
  const { t } = useTranslation();
  const { data } = useCountriesInfo();
  const { searchTerm, setSearchTerm, filteredCountries, stats } = useCountrySearch(data || []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div>
        <TextInput
          className={styles.input}
          leftIcon={<SearchIcon className={styles.inputIcon} size={20} />}
          placeholder={t('search')}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      {stats.hasResults && (
        <CountriesInfoList className={styles.list} showAllButton={false} countries={filteredCountries} />
      )}
      {!stats.hasResults && stats.isFiltering && <div>Ничего не найдено</div>}
    </div>
  );
};
