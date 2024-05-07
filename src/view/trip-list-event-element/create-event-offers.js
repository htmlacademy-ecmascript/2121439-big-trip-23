const createEventOffer = (pointOfferId, pointOffers) => {
  const offers = [];

  const getOfferPointType = (offerItem) =>
    pointOfferId.find((item) => {
      if (offerItem.id === item) {
        offers.push(offerItem);
      }
    });

  pointOffers.map((items) => {
    items.offers.map((offer) => {
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
  pointOfferId,
  pointOffers
) => `<ul class="event__selected-offers">
  ${createEventOffer(pointOfferId, pointOffers)}
</ul>`;
