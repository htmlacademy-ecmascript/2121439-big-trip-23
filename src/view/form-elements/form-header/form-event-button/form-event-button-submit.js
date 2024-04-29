import { createElement } from "../../../../render";

const createFormEventButtonSubmitTemplate = () => `
  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>`;

export default class FormEventButtonSubmit {
  getTemplate() {
    return createFormEventButtonSubmitTemplate();
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
