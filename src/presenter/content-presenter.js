import { RenderPosition, render } from '../framework/render';
import { generateFilters } from '../utils/point-time-filters';

import { SortType, UserAction, UpdateType } from '../const';
import { sortPoints } from '../utils/sorting-values';

import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filter-view';
import TripPointEmptyView from '../view/trip-point-empty-view';
import TripFormSortView from '../view/trip-form-sort-view';
import TripListView from '../view/trip-list-view';
import PointPresenter from './point-presenter';

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

  #pointOffers = [];
  #pointDestinations = [];
  #tripEventsList = null;
  #isPointsEmpty = null;
  #pointsPresenter = new Map();
  #sortComponent = null;
  #activeSortButton = SortType.DAY;
  #sortPoints = sortPoints;

  constructor(pointsModel, additionalOfferModel, pointDestinationsModel) {
    this.#pointsModel = pointsModel;
    this.#additionalOfferModel = additionalOfferModel;
    this.#pointDestinationsModel = pointDestinationsModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    return this.#pointsModel.points;
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

  #renderTripFilterView(points) {
    const filters = generateFilters(points);
    render(new TripFilterView({ filters }), tripMainHeaderControlsElement);
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
    this.#sortComponent = new TripFormSortView({
      currentSortType: this.#activeSortButton,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, pageTripEventsElement);
  }

  #renderTripPointEmptyView() {
    render(new TripPointEmptyView(), pageTripEventsElement);
  }

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #renderPointBody() {
    this.points.forEach((point) => this.#renderTripEventsItemView(point));
  }

  #clearPoint({ resetSortType = false } = {}) {
    if (resetSortType) {
      this.#activeSortButton = SortType.DAY;
    }
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
  }

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

  init() {
    this.#isPointsEmpty = this.points.length === 0;

    if (!this.#isPointsEmpty) {
      this.#renderTripInfoView();
      this.#renderTripFilterView(this.points);
      this.#renderTripFormSortView();
      this.#renderTripListView();
      this.#renderPointBody();
    } else {
      this.#renderTripPointEmptyView();
    }
  }
}
