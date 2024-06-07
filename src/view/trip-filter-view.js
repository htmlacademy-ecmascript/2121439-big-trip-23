import AbstractView from '../framework/view/abstract-view';

const createFilterTemplate = (filters, currentFilterType) => filters.map((value) => {
  const isChecked = currentFilterType === value.type;

  return `<div class="trip-filters__filter">
      <input id="filter-${
  value.type
}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value.type.toLowerCase()}" ${
  value.count ? '' : 'disabled'
} ${isChecked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${value.type}">${
  value.type
}</label>
    </div>
    `;
});

const createTripFilterTemplate = (
  filters,
  currentFilterType
) => `<form class="trip-filters" action="#" method="get">
            ${createFilterTemplate(filters, currentFilterType).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;

export default class TripFilterView extends AbstractView {
  #filters = [];
  #currentFilter = null;
  #handleFilterTypeChange = null;
  constructor({ filters, currentFilterType, onFilterTypeChange }) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;
    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createTripFilterTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
