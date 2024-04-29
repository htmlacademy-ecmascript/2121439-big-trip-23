import { createElement } from "../render";

const createTripListTemplate = (
  contentElement
) => `<li class="trip-events__item">
          ${contentElement}
    </li>`;

export default class TripListItemView {
  constructor(contentElement) {
    this.contentElement = contentElement;
  }

  getTemplate() {
    return createTripListTemplate(this.contentElement);
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
