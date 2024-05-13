import { createFormButtonOffersTemplate } from './form-button-offers';
import { createFormDetailDestinationTemplate } from './form-details-destination';

export const createFormEventDetailsTemplate = (
  pointDestinations,
  allOffers,
  point
) =>
  `<section class="event__details">
    ${createFormButtonOffersTemplate(allOffers, point)}
    ${createFormDetailDestinationTemplate(pointDestinations, point)}
  </section>`;
