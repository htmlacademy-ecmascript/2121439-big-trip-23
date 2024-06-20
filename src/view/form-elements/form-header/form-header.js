import { createFormTypeEventTemplate } from './form-type/form-type-event-view';
import { createFormEventDestinationTemplate } from './form-event-destination/form-event-destination';
import { createFormEventTimeTemplate } from './form-event-time/form-event-time';
import { createFormEventPriceTemplate } from './form-event-price/form-event-price';
import { createFormEventButtonSubmitTemplate } from './form-event-button/form-event-button-submit';
import { createFormEventButtonDeleteTemplate } from './form-event-button/form-event-button-delete';
import { createFormButtonEventOpenTemplate } from './form-event-button/form-button-open-event';

export const createFormHeaderTemplate = (
  formTypeSelect,
  pointOffers,
  statePoint,
  _,
  destinationNames
) => `<header class="event__header">

  ${createFormTypeEventTemplate(pointOffers, statePoint.point)}
  ${createFormEventDestinationTemplate(
    statePoint.point,
    statePoint.pointDestinations,
    formTypeSelect,
    destinationNames
  )}
  ${createFormEventTimeTemplate(statePoint.point)}
  ${createFormEventPriceTemplate(statePoint.point)}
  ${createFormEventButtonSubmitTemplate(statePoint)}
  ${createFormEventButtonDeleteTemplate(formTypeSelect, statePoint)}
  ${createFormButtonEventOpenTemplate()}

</header>`;
