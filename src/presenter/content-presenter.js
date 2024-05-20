import { RenderPosition, render } from '../framework/render';
import { generateFilters } from '../utils/point-time-filters';
import { updatePoint } from '../utils/point-data';
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
  #isPointEmpty = null;
  #pointsPresenter = new Map();

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
  #renderTripFormSortView() {
    render(new TripFormSortView(), pageTripEventsElement);
  }

  #renderTripListView() {
    render(new TripListView(), pageTripEventsElement);
  }

  #renderTripEventsItemView(point, pointDestinations, pointOffers) {
    const pointPresenter = new PointPresenter({
      pointDestinations,
      pointOffers,
      onPointUpdate: this.#handlePointUpdate,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point);
    this.#pointsPresenter.set(point.id, pointPresenter);
  }

  #renderTripPointEmptyView() {
    render(new TripPointEmptyView(), pageTripEventsElement);
  }

  #handlePointUpdate = (updatedPoint) => {
    this.#points = updatePoint(this.#points, updatedPoint);
    this.#pointsPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #clearPoint() {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
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
      this.#renderTripFilterView(this.#points);
      this.#renderTripListView();
      this.#points.map((point) =>
        this.#renderTripEventsItemView(
          point,
          this.#pointDestinations,
          this.#pointOffers
        )
      );
    } else {
      this.#renderTripPointEmptyView();
    }
  }
}
