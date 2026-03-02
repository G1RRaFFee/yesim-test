import { useDeferredValue, useMemo, useState } from 'react';

import { CountryInfo } from '@/entities/model';

export function useCountrySearch(initialCountries: Array<CountryInfo>) {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearch = useDeferredValue(searchTerm);

  const filteredCountries = useMemo(() => {
    if (!deferredSearch.trim()) return [];

    const lowerSearch = deferredSearch.toLowerCase();
    return initialCountries.filter(
      (country) =>
        country.country.toLowerCase().includes(lowerSearch) ||
        country.iso.toLowerCase().includes(lowerSearch),
    );
  }, [initialCountries, deferredSearch]);

  const stats = useMemo(
    () => ({
      total: initialCountries.length,
      filtered: filteredCountries.length,
      hasResults: filteredCountries.length > 0,
      isFiltering: searchTerm.trim() !== '',
    }),
    [initialCountries.length, filteredCountries.length, searchTerm],
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredCountries,
    stats,
  };
}
