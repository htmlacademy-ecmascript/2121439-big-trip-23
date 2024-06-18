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
  DATE_FORM_EDIT: 'DD/MM/YY HH:mm',
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
  INIT: 'INIT',
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
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: '',
  isFavorite: false,
  offers: [],
  type: DEFAULT_POINT_TYPE,
};

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};
export const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';
export const AUTHORIZATION = 'Basic jfjfhsdfsbcj12';
