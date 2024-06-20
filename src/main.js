import ContentPresenter from './presenter/content-presenter.js';
import PointsModel from './model/points-model.js';
import AdditionalOfferModel from './model/additional-offer-model.js';
import PointDestinationsModel from './model/point-destinations-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointApiService from './server/point-api-service.js';
import { AUTHORIZATION, END_POINT } from './const.js';

const pointsModel = new PointsModel({
  pointApiService: new PointApiService(END_POINT, AUTHORIZATION),
});
const pointDestinationsModel = new PointDestinationsModel({
  pointApiService: new PointApiService(END_POINT, AUTHORIZATION),
});
const additionalOfferModel = new AdditionalOfferModel({
  pointApiService: new PointApiService(END_POINT, AUTHORIZATION),
});

const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({ pointsModel, filterModel });

const contentPresenter = new ContentPresenter({
  pointsModel,
  additionalOfferModel,
  pointDestinationsModel,
  filterModel,
});

filterPresenter.init();
contentPresenter.init();
Promise.all([
  pointDestinationsModel.init(),
  additionalOfferModel.init(),
]).finally(() => {
  pointsModel.init();
});
