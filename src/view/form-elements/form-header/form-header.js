import { createElement } from "../../../render";

const createFormHeaderTemplate = () =>
  ' <header class="event__header"></header>';

export default class FormHeader {
  getTemplate() {
    return createFormHeaderTemplate();
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
