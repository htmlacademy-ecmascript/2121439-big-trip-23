export default class FormModel {
  constructor(typeEvents, additionalPointOffers) {
    this.typeEvents = [...typeEvents];
    this.additionalPointOffers = [...additionalPointOffers];
  }

  formAdditionalOffers = [];

  setTypeOfferAndPoint(typeEvents, additionalPointOffers) {
    this.pointType = typeEvents.map((typePoint) => typePoint);

    this.offerType = additionalPointOffers.map((typeOffer) => typeOffer);

    return this.pointType.find((typePoint) => {
      this.offerType.map((item) => {
        if (typePoint.value.toLowerCase() === item.type.toLowerCase()) {
          this.formAdditionalOffers.push(item);
        }
      });
      return this.formAdditionalOffers;
    });
  }

  getFormAdditionalOffers() {
    return this.formAdditionalOffers;
  }

  init() {
    console.log(this.formAdditionalOffers);
    this.setTypeOfferAndPoint(this.typeEvents, this.additionalPointOffers);
    this.getFormAdditionalOffers();
  }
}
