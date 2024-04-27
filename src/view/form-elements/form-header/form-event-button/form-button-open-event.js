import { createElement } from '../../../../render';

const createFormButtonEventOpenElement = () => `<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
  </button>`;

export default class FormButtonEventOpen {
  getTemplate() {
    return createFormButtonEventOpenElement();
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
