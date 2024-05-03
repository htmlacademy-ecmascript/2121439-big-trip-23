const createEventOffer = (offerId, pointOffers) => {
  const offers = [];

  const getOfferPointType = (offerItem) =>
    offerId.find((item) => {
      if (offerItem.id === item) {
        offers.push(offerItem);
      }
    });

  pointOffers.map((items) => {
    items.offers.find((offer) => {
      getOfferPointType(offer);
    });
  });

  const renderPointOffers = () =>
    offers
      .map(
        (offer) => `<li class="event__offer" >
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`
      )
      .join('');

  return renderPointOffers();
};

export const createEventOffers = (
  offerId,
  pointOffers
) => `<ul class="event__selected-offers">
  ${createEventOffer(offerId, pointOffers)}
</ul>`;
