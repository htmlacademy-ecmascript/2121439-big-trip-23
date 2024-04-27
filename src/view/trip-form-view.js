import { createElement } from '../render';

const createTripFormTemplate = () => `
        <form class="event event--edit" action="#" method="post">

        </form>
`;

export default class TripFormView {
  getTemplate() {
    return createTripFormTemplate();
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
