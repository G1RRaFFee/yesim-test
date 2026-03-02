'use client';

import { countryApi } from '@/entities/api';
import { Country } from '@entities/model';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const useCountry = (countryName: string) => {
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['country', countryName, i18n.language],
    queryFn: async () => {
      const countries = queryClient.getQueryData<Array<Country>>(['countries']);
      const cachedCountry = countries?.find((country) => country.url.includes(countryName));

      if (cachedCountry) {
        return cachedCountry;
      }

      const allCountries = await countryApi.getAllCountries(i18n.language);
      const country = allCountries.find((country) => country.url.includes(countryName));

      if (!country) {
        throw new Error('Country not found');
      }

      return country;
    },
  });
};
