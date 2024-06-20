import AbstractView from '../framework/view/abstract-view';
import { FilterMessage } from '../const';

const createEventListEmptyTemplate = (message, filterType) => {
  const filterMessage = FilterMessage[filterType];
  return `<p class="trip-events__msg">${message || filterMessage}</p>`;
};

export default class TripPointEmptyView extends AbstractView {
  #message = null;
  #filterType = null;

  constructor({ message, filterType }) {
    super();
    this.#message = message;
    this.#filterType = filterType;
  }

  get template() {
    return createEventListEmptyTemplate(this.#message, this.#filterType);
  }
}
