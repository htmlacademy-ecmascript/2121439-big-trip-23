import { createElement } from '../render';

const createTripEventsItemTemplate = (
  contentElement
) => `<li class="trip-events__item">
          ${contentElement}
    </li>`;

export default class TripEventsItemView {
  constructor(contentElement) {
    this.contentElement = contentElement;
  }

  getTemplate() {
    return createTripEventsItemTemplate(this.contentElement);
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
