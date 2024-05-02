import {
  ADDITIONAL_POINT_OFFERS,
  POINTS_DATA,
  POINT_DESTINATIONS,
} from '../mock/points-data';

export default class PointsModel {
  points = POINTS_DATA;
  pointOffers = ADDITIONAL_POINT_OFFERS;
  pointDestinations = POINT_DESTINATIONS;

  getPointData() {
    return this.points;
  }

  getPointOffers() {
    return this.pointOffers;
  }

  getPointDestinations() {
    return this.pointDestinations;
  }
}
