import { RenderPosition, render } from '../framework/render';
import { filterBy } from '../utils/point-time-filters';
import { FilterType } from '../const';
import { SortType, UserAction, UpdateType } from '../const';
import { sortPoints } from '../utils/sorting-values';

import TripInfoView from '../view/trip-info-view';

import TripPointEmptyView from '../view/trip-point-empty-view';
import TripFormSortView from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import PointPresenter from './point-presenter';

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

  #isPointsEmpty = null;
  #pointsPresenter = new Map();
  #sortComponent = null;
  #activeSortButton = SortType.DAY;

  #filterType = FilterType.EVERYTHING;

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
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filterBy[this.#filterType](points);

    return sortPoints(filteredPoints, this.#activeSortButton);
  }

  get pointOffers() {
    return this.#additionalOfferModel.additionalOffers;
  }

  get pointDestinations() {
    return this.#pointDestinationsModel.pointDestinations;
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
    });
    pointPresenter.init(point);
    this.#pointsPresenter.set(point.id, pointPresenter);
  }

  #renderTripFormSortView() {
    this.#sortComponent = new TripFormSortView(
      this.#activeSortButton,
      this.#handleSortTypeChange
    );
    render(this.#sortComponent, pageTripEventsElement);
  }

  #renderTripPointEmptyView() {
    render(new TripPointEmptyView(), pageTripEventsElement);
  }

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#activeSortButton === sortType) {
      return;
    }
    this.#activeSortButton = sortType;
    this.#clearPoint();
    sortPoints(this.#pointsModel.points, this.#activeSortButton).map(
      (point) => {
        this.#renderTripEventsItemView(point);
      }
    );
  };

  #handleViewAction = (actionType, updateType, updatePoint) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, updatePoint);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, updatePoint);
        break;
      case UserAction.DELETE_POINT:
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
    }
  };

  #renderPointBody() {
    this.points.forEach((point) => this.#renderTripEventsItemView(point));
  }

  #clearPoint({ resetSortType = false } = {}) {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
    if (resetSortType) {
      this.#activeSortButton = SortType.DAY;
    }
  }

  init() {
    this.#isPointsEmpty = this.points.length === 0;

    if (!this.#isPointsEmpty) {
      this.#renderTripInfoView();

      this.#renderTripFormSortView();
      this.#renderTripListView();
      this.#renderPointBody();
    } else {
      this.#renderTripPointEmptyView();
    }
  }
}
