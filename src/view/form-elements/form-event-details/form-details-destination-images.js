const createFormDetailsDestinationImageTemplate = (images) => images.map((image) => `<img class="event__photo" src="${image.src}" alt="Event photo">`);

export const createFormDetailsDestinationImagesTemplate = (
  pointDestinationImages
) => {
  const isImagesLength =
    pointDestinationImages.length === 0
      ? '<p style="margin-left: 20px;">No images</p>'
      : createFormDetailsDestinationImageTemplate(pointDestinationImages).join(
        ''
      );
  return `<div class="event__photos-container">
  <div class="event__photos-tape">
    ${isImagesLength}
  </div>
</div>`;
};
