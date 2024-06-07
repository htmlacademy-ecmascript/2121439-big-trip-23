import ContentPresenter from './presenter/content-presenter.js';
import PointsModel from './model/points-model.js';
import AdditionalOfferModel from './model/additional-offer-model.js';
import PointDestinationsModel from './model/point-destinations-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';

const pointsModel = new PointsModel();
const additionalOfferModel = new AdditionalOfferModel();
const pointDestinationsModel = new PointDestinationsModel();
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter(pointsModel, filterModel);

const contentPresenter = new ContentPresenter({
  pointsModel,
  additionalOfferModel,
  pointDestinationsModel,
  filterModel,
});

//Presenter render
filterPresenter.init();
contentPresenter.init();
