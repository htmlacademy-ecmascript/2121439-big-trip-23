import { createElement } from '../../../render';

const createFormEventDetailsTemplate = () => '<section class="event__details"></section>';

export default class FormEventDetails {
  getTemplate() {
    return createFormEventDetailsTemplate();
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
