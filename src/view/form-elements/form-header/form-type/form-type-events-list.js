const titleTypeTransform = (type) => {
  const result = type.charAt(0).toUpperCase() + type.slice(1);
  return result;
};

const createFormTypeEventsTemplate = (pointOffers, statePoint) =>
  pointOffers.map((pointOffer) => {
    const isChecked = pointOffer.type.toLowerCase() === statePoint.type;

    return `<div class="event__type-item">
      <input id="event-type-${pointOffer.type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointOffer.type.toLowerCase()}" ${
  isChecked ? 'checked' : ''
} data-event-type="${pointOffer.type.toLowerCase()}"/>
      <label class="event__type-label  event__type-label--${pointOffer.type.toLowerCase()}" for="event-type-${pointOffer.type.toLowerCase()}-1">${titleTypeTransform(
  pointOffer.type
)}</label>
    </div>`;
  });

export const createFormTypeEventsListTemplate = (
  pointOffers,

  statePoint
) => `<div class="event__type-list">
  <fieldset class="event__type-group">
    <legend class="visually-hidden">Event type</legend>
    ${createFormTypeEventsTemplate(pointOffers, statePoint).join('')}
  </fieldset>
</div>`;
