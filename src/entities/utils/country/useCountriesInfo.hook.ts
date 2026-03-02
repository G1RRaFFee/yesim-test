'use client';

import { countryApi } from '@/entities/api';
import { Country, CountryInfo } from '@entities/model';
import { useQuery, useQueryClient, type UseQueryResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const useCountriesInfo = (): UseQueryResult<Array<CountryInfo>, Error> => {
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['countries', i18n.language],
    queryFn: async () => {
      const cachedCountries = queryClient.getQueryData<Array<Country>>([
        'countries',
        i18n.language,
      ]);

      if (cachedCountries) {
        return cachedCountries;
      }

      const countries = await countryApi.getAllCountries(i18n.language);

      return countries.map((country) => ({
        country: country.country,
        iso: country.iso,
        cost_per_gb: country.cost_per_gb,
        price: country.price,
        url: country.url,
        id: country.id,
      }));
    },
  });
};
