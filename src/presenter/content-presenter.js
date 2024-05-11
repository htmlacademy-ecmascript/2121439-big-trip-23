import { RenderPosition, render, replace } from '../framework/render';
import { FormType } from '../const';

import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';
import TripFormView from '../view/trip-form-view';

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
    this.#tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');
    const onEditClick = () => {
      return console.log(1);
    };

    this.#points.map((point) => {
      const pointAddOffers = this.#additionalOfferModel.getOffersById(
        point.type,
        point.offers
      );
      render(
        new TripListEventElement(point, pointAddOffers, onEditClick),
        this.#tripEventsList
      );
    });
  }

  #renderTripEventElement() {
    const tripEventElement = new TripListEventElement(
      this.#points,
      this.#pointOffers
    ).template;

    const tripEventFormEdit = new TripFormView(
      this.#formTypeSelect.FORM_EDIT,
      this.#pointDestinations,
      this.#pointOffers
    ).template;

    return tripEventElement;
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
