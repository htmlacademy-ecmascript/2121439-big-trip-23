import { render, replace, remove } from '../framework/render';
import TripListEventElement from '../view/trip-list-event-element/trip-list-event-element';
import TripFormView from '../view/trip-form-view';
import AdditionalOfferModel from '../model/additional-offer-model';
import { FormType } from '../const';

const pageTripEventsElement = document.querySelector('.trip-events');

export default class PointsPresenter {
  #pointElementComponent = null;
  #pointEditElementComponent = null;
  #point = null;
  #tripEventsList = null;
  #additionalOfferModel = null;

  #pointDestinations = null;
  #pointOffers = null;
  #formTypeSelect = FormType;

  init(point, pointDestinations, pointOffers) {
    this.#point = point;
    this.#pointOffers = pointOffers;
    this.#pointDestinations = pointDestinations;
    this.#tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');
    this.#additionalOfferModel = new AdditionalOfferModel();
    const prevPointElementComponent = this.#pointElementComponent;
    const prevPointEditElementComponent = this.#pointEditElementComponent;

    const pointAdditionalOffers = this.#additionalOfferModel.getOffersById(
      this.#point.type,
      this.#point.offers
    );

    const allOffers = this.#additionalOfferModel.getOffersByType(
      this.#point.type
    );

    this.#pointElementComponent = new TripListEventElement({
      point,
      pointAdditionalOffers,
      onEditClick: this.#onEditClick,
    });

    this.#pointEditElementComponent = new TripFormView({
      formType: this.#formTypeSelect.FORM_EDIT,
      destinations: this.#pointDestinations,
      pointOffers: this.#pointOffers,
      point: point,
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
    if (this.#tripEventsList.contains(prevPointElementComponent.element)) {
      replace(this.#pointElementComponent, prevPointElementComponent);
    }
    if (this.#tripEventsList.contains(prevPointEditElementComponent.element)) {
      replace(this.#pointEditElementComponent, prevPointEditElementComponent);
    }

    remove(this.#pointEditElementComponent);
    remove(this.#pointEditElementComponent);
  }

  destroy() {
    remove(this.#pointElementComponent);
    remove(this.#pointEditElementComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.switchToEventPoint();
      document.removeEventListener('keydown', this.escKeyDownHandler);
    }
  };

  #onFormSubmit = () => {
    this.switchToEventPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onEditClick = () => {
    this.switchToFormEdit();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onFormClick = () => {
    this.switchToEventPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  switchToFormEdit() {
    replace(this.#pointEditElementComponent, this.#pointElementComponent);
  }

  switchToEventPoint() {
    replace(this.#pointElementComponent, this.#pointEditElementComponent);
  }
}
