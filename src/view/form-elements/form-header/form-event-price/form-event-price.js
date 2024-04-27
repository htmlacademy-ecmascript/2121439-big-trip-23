import { createElement } from '../../../../render';

const createFormEventPriceElement = () => `<div class="event__field-group  event__field-group--price">
  <label class="event__label" for="event-price-1">
    <span class="visually-hidden">Price</span>
    €
  </label>
  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
</div>`;
export default class FormEventPrice {
  getTemplate() {
    return createFormEventPriceElement();
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
