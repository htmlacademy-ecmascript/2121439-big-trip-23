import { createElement } from '../../../../render';

const createFormEventButtonDeleteElement = (formAdd) => `<button class="event__reset-btn" type="reset">${
  formAdd ? 'Cancel' : 'Delete'
}</button>`;

export default class FormEventButtonDelete {
  constructor(formAdd) {
    this.formAdd = formAdd;
  }

  getTemplate() {
    return createFormEventButtonDeleteElement(this.formAdd);
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
