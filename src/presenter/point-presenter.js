import { render, replace, remove } from '../framework/render';

import TripListEventElement from '../view/trip-list-event-element/trip-list-event-element';
import TripFormView from '../view/trip-form-view';
import AdditionalOfferModel from '../model/additional-offer-model';
import { FormType, Mode } from '../const';

const pageTripEventsElement = document.querySelector('.trip-events');

export default class PointPresenter {
  #pointElementComponent = null;
  #pointEditElementComponent = null;
  #point = null;
  #tripEventsList = null;
  #additionalOfferModel = null;
  #pointDestinations = null;
  #pointOffers = null;
  #formTypeSelect = FormType.FORM_EDIT;
  #mode = Mode.DEFAULT;
  #handlePointUpdate = null;
  #handleModeChange = null;

  constructor({ pointDestinations, pointOffers, onPointUpdate, onModeChange }) {
    this.#handlePointUpdate = onPointUpdate;
    this.#pointOffers = pointOffers;
    this.#pointDestinations = pointDestinations;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    this.#tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');

    this.#additionalOfferModel = new AdditionalOfferModel();
    const prevPointElementComponent = this.#pointElementComponent;
    const prevPointEditElementComponent = this.#pointEditElementComponent;

    const pointAdditionalOffers = this.#additionalOfferModel.getOffersById(
      this.#point.type,
      this.#point.offers
    );

    const allOffers = this.#additionalOfferModel.getOffersByType(point.type);

    this.#pointElementComponent = new TripListEventElement({
      point: this.#point,
      pointAdditionalOffers,
      onEditClick: this.#onEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditElementComponent = new TripFormView({
      formType: this.#formTypeSelect,
      destinations: this.#pointDestinations,
      pointOffers: this.#pointOffers,
      point: this.#point,
      allOffers: allOffers,
      onEditClick: this.#onFormClick,
      onFormSubmit: this.#onFormSubmit,
    });

    if (
      prevPointElementComponent === null ||
      prevPointEditElementComponent === null
    ) {
      render(this.#pointElementComponent, this.#tripEventsList);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointElementComponent, prevPointElementComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditElementComponent, prevPointEditElementComponent);
    }

    remove(prevPointElementComponent);
    remove(prevPointEditElementComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#pointEditElementComponent.reset();
      this.#switchToEventPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.#handlePointUpdate({
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });
  };

  #onFormSubmit = () => {
    this.#switchToEventPoint();
    this.#handlePointUpdate(this.#point);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onEditClick = () => {
    this.#switchToFormEdit();
    this.#pointEditElementComponent.reset();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onFormClick = () => {
    this.#switchToEventPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #switchToFormEdit() {
    replace(this.#pointEditElementComponent, this.#pointElementComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #switchToEventPoint() {
    replace(this.#pointElementComponent, this.#pointEditElementComponent);
    this.#mode = Mode.DEFAULT;
  }

  destroy() {
    remove(this.#pointElementComponent);
    remove(this.#pointEditElementComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#switchToEventPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  }
}
