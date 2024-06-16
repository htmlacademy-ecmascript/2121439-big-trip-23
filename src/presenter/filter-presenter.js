import { render, remove, replace } from '../framework/render.js';
import { filterBy } from '../utils/point-time-filters';
import { FilterType, UpdateType } from '../const';
import TripFilterView from '../view/trip-filter-view';

const filterElement = document.querySelector('.trip-controls__filters');

export default class FilterPresenter {
  #pointModel = null;
  #filterModel = null;

  #filterComponent = null;
  constructor({ pointsModel, filterModel }) {
    this.#pointModel = pointsModel;
    this.#filterModel = filterModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointModel.points;
    return Object.values(FilterType).map((type) => ({
      type,
      count: filterBy[type](points).length,
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;
    const currentFilterType = this.#filterModel.filter;
    const onFilterTypeChange = this.#handleFilterTypeChange;

    this.#filterComponent = new TripFilterView({
      filters,
      currentFilterType,
      onFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, filterElement);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }
    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
