import ContentPresenter from './presenter/content-presenter.js';
import PointsModel from './model/points-model.js';
import AdditionalOfferModel from './model/additional-offer-model.js';

const pointsModel = new PointsModel();
const additionalOfferModel = new AdditionalOfferModel();

const contentPresenter = new ContentPresenter(
  pointsModel,
  additionalOfferModel
);

//Presenter render

contentPresenter.init();
