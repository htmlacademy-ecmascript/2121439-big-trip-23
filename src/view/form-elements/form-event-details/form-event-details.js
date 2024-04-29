import { createFormButtonOffersTemplate } from './form-button-offers';
import { createFormDetailDestinationTemplate } from './form-details-destination';

export const createFormEventDetailsTemplate = (formTypeSelect) =>
  `<section class="event__details">
    ${createFormButtonOffersTemplate()}
    ${createFormDetailDestinationTemplate(formTypeSelect)}
  </section>`;
