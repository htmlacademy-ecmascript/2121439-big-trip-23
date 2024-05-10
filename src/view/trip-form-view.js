import AbstractView from '../framework/view/abstract-view';
import { FormType } from '../const';

import { createFormHeaderTemplate } from './form-elements/form-header/form-header';
import { createFormEventDetailsTemplate } from './form-elements/form-event-details/form-event-details';

const renderByTypeFormElement = (
  formTypeSelect,
  pointDestinations,
  pointOffers
) => {
  if (formTypeSelect === FormType.FORM_EDIT) {
    return `<form class="event event--edit" action="#" method="post">
    ${createFormHeaderTemplate(formTypeSelect, pointOffers)}
    ${createFormEventDetailsTemplate(
    formTypeSelect,
    pointDestinations,
    pointOffers
  )}
    </form>
`;
  } else if (formTypeSelect === FormType.FORM_ADD) {
    return `<form class="event event--edit" action="#" method="post">
    ${createFormHeaderTemplate(formTypeSelect, pointOffers)}
    ${createFormEventDetailsTemplate(
    formTypeSelect,
    pointDestinations,
    pointOffers
  )}
    </form>
`;
  }
};

const createTripFormTemplate = (
  formTypeSelect,
  pointDestinations,
  pointOffers
) => renderByTypeFormElement(formTypeSelect, pointDestinations, pointOffers);

export default class TripFormView extends AbstractView {
  #formTypeSelect = null;
  #pointDestinations = null;
  #pointOffers = null;
  constructor(formTypeSelect, pointDestinations, pointOffers) {
    super();
    this.#formTypeSelect = formTypeSelect;
    this.#pointDestinations = [...pointDestinations];
    this.#pointOffers = [...pointOffers];
  }

  get template() {
    return createTripFormTemplate(
      this.#formTypeSelect,
      this.#pointDestinations,
      this.#pointOffers
    );
  }
}
