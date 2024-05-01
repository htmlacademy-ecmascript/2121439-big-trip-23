import { POINTS_DATA } from '../mock/points-data';

export default class PointsModel {
  points = POINTS_DATA;

  getPointData() {
    return this.points;
  }
}
