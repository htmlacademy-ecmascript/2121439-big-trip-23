import { createFormButtonOffersTemplate } from './form-button-offers';
import { createFormDetailDestinationTemplate } from './form-details-destination';

export const createFormEventDetailsTemplate = (
  pointDestinations,
  pointOffers,
  point
) =>
  `<section class="event__details">

    ${createFormButtonOffersTemplate(pointOffers, point)}
    ${createFormDetailDestinationTemplate(pointDestinations, point)}
  </section>`;
