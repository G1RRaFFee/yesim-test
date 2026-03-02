type StringifyNumber = string;

interface Generation {
  name: '3G' | 'LTE' | '5G';
}

interface Price {
  amount: StringifyNumber;
  currency: string;
  iso2: string;
  iso3: string;
  symbol: string;
}

export interface Operator {
  phone_view: string;
  prefix: StringifyNumber;
  generation: Array<Generation>;
}

export interface Country {
  country: string;
  iso: string;
  id: StringifyNumber;
  fl_unlimited: StringifyNumber;
  cost_per_day: StringifyNumber;
  url: string;
  new: boolean;
  popular: StringifyNumber;
  cost_per_gb: StringifyNumber;
  search: Array<string>;
  operators: Array<Operator>;
  price: Price;
  price_per_day: Price;
}

export type CountryInfo = Pick<Country, 'id' | 'country' | 'iso' | 'cost_per_gb' | 'price' | 'url'>;
