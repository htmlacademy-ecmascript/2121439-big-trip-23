import {
  pointsData,
  additionalPointOffers,
  pointDestinations,
} from '../mock/points-data';

export default class PointsModel {
  points = [...pointsData];
  pointOffers = [...additionalPointOffers];
  pointDestinations = [...pointDestinations];

  getPointData() {
    return this.points;
  }

  getPointOffers() {
    return this.pointOffers;
  }

  getPointDestinations() {
    return this.pointDestinations;
  }

  init() {
    this.getPointData();
    this.getPointDestinations();
    this.getPointOffers();
  }
}
