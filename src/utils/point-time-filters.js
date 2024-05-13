import { DATE_NOW, FilterType } from '../const';

function filterPointEverything(points) {
  return points;
}

function filterPointToFuture(points) {
  return points.filter((point) => point.dateFrom > DATE_NOW);
}

function filterPointToPresent(points) {
  return points.filter((point) => point.dateFrom <= DATE_NOW || point.dateFrom <= point.dateTo);
}

function filterPointToPast(points) {
  return points.filter((point) => point.dateTo < DATE_NOW);
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
