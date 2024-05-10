import { additionalPointOffers } from '../mock/points-data';
export default class AdditionalOfferModel {
  #offers = [...additionalPointOffers];

  get additionalOffers() {
    return this.#offers;
  }
}
