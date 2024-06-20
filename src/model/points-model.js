import Observable from '../framework/observable';
import { UpdateType } from '../const';
export default class PointsModel extends Observable {
  #points = [];
  #pointsApiService = null;
  #isLoading = true;
  #isLoadingFailed = false;

  constructor({ pointApiService }) {
    super();
    this.#pointsApiService = pointApiService;
  }

  get points() {
    return this.#points;
  }

  get error() {
    return this.#isLoadingFailed;
  }

  async init() {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
    } catch (err) {
      this.#points = [];
      this.#isLoading = false;
      this.#isLoadingFailed = true;
    }
    this._notify(UpdateType.INIT);
  }

  async addPoint(updateType, updatePoint) {
    try {
      const response = await this.#pointsApiService.addPoint(updatePoint);
      const newPoint = this.#adaptToClient(response);
      this.#points = [newPoint, ...this.#points];
      this._notify(updateType, newPoint);
    } catch (error) {
      new Error('"Can\'t update unexisting task"');
    }
  }

  async updatePoint(updateType, updatePoint) {
    const index = this.#points.findIndex(
      (point) => point.id === updatePoint.id
    );
    if (index === -1) {
      throw new Error('"Can\'t update unexisting task"');
    }

    try {
      const response = await this.#pointsApiService.updatePoint(updatePoint);

      const updatedPoint = this.#adaptToClient(response);

      this.#points = [
        ...this.#points.slice(0, index),
        updatedPoint,
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType, updatedPoint);
    } catch (error) {
      new Error('"Can\'t update unexisting task"');
    }
  }

  async deletePoint(updateType, updatePoint) {
    const index = this.#points.findIndex(
      (point) => point.id === updatePoint.id
    );
    if (index === -1) {
      throw new Error('"Can\'t update unexisting task"');
    }

    try {
      await this.#pointsApiService.deletePoint(updatePoint);
      this.#points = [
        ...this.#points.slice(0, index),
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType);
    } catch (error) {
      throw new Error('"Can\'t update unexisting task"');
    }
  }

  #adaptToClient(point) {
    const adaptedPoint = {
      ...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'],
      dateTo: point['date_to'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}
