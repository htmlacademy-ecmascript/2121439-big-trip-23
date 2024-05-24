import { FormType } from '../const';
import { createFormHeaderTemplate } from './form-elements/form-header/form-header';
import { createFormEventDetailsTemplate } from './form-elements/form-event-details/form-event-details';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';

const renderByTypeFormElement = (
  formTypeSelect,
  pointDestinations,
  pointOffers,
  point,
  allOffers
) => {
  if (formTypeSelect === FormType.FORM_EDIT) {
    return `<form class="event event--edit" action="#" method="post">
    ${createFormHeaderTemplate(formTypeSelect, pointOffers, point)}
    ${createFormEventDetailsTemplate(pointDestinations, allOffers, point)}
    </form>
`;
  } else if (formTypeSelect === FormType.FORM_ADD) {
    return `<form class="event event--edit" action="#" method="post">
    ${createFormHeaderTemplate(formTypeSelect, pointOffers)}
    ${createFormEventDetailsTemplate(
    formTypeSelect,
    pointDestinations,
    allOffers,
    point
  )}
    </form>
`;
  }
};

const createTripFormTemplate = (
  formTypeSelect,
  pointDestinations,
  pointOffers,
  point,
  allOffers
) =>
  `<li class="trip-events__item">${renderByTypeFormElement(
    formTypeSelect,
    pointDestinations,
    pointOffers,
    point,
    allOffers
  )}</li>`;
export default class TripFormView extends AbstractStatefulView {
  #formTypeSelect = null;
  #pointDestinations = null;
  #pointOffers = null;
  #point = null;
  #handleClickEdit = null;
  #handleFormSubmit = null;
  #rollupButton = null;
  #allOffers = null;

  constructor({
    formType: formTypeSelect,
    destinations: pointDestinations,
    pointOffers: pointOffers,
    point: point,
    onEditClick: onEditClick,
    onFormSubmit: onFormSubmit,
    allOffers: allOffers,
  }) {
    super();
    this.#formTypeSelect = formTypeSelect;
    this.#pointDestinations = [...pointDestinations];
    this.#pointOffers = [...pointOffers];
    this.#point = point;
    this.#allOffers = allOffers;
    this.#handleClickEdit = onEditClick;
    this.#handleFormSubmit = onFormSubmit;
    this.#rollupButton = this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onClickEdit);
    this.element
      .querySelector('form')
      .addEventListener('submit', this.#onFormSubmit);
  }

  get template() {
    return createTripFormTemplate(
      this.#formTypeSelect,
      this.#pointDestinations,
      this.#pointOffers,
      this.#point,
      this.#allOffers
    );
  }

  #onClickEdit = (evt) => {
    evt.preventDefault();
    this.#handleClickEdit();
  };

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
