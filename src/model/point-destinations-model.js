import { pointDestinations } from '../mock/points-data';

export default class PointDestinationsModel {
  #destinations = [...pointDestinations];

  get pointDestinations() {
    return this.#destinations;
  }
}
