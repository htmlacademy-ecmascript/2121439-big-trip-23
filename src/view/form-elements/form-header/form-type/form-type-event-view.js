import { createFormTypeEventsListTemplate } from './form-type-events-list';

export const createFormTypeEventTemplate = (
  src = 'img/icons/flight.png'
) => `<div class="event__type-wrapper">
  <label class="event__type  event__type-btn" for="event-type-toggle-1">
  <span class="visually-hidden">Choose event type</span>
  <img class="event__type-icon" width="17" height="17" src="${src}" alt="Event type icon">
</label>
<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">${createFormTypeEventsListTemplate()}</div>`;
