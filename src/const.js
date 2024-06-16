export const FormType = {
  FORM_EDIT: 'form-edit',
  FORM_ADD: 'form-add',
};

export const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export const FilterType = {
  EVERYTHING: 'everything',
  PAST: 'past',
  PRESENT: 'present',
  FUTURE: 'future',
};
export const DEFAULT_FILTER_TYPE = FilterType.EVERYTHING;
export const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

export const DEFAULT_SORT_TYPE = SortType.DAY;

export const FormatTime = {
  START_AND_END_TIMES: 'hh:mm',
  DATE_FROM: 'MMM DD',
  DATE_FORM_EDIT: 'YY/MM/DD HH:mm',
  MINUTES: 'mm[M]',
  DAY: 'HH[H] mm[m]',
  DAYS: 'DD[D] HH[H] mm[M]',
  DATE_PICKER: 'd/m/y H:i',
};

export const Milliseconds = {
  HOUR: 3600000,
  DAY: 86400000,
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

/**
 * PATCH  - Самые маленькие изменения (изменить только один тип данных)
 * MINOR - Средние изменения (изменить несколько типов данных)
 * MAJOR - Самые большие изменения (изменить все данные)
 */

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

export const EVENT_TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

const DEFAULT_POINT_TYPE = EVENT_TYPES[0];

export const DEFAULT_POINT = {
  id: 0,
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: '',
  isFavorite: false,
  offers: [],
  type: DEFAULT_POINT_TYPE,
};

export const BUTTON_OFFER_DEFAULT = {
  type: 'flight',
  offers: [
    {
      id: '2b8d3044-a1ab-46e6-a5ed-9ea129e06d8c',
      title: 'Choose meal',
      price: 138,
    },

    {
      id: '224a68db-3228-4795-a8f7-d8fe7d277961',
      title: 'Choose seats',
      price: 100,
    },

    {
      id: '54f0f8c5-8aba-4145-b222-e31104c15744',
      title: 'Upgrade to comfort class',
      price: 161,
    },

    {
      id: 'bb11b5a1-54c8-4cad-bff3-4e3e130daf24',
      title: 'Upgrade to business class',
      price: 79,
    },

    {
      id: '3c342fea-9f7e-43f7-b707-e2f68945443e',
      title: 'Add luggage',
      price: 189,
    },

    {
      id: '7db912b8-a478-4677-b58e-6a04ebf4c3b4',
      title: 'Business lounge',
      price: 196,
    },
  ],
};
