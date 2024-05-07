import { createFormButtonOffersTemplate } from './form-button-offers';
import { createFormDetailDestinationTemplate } from './form-details-destination';

export const createFormEventDetailsTemplate = (
  formTypeSelect,
  pointDestinations,
  pointOffers
) =>
  `<section class="event__details">
    ${createFormButtonOffersTemplate(pointOffers)}
    ${createFormDetailDestinationTemplate(formTypeSelect, pointDestinations)}
  </section>`;
