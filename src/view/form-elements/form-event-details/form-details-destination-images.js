import { DESTINATION_IMAGES } from "../../../mokky/mokky";
import { createElement } from "../../../render";

const createFormDetailsDestinationImageTemplate = (images) =>
  images.map(
    (item) => `<img class="event__photo" src="${item}" alt="Event photo">`
  );
const createFormDetailsDestinationImagesTemplate =
  () => `<div class="event__photos-container">
            <div class="event__photos-tape">
              ${createFormDetailsDestinationImageTemplate(
                DESTINATION_IMAGES
              ).join("")}
            </div>
          </div>`;

export default class FormDetailsDestinationImages {
  getTemplate() {
    return createFormDetailsDestinationImagesTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
