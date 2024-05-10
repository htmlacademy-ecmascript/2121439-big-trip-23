import { RenderPosition, render } from '../framework/render';

import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';

import TripFormSortView from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import TripEventsItemView from '../view/trip-events-item-view';
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
  #points = null;
  #pointOffers = null;
  #pointDestinations = null;
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

  #renderTripEventsItemView() {
    this.tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');
    render(
      new TripEventsItemView(
        new TripListEventElement(this.#points, this.#pointOffers).template
      ),
      this.tripEventsList
    );
  }

  init() {
    this.#points = [...this.#pointsModel.pointData];
    this.#pointOffers = [...this.#additionalOfferModel.additionalOffers];
    this.#pointDestinations = [
      ...this.#pointDestinationsModel.pointDestinations,
    ];
    this.#renderTripInfoView();
    this.#renderTripFormSortView();
    this.#renderTripFilterView();
    this.#renderTripListView();
    this.#renderTripEventsItemView();
  }
}
