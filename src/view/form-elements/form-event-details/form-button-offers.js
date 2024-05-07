const createButtonsFormOfferTemplate = (pointOffers) =>
  pointOffers[4].offers.map(
    (item) => ` <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-${
  item.type
}-1" type="checkbox" name="event-offer-${item.type}" ${
  item.isChecked ? 'checked' : ''
}>
                <label class="event__offer-label" for="event-offer-${
  item.type
}-1">
                  <span class="event__offer-title">${item.title}</span>
                  +€&nbsp;
                  <span class="event__offer-price">${item.price}</span>
                </label>
              </div>
            `
  );

export const createFormButtonOffersTemplate = (
  pointOffers
) => `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                  ${createButtonsFormOfferTemplate(pointOffers).join('')}
              </div>
          </section>`;
