import { RenderPosition, render } from '../framework/render';

import { FormType } from '../const';
import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';

import TripFormSortView from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import TripEventsItemView from '../view/trip-events-item-view';
import TripListEventElement from '../view/trip-list-event-element/trip-list-event-element';
import TripFormView from '../view/trip-form-view';

//Header element
const pageHeaderElement = document.querySelector('.page-header__container');
const tripMainHeaderElement = pageHeaderElement.querySelector('.trip-main');
const tripMainHeaderControlsElement = tripMainHeaderElement.querySelector(
  '.trip-main__trip-controls'
);

//Main element
const pageTripEventsElement = document.querySelector('.trip-events');

export default class ContentPresenter {
  constructor(pointsModel, additionalOfferModel, pointDestinationsModel) {
    this.pointsModel = pointsModel;
    this.additionalOfferModel = additionalOfferModel;
    this.pointDestinationsModel = pointDestinationsModel;
  }

  //Header render
  renderTripInfoView() {
    render(
      new TripInfoView(),
      tripMainHeaderElement,
      RenderPosition.AFTERBEGIN
    );
  }

  renderTripFilterView() {
    render(new TripFilterView(), tripMainHeaderControlsElement);
  }

  //Main render
  renderTripFormSortView() {
    render(new TripFormSortView(), pageTripEventsElement);
  }

  renderTripListView() {
    render(new TripListView(), pageTripEventsElement);
  }

  renderTripEventsItemView() {
    this.tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');
    render(
      new TripEventsItemView(
        new TripListEventElement(this.points, this.pointOffers).template
      ),
      this.tripEventsList
    );
  }

  renderTripFormEditPointView(formTypeSelect) {
    render(
      new TripEventsItemView(
        new TripFormView(
          formTypeSelect,
          this.pointDestinations,
          this.pointOffers
        ).template
      ),
      this.tripEventsList,
      RenderPosition.AFTERBEGIN
    );
  }

  renderTripFormPointAddView(formTypeSelect) {
    render(
      new TripEventsItemView(
        new TripFormView(
          formTypeSelect,
          this.pointDestinations,
          this.pointOffers
        ).template
      ),
      this.tripEventsList,
      RenderPosition.AFTERBEGIN
    );
  }

  init() {
    this.points = [...this.pointsModel.getPointData()];
    this.pointOffers = [...this.additionalOfferModel.getAdditionalOffer()];
    this.pointDestinations = [
      ...this.pointDestinationsModel.getPointDestinations(),
    ];
    this.renderTripInfoView();
    this.renderTripFormSortView();
    this.renderTripFilterView();

    this.renderTripListView();
    this.renderTripEventsItemView();
    this.renderTripFormPointAddView(FormType.FORM_ADD);
    this.renderTripFormEditPointView(FormType.FORM_EDIT);
  }
}
