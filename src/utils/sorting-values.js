import { SortType } from '../const';

const getTimeDifference = ({ dateFrom, dateTo }) =>
  new Date(dateTo).getTime() - new Date(dateFrom).getTime();

const sortBy = {
  [SortType.DAY]: (points) => [...points],
  [SortType.TIME]: (points) =>
    [...points].sort((a, b) => getTimeDifference(b) - getTimeDifference(a)),
  [SortType.PRICE]: (points) =>
    [...points].sort((a, b) => b.basePrice - a.basePrice),
};

const sortPoints = (points, sortType) => sortBy[sortType](points);

export { sortPoints };
