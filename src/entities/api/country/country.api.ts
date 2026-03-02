import { type Country } from '@entities/model';
import { ROUTES } from '@shared/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const countryApi = {
  getAllCountries: async (language: string): Promise<Array<Country>> => {
    const response = await fetch(`${BASE_URL}${ROUTES.countriesForSale}?lang=${language}`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }

    const data: Country[][] = await response.json();
    console.log('data: ', data[0]);
    console.log('hello');
    return data[0];
  },

  searchCountries: async (query: string): Promise<Array<Country>> => {
    const response = await fetch(`${BASE_URL}/name/${query}`);

    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error('Failed to search countries');
    }

    const data: Array<Country> = await response.json();
    return data;
  },
};
