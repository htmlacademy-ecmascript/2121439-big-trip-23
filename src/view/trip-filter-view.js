import { createElement } from '../render';

const FILTER_VALUES = ['Everything', 'Future', 'Present', 'Past'];

const createFilterElement = () => FILTER_VALUES.map((value) => `<div class="trip-filters__filter">
              <input id="filter-${value.toLocaleLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value.toLocaleLowerCase()}">
              <label class="trip-filters__filter-label" for="filter-everything">${value}</label>
            </div>
            `);

const createTripFilterTemplate = () => `<form class="trip-filters" action="#" method="get">
            ${createFilterElement().join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;

export default class TripFilterView {
  getTemplate() {
    return createTripFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
