import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { FilterType } from '../const';

function filterPointEverything(points) {
  return points;
}

function filterPointToFuture(points) {
  return points.filter((point) => dayjs().isBefore(point.dateFrom));
}

function filterPointToPresent(points) {
  return points.filter(
    (point) => dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo)
  );
}

function filterPointToPast(points) {
  return points.filter((point) => dayjs().isAfter(point.dateTo));
}

const filters = {
  [FilterType.EVERYTHING]: (points) => filterPointEverything(points),
  [FilterType.FUTURE]: (points) => filterPointToFuture(points),
  [FilterType.PAST]: (points) => filterPointToPast(points),
  [FilterType.PRESENT]: (points) => filterPointToPresent(points),
};

function generateFilters(points) {
  return Object.entries(filters).map(([filterType, filterPoints]) => ({
    type: filterType,
    hasPoints: filterPoints(points).length > 0,
  }));
}

export { generateFilters };
