import { additionalPointOffers } from '../mock/points-data';
export default class AdditionalOfferModel {
  additionalPointOffers = [...additionalPointOffers];

  getAdditionalOffer() {
    return this.additionalPointOffers;
  }
}
