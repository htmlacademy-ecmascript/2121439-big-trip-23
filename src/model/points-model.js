import { pointsData } from '../mock/points-data';

export default class PointsModel {
  points = [...pointsData];

  getPointData() {
    return this.points;
  }

  init() {
    this.getPointData();
  }
}
