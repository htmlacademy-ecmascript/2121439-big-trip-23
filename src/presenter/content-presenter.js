import { RenderPosition, render } from '../render';
import { FormType } from '../const';
import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';

import TripFormSort from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import TripEventsItemView from '../view/trip-events-item-view';
import TripListEventElement from '../view/trip-list-event-element/trip-list-event-element';
import FormView from '../view/trip-form-view';

//Header element
const pageHeaderElement = document.querySelector('.page-header__container');
const tripMainHeaderElement = pageHeaderElement.querySelector('.trip-main');
const tripMainHeaderControlsElement = tripMainHeaderElement.querySelector(
  '.trip-main__trip-controls'
);

//Main element
const pageTripEventsElement = document.querySelector('.trip-events');

export default class ContentPresenter {
  constructor({ points, pointOffers, pointDestinations }) {
    this.points = [...points];
    this.pointOffers = [...pointOffers];
    this.pointDestinations = [...pointDestinations];
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
  renderTripFormSort() {
    render(new TripFormSort(), pageTripEventsElement);
  }

  renderTripListView() {
    render(new TripListView(), pageTripEventsElement);
  }

  renderTripEventsItemView() {
    this.tripEventsList =
      pageTripEventsElement.querySelector('.trip-events__list');
    render(
      new TripEventsItemView(
        new TripListEventElement(this.points, this.pointOffers).getTemplate()
      ),
      this.tripEventsList
    );
  }

  renderTripFormEditPointView(formTypeSelect) {
    render(
      new TripEventsItemView(new FormView(formTypeSelect).getTemplate()),
      this.tripEventsList,
      RenderPosition.AFTERBEGIN
    );
  }

  renderTripFormPointAddView(formTypeSelect) {
    render(
      new TripEventsItemView(new FormView(formTypeSelect).getTemplate()),
      this.tripEventsList,
      RenderPosition.BEFOREEND
    );
  }

  init() {
    this.renderTripFormSort();
    this.renderTripFilterView();
    this.renderTripInfoView();
    this.renderTripListView();
    this.renderTripEventsItemView();
    this.renderTripFormEditPointView(FormType.FORM_EDIT);
  }
}
