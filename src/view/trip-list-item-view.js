import { createElement } from '../render';

const createTripListElement = (
  contentElement
) => `<li class="trip-events__item">
          ${contentElement}
    </li>`;

export default class TripListItemView {
  constructor(contentElement) {
    this.contentElement = contentElement;
  }

  getTemplate() {
    return createTripListElement(this.contentElement);
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
