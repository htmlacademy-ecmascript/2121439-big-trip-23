import ContentPresenter from './presenter/content-presenter.js';
import PointsModel from './model/points-model.js';
const pointsModel = new PointsModel().getPointData();

const contentPresenter = new ContentPresenter(pointsModel);

//Presenter render

contentPresenter.init();
