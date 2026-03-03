import { type Country } from '@entities/model';
import { API_ROUTES } from '@shared/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const countryApi = {
  getAllCountries: async (language: string): Promise<Array<Country>> => {
    const response = await fetch(`${BASE_URL}${API_ROUTES.COUNTRIES_FOR_SALE}?lang=${language}`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }

    const data: Country[][] = await response.json();
    console.log('data: ', data[0]);
    console.log('hello');
    return data[0];
  },
};
