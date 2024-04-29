import { createElement } from "../../../../render";

const createFormButtonEventOpenTemplate =
  () => `<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
  </button>`;

export default class FormButtonEventOpen {
  getTemplate() {
    return createFormButtonEventOpenTemplate();
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
