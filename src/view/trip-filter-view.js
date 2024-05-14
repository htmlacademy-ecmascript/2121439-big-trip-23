import AbstractView from '../framework/view/abstract-view';
import { FILTER_VALUES } from '../const';

const createFilterTemplate = () =>
  FILTER_VALUES.map(
    (value) => `<div class="trip-filters__filter">
              <input id="filter-${value.toLocaleLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value.toLocaleLowerCase()}">
              <label class="trip-filters__filter-label" for="filter-${value.toLocaleLowerCase()}">${value}</label>
            </div>
            `
  );

const createTripFilterTemplate =
  () => `<form class="trip-filters" action="#" method="get">
            ${createFilterTemplate().join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;

export default class TripFilterView extends AbstractView {
  get template() {
    return createTripFilterTemplate();
  }
}
