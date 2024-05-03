import { createElement } from '../render';

import { createFormHeaderTemplate } from './form-elements/form-header/form-header';
import { createFormEventDetailsTemplate } from './form-elements/form-event-details/form-event-details';

const createTripFormTemplate = (formTypeSelect, points) => `
        <form class="event event--edit" action="#" method="post">
        ${createFormHeaderTemplate(formTypeSelect, points)}
        ${createFormEventDetailsTemplate(formTypeSelect)}
        </form>
`;

export default class TripFormView {
  constructor(formTypeSelect, points) {
    this.formTypeSelect = formTypeSelect;
    this.points = points;
  }

  getTemplate() {
    return createTripFormTemplate(this.formTypeSelect, this.points);
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
