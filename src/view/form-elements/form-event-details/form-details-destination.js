import { createFormDetailsDestinationImagesTemplate } from './form-details-destination-images';

export const createFormDetailDestinationTemplate = (
  pointDestinations,
  point
) => {
  const destination = Object.values(pointDestinations).find((destinationId) => destinationId.id === point.destination);

  const isDescription =
    destination.description === '' ? 'No description' : destination.description;

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${isDescription}</p>

    ${createFormDetailsDestinationImagesTemplate(destination.pictures)}

  </section>
`;
};
