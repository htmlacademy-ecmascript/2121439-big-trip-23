const createEventOffer = (pointAddOffers) => {
  const renderPointOffers = () =>
    pointAddOffers
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
  pointOffers,
  pointAddOffers
) => `<ul class="event__selected-offers">
  ${createEventOffer(pointOfferId, pointOffers, pointAddOffers)}
</ul>`;
