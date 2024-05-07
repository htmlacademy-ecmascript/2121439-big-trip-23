import ContentPresenter from './presenter/content-presenter.js';
import PointsModel from './model/points-model.js';
import AdditionalOfferModel from './model/additional-offer-model.js';
import PointDestinationsModel from './model/point-destinations-model.js';

const pointsModel = new PointsModel();
const additionalOfferModel = new AdditionalOfferModel();
const pointDestinationsModel = new PointDestinationsModel();

const contentPresenter = new ContentPresenter(
  pointsModel,
  additionalOfferModel,
  pointDestinationsModel
);

//Presenter render

contentPresenter.init();
