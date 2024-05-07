import { createElement } from '../render';

import { createFormHeaderTemplate } from './form-elements/form-header/form-header';
import { createFormEventDetailsTemplate } from './form-elements/form-event-details/form-event-details';

const createTripFormTemplate = (
  formTypeSelect,
  pointDestinations,
  pointOffers
) => `
        <form class="event event--edit" action="#" method="post">
        ${createFormHeaderTemplate(formTypeSelect, pointOffers)}
        ${createFormEventDetailsTemplate(
    formTypeSelect,
    pointDestinations,
    pointOffers
  )}
        </form>
`;

export default class TripFormView {
  constructor(formTypeSelect, pointDestinations, pointOffers) {
    this.formTypeSelect = formTypeSelect;
    this.pointDestinations = [...pointDestinations];
    this.pointOffers = [...pointOffers];
  }

  getTemplate() {
    return createTripFormTemplate(
      this.formTypeSelect,
      this.pointDestinations,
      this.pointOffers
    );
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
