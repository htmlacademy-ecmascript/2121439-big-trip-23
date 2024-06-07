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
export const filters = [
  {
    type: 'everything',
    count: 0,
  },
];
export const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

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
