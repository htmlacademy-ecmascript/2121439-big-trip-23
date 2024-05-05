import { TYPE_EVENTS } from '../../../../const';

const createFormTypeEventsTemplate = () =>
  TYPE_EVENTS.map(
    (type) => `<div class="event__type-item">
    <input id="event-type-${type.value.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.value.toLowerCase()}">
    <label class="event__type-label  event__type-label--${type.value.toLowerCase()}" for="event-type-${type.value.toLowerCase()}-1">${
  type.value
}</label>
  </div>`
  );

export const createFormTypeEventsListTemplate =
  () => `<div class="event__type-list">
  <fieldset class="event__type-group">
    <legend class="visually-hidden">Event type</legend>
    ${createFormTypeEventsTemplate().join('')}
  </fieldset>
</div>`;
