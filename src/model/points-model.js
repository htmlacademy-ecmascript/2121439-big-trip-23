import Observable from '../framework/observable';
import { pointsData } from '../mock/points-data';

export default class PointsModel extends Observable {
  #points = [...pointsData];

  get points() {
    return this.#points;
  }
}
