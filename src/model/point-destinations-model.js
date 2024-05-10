import { pointDestinations } from '../mock/points-data';

export default class PointDestinationsModel {
  pointDestinations = [...pointDestinations];

  getPointDestinations() {
    return this.pointDestinations;
  }
}
