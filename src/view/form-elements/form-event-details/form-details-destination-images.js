const createFormDetailsDestinationImageTemplate = (images) => images.pictures.map((image) => `<img class="event__photo" src="${image.src}" alt="Event photo">`);

export const createFormDetailsDestinationImagesTemplate = (
  pointDestinationImages
) => `<div class="event__photos-container">
  <div class="event__photos-tape">

    ${createFormDetailsDestinationImageTemplate(pointDestinationImages).join(
    ''
  )}
  </div>
</div>`;
