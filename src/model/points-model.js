import { pointsData } from '../mock/points-data';

export default class PointsModel {
  #points = [...pointsData];

  get pointData() {
    return this.#points;
  }
}
