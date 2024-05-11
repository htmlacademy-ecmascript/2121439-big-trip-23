import AbstractView from '../../framework/view/abstract-view';
import { createRollupButton } from './create-rollup-button';
import { createEventOffers } from './create-event-offers';
import { pointTimeFormatter } from '../../utils/point-time-formatter';

const favoriteClassActive = (isFavorite) =>
  `event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}`;

const createTripListEventTemplate = (point, pointAddOffers) => {
  const { dateFrom, dateTo, type, basePrice, isFavorite } = point;

  const {
    pointDateTime,
    pointDateFromTime,
    pointDateStartTime,
    pointDateEndTime,
    startTime,
    endTime,
    timeCalculation,
  } = pointTimeFormatter(dateFrom, dateTo);

  return `
  <li class="trip-events__item">
  <div class="event">
      <time class="event__date" datetime="${pointDateTime}">${pointDateFromTime}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} Amsterdam</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${pointDateStartTime}">${startTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${pointDateEndTime}">${endTime}</time>
        </p>
        <p class="event__duration">${timeCalculation}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createEventOffers(pointAddOffers)}

      <button class="${favoriteClassActive(isFavorite)}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      ${createRollupButton()}
    </div>
    </li>`;
};

export default class TripListEventElement extends AbstractView {
  #point = [];
  #pointAddOffers = [];
  #rollupButton = null;

  constructor(point, pointAddOffers, onEditClick) {
    super();
    this.#point = point;
    this.#pointAddOffers = pointAddOffers;
    this.onEditClick = onEditClick;
    this.#rollupButton = this.element.querySelector('.event__rollup-btn');
    this.#rollupButton.addEventListener('click', this.#onClick);
  }

  #onClick(evt) {
    evt.preventDefault();
    this.onEditClick();
  }
  get template() {
    return createTripListEventTemplate(this.#point, this.#pointAddOffers);
  }
}
