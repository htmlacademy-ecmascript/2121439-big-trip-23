import { createElement } from '../../../render';

const createFormHeaderElement = () => ' <header class="event__header"></header>';

export default class FormHeader {
  getTemplate() {
    return createFormHeaderElement();
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
