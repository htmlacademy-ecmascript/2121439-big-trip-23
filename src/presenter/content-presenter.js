import { RenderPosition, render } from '../render';
import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';

import TripFormSort from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import TripListItemView from '../view/trip-list-item-view';
import TripListEventElement from '../view/trip-list-event-element/trip-list-event-element';
//Form
import FormView from '../view/trip-form-view';
//Form header component
import FormHeader from '../view/form-elements/form-header/form-header';
import FormTypeEventView from '../view/form-elements/form-header/form-type/form-type-event-view';
import FormTypeEventsList from '../view/form-elements/form-header/form-type/form-type-events-list';
import FormEventDestination from '../view/form-elements/form-header/form-event-destination/form-event-destination';
import FormEventTime from '../view/form-elements/form-header/form-event-time/form-event-time';
import FormEventPrice from '../view/form-elements/form-header/form-event-price/form-event-price';
import FormEventButtonSubmit from '../view/form-elements/form-header/form-event-button/form-event-button-submit';
import FormButtonEventOpen from '../view/form-elements/form-header/form-event-button/form-button-open-event';
import FormEventButtonDelete from '../view/form-elements/form-header/form-event-button/form-event-button-delete';
//Form body component
import FormEventDetails from '../view/form-elements/form-event-details/form-event-details';
import FormOffers from '../view/form-elements/form-event-details/form-button-offers';
import FormDetailsDestination from '../view/form-elements/form-event-details/form-details-destination';
import FormDetailsDestinationImages from '../view/form-elements/form-event-details/form-details-destination-images';

const EVENT_POINT_COUNT = 3;

//Header element
const pageHeaderElement = document.querySelector('.page-header__container');
const tripMainHeaderElement = pageHeaderElement.querySelector('.trip-main');
const tripMainHeaderControlsElement = tripMainHeaderElement.querySelector(
  '.trip-main__trip-controls'
);

//Main element
const pageTripEventsSection = document.querySelector('.trip-events');

export default class ContentPresenter {

  isFormAddToImages(formAdd) {
    return formAdd &&
    render(new FormDetailsDestinationImages(), this.tripFormDetailsWrapper);
  }

  isFormAddToButtonOpen(formAdd) {
    return !formAdd && render(new FormButtonEventOpen(), this.tripFormHeaderElement);
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
    render(new TripFormSort(), pageTripEventsSection);
  }

  renderTripListView() {
    render(new TripListView(), pageTripEventsSection);
  }

  renderTripListItemView() {
    this.tripEventsList =
      pageTripEventsSection.querySelector('.trip-events__list');
    for (let i = 0; i < EVENT_POINT_COUNT; i++) {
      render(
        new TripListItemView(new TripListEventElement().getTemplate()),
        this.tripEventsList
      );
    }
  }

  renderTripFormView(formAdd = false) {
    this.tripFormElement = pageTripEventsSection.querySelector('.event--edit');
    render(new FormHeader(), this.tripFormElement, RenderPosition.AFTERBEGIN);

    this.tripFormHeaderElement =
      this.tripFormElement.querySelector('.event__header');
    render(new FormTypeEventView(), this.tripFormHeaderElement);

    this.tripFormHeaderTypeWrapper = this.tripFormHeaderElement.querySelector(
      '.event__type-wrapper'
    );

    //form render header
    render(new FormTypeEventsList(), this.tripFormHeaderTypeWrapper);
    render(new FormEventDestination(), this.tripFormHeaderElement);
    render(new FormEventTime(), this.tripFormHeaderElement);
    render(new FormEventPrice(), this.tripFormHeaderElement);
    render(new FormEventButtonSubmit(), this.tripFormHeaderElement);
    render(new FormEventButtonDelete(formAdd), this.tripFormHeaderElement);


    this.isFormAddToButtonOpen(formAdd);

    //form render body
    render(new FormEventDetails(), this.tripFormElement);
    this.tripFormDetailsWrapper =
      this.tripFormElement.querySelector('.event__details');

    render(new FormOffers(), this.tripFormDetailsWrapper);
    render(new FormDetailsDestination(), this.tripFormDetailsWrapper);

    this.isFormAddToImages(formAdd);

  }

  renderTripFormEditPointView() {
    render(
      new TripListItemView(new FormView().getTemplate()),
      this.tripEventsList,
      RenderPosition.AFTERBEGIN
    );
  }

  renderTripFormPointAddView(formAdd = true) {
    render(
      new TripListItemView(new FormView(formAdd).getTemplate()),
      this.tripEventsList,
      RenderPosition.BEFOREEND
    );
  }

  init() {
    this.renderTripFormSort();
    this.renderTripFilterView();
    this.renderTripInfoView();
    this.renderTripListView();
    this.renderTripListItemView();
    this.renderTripFormEditPointView();
    this.renderTripFormView();
  }
}
