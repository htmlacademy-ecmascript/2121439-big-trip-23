import { DESTINATION_IMAGES } from '../../../const';
import { createElement } from '../../../render';

const createFormDetailsDestinationImageElement = (arr) => arr.map((item) => `<img class="event__photo" src="${item}" alt="Event photo">`);
const createFormDetailsDestinationImagesTemplate = () => `<div class="event__photos-container">
            <div class="event__photos-tape">
              ${createFormDetailsDestinationImageElement(
    DESTINATION_IMAGES
  ).join('')}
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
