import { additionalPointOffers } from '../mock/points-data';
export default class AdditionalOfferModel {
  additionalPointOffers = [...additionalPointOffers];
  offers = [];

  getPointItem(pointItem) {
    return pointItem;
  }

  getAdditionalOffer() {
    return this.additionalPointOffers;
  }
}
