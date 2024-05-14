import { RenderPosition, render, replace } from '../framework/render';
import { FormType } from '../const';

import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';
import TripFormView from '../view/trip-form-view';
import TripPointEmptyView from '../view/trip-point-empty-view';

import TripFormSortView from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';

import TripListEventElement from '../view/trip-list-event-element/trip-list-event-element';

//Header element
const pageHeaderElement = document.querySelector('.page-header__container');
const tripMainHeaderElement = pageHeaderElement.querySelector('.trip-main');
const tripMainHeaderControlsElement = tripMainHeaderElement.querySelector(
  '.trip-main__trip-controls'
);

//Main element
const pageTripEventsElement = document.querySelector('.trip-events');

export default class ContentPresenter {
  #pointsModel = null;
  #additionalOfferModel = null;
  #pointDestinationsModel = null;
  #points = [];
  #pointOffers = [];
  #pointDestinations = [];
  #formTypeSelect = FormType;
  #tripEventsList = null;
  #isPointEmpty = null;

  constructor(pointsModel, additionalOfferModel, pointDestinationsModel) {
    this.#pointsModel = pointsModel;
    this.#additionalOfferModel = additionalOfferModel;
    this.#pointDestinationsModel = pointDestinationsModel;
  }

  //Header render
  #renderTripInfoView() {
    render(
      new TripInfoView(),
      tripMainHeaderElement,
      RenderPosition.AFTERBEGIN
    );
  }

  #renderTripFilterView() {
    render(new TripFilterView(), tripMainHeaderControlsElement);
  }

  //Main render
  #renderTripFormSortView() {
    render(new TripFormSortView(), pageTripEventsElement);
  }

  #renderTripListView() {
    render(new TripListView(), pageTripEventsElement);
  }

  #renderTripEventsItemView(point) {
    this.#tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');

    const pointAdditionalOffers = this.#additionalOfferModel.getOffersById(
      point.type,
      point.offers
    );

    const allOffers = this.#additionalOfferModel.getOffersByType(point.type);

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        switchToEventPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const tripListEventElement = new TripListEventElement({
      point,
      pointAdditionalOffers,
      onEditClick: () => {
        switchToFormEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const onFormSubmit = () => {
      switchToEventPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const tripEventFormEdit = new TripFormView({
      formType: this.#formTypeSelect.FORM_EDIT,
      destinations: this.#pointDestinations,
      pointOffers: this.#pointOffers,
      point: point,
      allOffers: allOffers,
      onEditClick: switchToEventPoint,
      onFormSubmit: onFormSubmit,
    });

    function switchToFormEdit() {
      replace(tripEventFormEdit, tripListEventElement);
    }

    function switchToEventPoint() {
      replace(tripListEventElement, tripEventFormEdit);
    }

    render(tripListEventElement, this.#tripEventsList);
  }

  #renderTripPointEmptyView() {
    render(new TripPointEmptyView(), pageTripEventsElement);
  }

  init() {
    this.#points = [...this.#pointsModel.pointData];
    this.#pointOffers = [...this.#additionalOfferModel.additionalOffers];
    this.#pointDestinations = [
      ...this.#pointDestinationsModel.pointDestinations,
    ];
    this.#isPointEmpty = this.#points.length === 0;

    if (!this.#isPointEmpty) {
      this.#renderTripInfoView();
      this.#renderTripFormSortView();
      this.#renderTripFilterView();
      this.#renderTripListView();
      this.#points.map((point) => this.#renderTripEventsItemView(point));
    } else {
      this.#renderTripPointEmptyView();
    }
  }
}
