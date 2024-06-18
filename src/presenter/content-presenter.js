import { RenderPosition, remove, render } from '../framework/render';
import { filterBy } from '../utils/point-time-filters';

import { UserAction, UpdateType } from '../const';
import { sortPoints } from '../utils/sorting-values';
import { DEFAULT_SORT_TYPE, DEFAULT_FILTER_TYPE } from '../const';
import TripInfoView from '../view/trip-info-view';
import TripPointEmptyView from '../view/trip-point-empty-view';
import TripFormSortView from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import PointPresenter from './point-presenter';
import NewPointPresenter from './new-point-presenter';
import NewEventButton from '../view/trip-list-event-element/new-event-button';
import LoadingView from '../view/loading-view';

//Header element
const pageHeaderElement = document.querySelector('.page-header__container');
const tripMainHeaderElement = pageHeaderElement.querySelector('.trip-main');

//Main element
const pageTripEventsElement = document.querySelector('.trip-events');

export default class ContentPresenter {
  #pointsModel = null;
  #additionalOfferModel = null;
  #pointDestinationsModel = null;
  #filterModel = null;
  #isLoading = true;

  #buttonComponent = null;

  #pointsPresenter = new Map();
  #newPointPresenter = null;
  #sortComponent = null;
  #loadingComponent = new LoadingView();

  #activeSortTypeButton = DEFAULT_SORT_TYPE;
  #filterType = DEFAULT_FILTER_TYPE;

  constructor({
    pointsModel,
    additionalOfferModel,
    pointDestinationsModel,
    filterModel,
  }) {
    this.#pointsModel = pointsModel;
    this.#additionalOfferModel = additionalOfferModel;
    this.#pointDestinationsModel = pointDestinationsModel;
    this.#filterModel = filterModel;
    this.#newPointPresenter = new NewPointPresenter({
      additionalOfferModel: this.#additionalOfferModel,
      pointDestinationsModel: this.#pointDestinationsModel,
      onDataChange: this.#handleViewAction,
      onDestroy: this.#handleNewPointFormClose,
    });
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filterBy[this.#filterType](points);
    return sortPoints(filteredPoints, this.#activeSortTypeButton);
  }

  get pointOffers() {
    return this.#additionalOfferModel.additionalOffers;
  }

  get pointDestinations() {
    return this.#pointDestinationsModel.pointDestinations;
  }

  get destinationNames() {
    return this.#pointDestinationsModel.destinationNames;
  }

  //Header render
  #renderTripInfoView() {
    render(
      new TripInfoView(),
      tripMainHeaderElement,
      RenderPosition.AFTERBEGIN
    );
  }

  //Main render

  #renderTripListView() {
    render(new TripListView(), pageTripEventsElement);
  }

  #renderTripEventsItemView(point) {
    const pointPresenter = new PointPresenter({
      pointDestinations: this.pointDestinations,
      pointOffers: this.pointOffers,
      onPointUpdate: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
      destinationNames: this.destinationNames,
    });
    pointPresenter.init(point);
    this.#pointsPresenter.set(point.id, pointPresenter);
  }

  #renderTripFormSortView() {
    if (this.#sortComponent !== null) {
      remove(this.#sortComponent);
    }

    this.#sortComponent = new TripFormSortView(
      this.#activeSortTypeButton,
      this.#handleSortTypeChange
    );
    render(
      this.#sortComponent,
      pageTripEventsElement,
      RenderPosition.AFTERBEGIN
    );
  }

  #renderTripPointEmptyView() {
    render(new TripPointEmptyView(), pageTripEventsElement);
  }

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType, updateType, updatePoint) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsPresenter.get(updatePoint.id).setSaving();
        this.#pointsModel.updatePoint(updateType, updatePoint);
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        this.#pointsModel.addPoint(updateType, updatePoint);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsPresenter.get(updatePoint.id).setDeleting();
        this.#pointsModel.deletePoint(updateType, updatePoint);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointsPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearPoint();
        this.#renderPointBody();
        break;
      case UpdateType.MAJOR:
        this.#clearPoint({ resetSortType: true });
        this.#renderPointBody();
        break;
      case UpdateType.INIT:
        remove(this.#loadingComponent);
        this.#renderPointBody();
    }
  };

  #renderPointBody() {
    if (this.points.length > 0) {
      this.#renderTripFormSortView();
      this.#buttonComponent.element.disabled = false;
    }
    this.points.forEach((point) => this.#renderTripEventsItemView(point));

    if (this.#isLoading) {
      this.#renderLoading();
    }
  }

  #renderLoading() {
    render(this.#loadingComponent, pageTripEventsElement);
  }

  #clearPoint({ resetSortType = false } = {}) {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
    this.#newPointPresenter.destroy();
    remove(this.#loadingComponent);

    if (resetSortType) {
      this.#activeSortTypeButton = DEFAULT_SORT_TYPE;
    }
  }

  #renderNewButtonEvent() {
    this.#buttonComponent = new NewEventButton({
      onClick: this.#handleNewPointButtonClick,
    });
    this.#buttonComponent.element.disabled = true;
    render(this.#buttonComponent, tripMainHeaderElement);
  }

  #createNewEvent() {
    this.#activeSortTypeButton = DEFAULT_SORT_TYPE;

    this.#filterModel.setFilter(UpdateType.MAJOR, DEFAULT_FILTER_TYPE);
    this.#newPointPresenter.init();
  }

  #handleNewPointFormClose = () => {
    this.#buttonComponent.element.disabled = false;
  };

  #handleNewPointButtonClick = () => {
    this.#createNewEvent();

    this.#buttonComponent.element.disabled = true;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#activeSortTypeButton === sortType) {
      return;
    }
    this.#activeSortTypeButton = sortType;

    this.#clearPoint();
    sortPoints(this.#pointsModel.points, this.#activeSortTypeButton).map(
      (point) => {
        this.#renderTripEventsItemView(point);
      }
    );
  };

  init() {
    this.#renderTripInfoView();
    this.#renderTripListView();
    this.#renderNewButtonEvent();
    this.#renderPointBody();
  }
}
