import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import { FormType } from '../const';
import { createFormHeaderTemplate } from './form-elements/form-header/form-header';
import { createFormEventDetailsTemplate } from './form-elements/form-event-details/form-event-details';

const renderByTypeFormElement = (
  formTypeSelect,
  pointDestinations,
  pointOffers,
  allOffers,
  statePoint
) => {
  if (formTypeSelect === FormType.FORM_EDIT) {
    return `<form class="event event--edit" action="#" method="post">
    ${createFormHeaderTemplate(formTypeSelect, pointOffers, statePoint)}
    ${createFormEventDetailsTemplate(
    statePoint.pointDestinations,
    statePoint.pointOffers,
    statePoint.point
  )}
    </form>
`;
  } else if (formTypeSelect === FormType.FORM_ADD) {
    return `<form class="event event--edit" action="#" method="post">
    ${createFormHeaderTemplate(formTypeSelect, pointOffers)}
    ${createFormEventDetailsTemplate(
    formTypeSelect,
    pointDestinations,
    allOffers
  )}
    </form>
`;
  }
};

const createTripFormTemplate = (
  formTypeSelect,
  pointDestinations,
  pointOffers,
  allOffers,
  statePoint
) =>
  `<li class="trip-events__item">${renderByTypeFormElement(
    formTypeSelect,
    pointDestinations,
    pointOffers,
    allOffers,
    statePoint
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

    this._setState(
      TripFormView.parsePointToState({
        point: { ...point },
        pointDestinations: { ...pointDestinations },
        pointOffers: { ...allOffers },
      })
    );
    this._restoreHandlers();
  }

  get template() {
    return createTripFormTemplate(
      this.#formTypeSelect,
      this.#pointDestinations,
      this.#pointOffers,
      this.#allOffers,
      this._state
    );
  }

  _restoreHandlers() {
    this.#rollupButton = this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onClickEdit);
    this.element
      .querySelector('form')
      .addEventListener('submit', this.#onFormSubmit);
    this.element
      .querySelector('.event__type-group')
      .addEventListener('change', this.#eventTypeHandler);
    this.element
      .querySelector('#event-destination-1')
      .addEventListener('change', this.#eventDestinationsHandler);
  }

  #onClickEdit = (evt) => {
    evt.preventDefault();
    this.#handleClickEdit(TripFormView.parseStateToPoint(this._state));
  };

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(TripFormView.parseStateToPoint(this._state));
  };

  #eventTypeHandler = (evt) => {
    evt.preventDefault();
    const newType = evt.target.dataset.eventType;
    const offersType = this.#pointOffers.find(
      (offer) => offer.type === newType
    );

    if (this.#point.type === newType) {
      return;
    }

    this.updateElement({
      point: {
        ...this._state.point,
        type: newType,
        offers: [...offersType.offers],
      },
      pointDestinations: [...this.#pointDestinations],
      pointOffers: { ...offersType },
    });
  };

  #eventDestinationsHandler = (evt) => {
    evt.preventDefault();
    const newValueOption = evt.target.value;
    const destination = this.#pointDestinations.find((item) =>
      item.name.toLowerCase().includes(newValueOption.toLowerCase())
    );

    this.updateElement({
      point: {
        ...this._state.point,
        destination: destination.id,
      },
      pointDestinations: [destination],
    });
  };

  static parsePointToState(point, pointDestinations, pointOffer) {
    return { ...point, ...pointDestinations, ...pointOffer };
  }

  static parseStateToPoint(state) {
    const point = { ...state };
    return point;
  }
}
