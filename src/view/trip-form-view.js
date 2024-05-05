import { createElement } from '../render';

import { createFormHeaderTemplate } from './form-elements/form-header/form-header';
import { createFormEventDetailsTemplate } from './form-elements/form-event-details/form-event-details';

const createTripFormTemplate = (formTypeSelect) => `
        <form class="event event--edit" action="#" method="post">
        ${createFormHeaderTemplate(formTypeSelect)}
        ${createFormEventDetailsTemplate(formTypeSelect)}
        </form>
`;

export default class TripFormView {
  constructor(formTypeSelect) {
    this.formTypeSelect = formTypeSelect;
  }

  getTemplate() {
    return createTripFormTemplate(this.formTypeSelect);
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
