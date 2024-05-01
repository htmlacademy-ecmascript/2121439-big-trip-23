import ContentPresenter from './presenter/content-presenter.js';
import TripPointData from './model/trip-point-data.js';

const contentPresenter = new ContentPresenter(
  new TripPointData().SORTED_POINTS
);

//Presenter render

contentPresenter.init();
