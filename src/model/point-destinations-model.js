import { UpdateType } from '../const';
import Observable from '../framework/observable';
export default class PointDestinationsModel extends Observable {
  #destinations = [];
  #destinationName = [];
  #pointsApiService = null;

  constructor({ pointApiService }) {
    super();
    this.#pointsApiService = pointApiService;
  }

  get pointDestinations() {
    return this.#destinations;
  }

  get destinationNames() {
    const names = [];
    this.#destinations.reduce((acc, item) => {
      if (item.name) {
        names.push(item.name);
      }
      return acc;
    }, {});
    return names;
  }

  async init() {
    try {
      const destinations = await this.#pointsApiService.destinations;
      this.#destinations = destinations;
    } catch (err) {
      this.#destinations = [];
    }
    this._notify(UpdateType.INIT);
  }
}
