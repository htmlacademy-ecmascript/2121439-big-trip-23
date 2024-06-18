import Observable from '../framework/observable';

import { additionalPointOffers } from '../mock/points-data';
export default class AdditionalOfferModel extends Observable {
  #offers = [...additionalPointOffers];
  #pointsApiService = null;
  // здесь нужна помощь
  // constructor({ pointApiService }) {
  //   super();
  //   this.#pointsApiService = pointApiService;
  // }

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

  // async init() {
  //   try {
  //     const offers = await this.#pointsApiService.offers;
  //     this.#offers = offers;
  //   } catch (err) {
  //     this.#offers = [];
  //   }
  //   this._notify(UpdateType.INIT);
  // }
}
