import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { FormType } from '../const';
import { FormatTime } from '../const';
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
  #initialState = null;
  #dateStartPicker = null;
  #dateEndPicker = null;
  #handleDeleteClick = null;

  constructor({
    formType: formTypeSelect,
    destinations: pointDestinations,
    pointOffers: pointOffers,
    point: point,
    onEditClick: onEditClick,
    onFormSubmit: onFormSubmit,
    allOffers: allOffers,
    onDeleteClick: onDeleteClick,
  }) {
    super();
    this.#formTypeSelect = formTypeSelect;
    this.#pointDestinations = [...pointDestinations];
    this.#pointOffers = [...pointOffers];
    this.#point = point;
    this.#allOffers = allOffers;
    this.#initialState = point;
    this.#handleClickEdit = onEditClick;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;

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
    this.element
      .querySelector('.event__reset-btn')
      .addEventListener('click', this.#onDeleteClick);
    this.element
      .querySelector('#event-price-1')
      .addEventListener('change', this.#eventPriceHandler);
    this.element
      .querySelector('.event__available-offers')
      ?.addEventListener('change', this.#selectedPointOffersHandler);
    this.#setDatePicker();
  }

  #onClickEdit = (evt) => {
    evt.preventDefault();
    this.#handleClickEdit();
    TripFormView.parsePointToState({ point: { ...this.#point } });
  };

  #eventPriceHandler = (evt) => {
    this._setState({
      point: {
        ...this._state.point,
        basePrice: Number(evt.target.value),
      },
    });
  };

  #eventTypeHandler = (evt) => {
    evt.preventDefault();
    const newType = evt.target.dataset.eventType;
    const offersType = this.#pointOffers.find(
      (offer) => offer.type === newType
    );

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

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this._state);
  };

  #onDeleteClick = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(this._state);
  };

  removeElement() {
    super.removeElement();

    if (this.#dateStartPicker) {
      this.#dateStartPicker.destroy();
      this.#dateStartPicker = null;
    }

    if (this.#dateEndPicker) {
      this.#dateEndPicker.destroy();
      this.#dateEndPicker = null;
    }
  }

  #setDatePicker = () => {
    const startTime = this.element.querySelector('#event-start-time-1');
    const endTime = this.element.querySelector('#event-end-time-1');
    const datePickerOptions = {
      enableTime: true,
      time24hr: true,
      dateFormat: FormatTime.DATE_PICKER,
    };

    this.#dateStartPicker = flatpickr(startTime, {
      ...datePickerOptions,
      maxDate: this._state.point.dateTo,
      onChange: this.#changeDateHandler('dateFrom'),
    });

    this.#dateEndPicker = flatpickr(endTime, {
      ...datePickerOptions,
      minDate: this._state.point.dateFrom,
      onChange: this.#changeDateHandler('dateTo'),
    });
  };

  #changeDateHandler =
    (date) =>
      ([userDate]) => {
        this._setState({
          point: {
            ...this._state.point,
            [date]: userDate,
          },
        });

        if (date === 'dateFrom') {
          this.#dateEndPicker.set('minDate', userDate);
        } else if (date === 'dateTo') {
          this.#dateStartPicker.set('maxDate', userDate);
        }
      };

  #selectedPointOffersHandler = () => {
    const selectedOffers = this.element.querySelectorAll(
      '.event__offer-checkbox:checked'
    );
    const regExp = 'event-offer-';
    this._setState({
      point: {
        ...this._state.point,
        offers: Array.from(selectedOffers).map((item) =>
          item.id.replace(regExp, '')
        ),
      },
    });
  };

  reset() {
    const destination = this.#pointDestinations.find(
      (item) => item.id === this.#initialState.destination
    );
    this.updateElement({
      point: { ...this.#initialState },
      typeOffers: this.#pointOffers.find(
        (offer) => offer.type === this.#initialState.type
      ),
      pointDestinations: [destination],
    });
  }

  static parsePointToState(point, pointDestinations, pointOffer) {
    return { ...point, ...pointDestinations, ...pointOffer };
  }

  static parseStateToPoint(state) {
    const point = { ...state };

    return point;
  }
}
