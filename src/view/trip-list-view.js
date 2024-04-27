import { createElement } from '../render';

const createTripListViewTemplate = () => '<ul class="trip-events__list"></ul>';

export default class TripListView {
  getTemplate() {
    return createTripListViewTemplate();
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
