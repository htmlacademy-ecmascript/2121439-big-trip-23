import { RenderPosition, render } from '../framework/render';
import { generateFilters } from '../utils/point-time-filters';
import { updatePoint } from '../utils/point-data';
import { SortType } from '../const';
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
  #points = [];
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
      pointDestinations: this.#pointDestinations,
      pointOffers: this.#pointOffers,
      onPointUpdate: this.#handlePointUpdate,
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

  #handleSortTypeChange = (sortType) => {
    if (this.#activeSortButton === sortType) {
      return;
    }
    this.#activeSortButton = sortType;
    this.#clearPoint();
    this.#points = sortPoints(
      this.#pointsModel.points,
      this.#activeSortButton
    ).map((point) => {
      this.#renderTripEventsItemView(point);
    });
  };

  #handlePointUpdate = (updatedPoint) => {
    this.#points = updatePoint(
      (this.#points = sortPoints(
        this.#pointsModel.points,
        this.#activeSortButton
      )),
      updatedPoint
    );
    this.#pointsPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #clearPoint() {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
  }

  get points() {
    return this.#pointsModel.points;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#pointOffers = [...this.#additionalOfferModel.additionalOffers];
    this.#pointDestinations = [
      ...this.#pointDestinationsModel.pointDestinations,
    ];
    this.#isPointsEmpty = this.#points.length === 0;

    if (!this.#isPointsEmpty) {
      this.#renderTripInfoView();
      this.#renderTripFormSortView();
      this.#renderTripFilterView(this.#points);
      this.#renderTripListView();
      this.#points.map((point) => this.#renderTripEventsItemView(point));
    } else {
      this.#renderTripPointEmptyView();
    }
  }
}
