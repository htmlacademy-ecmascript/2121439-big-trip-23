import { createFormDetailsDestinationImagesTemplate } from './form-details-destination-images';
import { FormType } from '../../../const';

export const createFormDetailDestinationTemplate = (
  formTypeSelect,
  pointDestinations
) => {
  const getRenderByFormType = () =>
    `${
      formTypeSelect === FormType.FORM_ADD
        ? createFormDetailsDestinationImagesTemplate(pointDestinations[1])
        : ''
    }`;

  return `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${
  pointDestinations[1].description
}</p>

    ${getRenderByFormType()}

  </section>
`;
};
