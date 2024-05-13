import { createFormTypeEventTemplate } from './form-type/form-type-event-view';
import { createFormEventDestinationTemplate } from './form-event-destination/form-event-destination';
import { createFormEventTimeTemplate } from './form-event-time/form-event-time';
import { createFormEventPriceTemplate } from './form-event-price/form-event-price';
import { createFormEventButtonSubmitTemplate } from './form-event-button/form-event-button-submit';
import { createFormEventButtonDeleteTemplate } from './form-event-button/form-event-button-delete';
import { createFormButtonEventOpenTemplate } from './form-event-button/form-button-open-event';
import { FormType } from '../../../const';

const getRenderByFormType = (formType) =>
  `${
    formType === FormType.FORM_ADD ? '' : createFormButtonEventOpenTemplate()
  }`;

export const createFormHeaderTemplate = (
  formTypeSelect,
  pointOffers,
  point
) => `<header class="event__header">
  ${createFormTypeEventTemplate(point, pointOffers)}
  ${createFormEventDestinationTemplate(point)}
  ${createFormEventTimeTemplate()}
  ${createFormEventPriceTemplate(point.basePrice)}
  ${createFormEventButtonSubmitTemplate()}
  ${createFormEventButtonDeleteTemplate(formTypeSelect)}
  ${getRenderByFormType()}

</header>`;
