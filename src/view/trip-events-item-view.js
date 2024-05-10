import AbstractView from '../framework/view/abstract-view';

const createTripEventsItemTemplate = (
  contentElement
) => `<li class="trip-events__item">
          ${contentElement}
    </li>`;

export default class TripEventsItemView extends AbstractView {
  constructor(contentElement) {
    super();
    this.contentElement = contentElement;
  }

  get template() {
    return createTripEventsItemTemplate(this.contentElement);
  }
}
