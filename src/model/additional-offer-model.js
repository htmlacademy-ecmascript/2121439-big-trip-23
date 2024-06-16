import { additionalPointOffers } from '../mock/points-data';
export default class AdditionalOfferModel {
  #offers = [];

  constructor() {
    this.#offers = [...additionalPointOffers];
  }

  get additionalOffers() {
    return this.#offers;
  }

  getOffersByType(type) {
    const typeTransform = type.toLowerCase();
    const allOffers = this.additionalOffers;
    return allOffers.find((offer) => offer.type === typeTransform);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);

    return offersType.offers.filter((item) =>
      itemsId.find((id) => item.id === id)
    );
  }
}
