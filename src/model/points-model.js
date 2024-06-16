import Observable from '../framework/observable';
import { pointsData } from '../mock/points-data';

export default class PointsModel extends Observable {
  #points = [...pointsData];

  get points() {
    return this.#points;
  }

  updatePoint(updateType, updatePoint) {
    const index = this.#points.findIndex(
      (point) => point.id === updatePoint.id
    );
    if (index === -1) {
      throw new Error('"Can\'t update unexisting task"');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      updatePoint,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, updatePoint);
  }

  addPoint(updateType, updatePoint) {
    this.#points = [updatePoint, ...this.#points];
    this._notify(updateType, updatePoint);
  }

  deletePoint(updateType, updatePoint) {
    const index = this.#points.findIndex(
      (point) => point.id === updatePoint.id
    );
    if (index === -1) {
      throw new Error('"Can\'t update unexisting task"');
    }

    this.#points = [
      ...this.#points.slice(0, index),

      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, updatePoint);
  }
}
