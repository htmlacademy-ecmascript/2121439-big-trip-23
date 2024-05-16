import AbstractView from '../framework/view/abstract-view';

const createFilterTemplate = (filters) =>
  filters.map((value, index) => {
    const isChecked = index === 0;

    return `<div class="trip-filters__filter">
      <input id="filter-${value.type.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value.type.toLowerCase()}" ${
  value.hasPoints ? '' : 'disabled'
} ${isChecked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${value.type.toLowerCase()}">${
  value.type
}</label>
    </div>
    `;
  });

const createTripFilterTemplate = (
  filters
) => `<form class="trip-filters" action="#" method="get">
            ${createFilterTemplate(filters).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;

export default class TripFilterView extends AbstractView {
  #filters = [];
  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createTripFilterTemplate(this.#filters);
  }
}
