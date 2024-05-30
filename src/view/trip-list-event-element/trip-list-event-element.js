import AbstractStatefulView from '../../framework/view/abstract-view';
import { createRollupButton } from './create-rollup-button';
import { createEventOffers } from './create-event-offers';
import { FormatTime } from '../../const';
import {
  getCorrectDateFormat,
  dateConversion,
} from '../../utils/point-time-formatter';
let pointDestinationTitle = '';

const favoriteClassActive = (isFavorite) =>
  `event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}`;

const getPointDestinationTitle = ({ destinations, pointDestinationId }) => {
  destinations.find((item) => {
    if (item.id === pointDestinationId) {
      pointDestinationTitle = item.name;
    }
  });
};

const createTripListEventTemplate = (
  point,
  pointAddOffers,
  pointDestinations
) => {
  const { dateFrom, dateTo, type, basePrice, isFavorite, destination } = point;
  getPointDestinationTitle({
    destinations: pointDestinations,
    pointDestinationId: destination,
  });

  return `
  <li class="trip-events__item">
  <div class="event">
      <time class="event__date" datetime="${dateFrom}">${dateConversion(
  dateFrom,
  FormatTime.DATE_FROM
)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${pointDestinationTitle}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${dateConversion(
  dateFrom,
  FormatTime.START_AND_END_TIMES
)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${dateConversion(
  dateTo,
  FormatTime.START_AND_END_TIMES
)}</time>
        </p>
        <p class="event__duration">${getCorrectDateFormat(dateFrom, dateTo)}</p>
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

export default class TripListEventElement extends AbstractStatefulView {
  #point = [];
  #pointAdditionalOffers = [];
  #pointDestinations = [];
  #rollupButton = null;
  #handleClick = null;
  #handleClickFavorite = null;
  #buttonFavorite = null;

  constructor({
    point,
    pointAdditionalOffers,
    pointDestinations,
    onEditClick,
    onFavoriteClick,
  }) {
    super();
    this.#point = point;
    this.#pointAdditionalOffers = pointAdditionalOffers;
    this.#pointDestinations = pointDestinations;
    this.#handleClick = onEditClick;
    this.#handleClickFavorite = onFavoriteClick;

    this.#rollupButton = this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onClick);
    this.#buttonFavorite = this.element
      .querySelector('.event__favorite-btn')
      .addEventListener('click', this.#onClickFavoriteHandler);
  }

  #onClickFavoriteHandler = (evt) => {
    evt.preventDefault();
    this.#handleClickFavorite();
  };

  #onClick = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };

  get template() {
    return createTripListEventTemplate(
      this.#point,
      this.#pointAdditionalOffers,
      this.#pointDestinations
    );
  }
}
