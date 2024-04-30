import { DESTINATION_IMAGES } from '../../../mock/mocks';

const createFormDetailsDestinationImageTemplate = (images) =>
  images.map(
    (item) => `<img class="event__photo" src="${item}" alt="Event photo">`
  );
export const createFormDetailsDestinationImagesTemplate =
  () => `<div class="event__photos-container">
            <div class="event__photos-tape">
              ${createFormDetailsDestinationImageTemplate(
    DESTINATION_IMAGES
  ).join('')}
            </div>
          </div>`;
