const createFormTypeEventsTemplate = (pointOffers) => pointOffers.map(
  (pointOffer) => `<div class="event__type-item">
    <input id="event-type-${pointOffer.type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointOffer.type.toLowerCase()}">
    <label class="event__type-label  event__type-label--${pointOffer.type.toLowerCase()}" for="event-type-${pointOffer.type.toLowerCase()}-1">${
  pointOffer.type
}</label>
  </div>`
);
export const createFormTypeEventsListTemplate = (
  pointOffers
) => `<div class="event__type-list">
  <fieldset class="event__type-group">
    <legend class="visually-hidden">Event type</legend>
    ${createFormTypeEventsTemplate(pointOffers).join('')}
  </fieldset>
</div>`;
