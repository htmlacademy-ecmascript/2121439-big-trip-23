import { createElement } from '../../render';
import { createEventOffers } from './create-event-offers';
import { MILLISECONDS, MINUTES } from '../../const';

let pointDateFromTime = '';
let pointDateTime = '';
let pointDateStartTime = '';
let pointDateEndTime = '';
let startTime = '';
let endTime = '';
let timeCalculation = '';

const createTripListEventTemplate = (points, pointOffers) => {
  const favoriteClassActive = (isFavorite) =>
    `event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}`;

  const findOfferTypePoint = (pointOfferId) => pointOfferId;

  const formattingDatePoint = (pointDateFrom, pointDateTo) => {
    const date = new Date(pointDateFrom);
    const dateTo = new Date(pointDateTo);
    const fullYear = date.getFullYear();
    const days = date.getDate();

    const month = date.getMonth() + 1;
    const monthName = date
      .toLocaleString('EN-en', { month: 'long' })
      .substring(0, 3)
      .toUpperCase();

    const timeToMilliseconds = Math.abs(date - dateTo);

    pointDateFromTime = `${monthName} ${days} `;
    pointDateTime = `${fullYear}-${month}-${days}`;
    pointDateStartTime = `${date
      .toISOString()
      .slice(0, 16)
      .split('-')
      .join('-')}`;
    pointDateEndTime = `${dateTo
      .toISOString()
      .slice(0, 16)
      .split('-')
      .join('-')}`;
    startTime = `${date.toISOString().slice(11, -8).split('-').join('-')}`;
    endTime = `${dateTo.toISOString().slice(11, -8).split('-').join('-')}`;

    if (Math.floor(timeToMilliseconds / MILLISECONDS) >= MINUTES) {
      return (timeCalculation = `${Math.floor(
        timeToMilliseconds / MILLISECONDS / MINUTES
      )}H`);
    } else {
      return (timeCalculation = `${Math.floor(
        timeToMilliseconds / MILLISECONDS
      )}M`);
    }
  };

  return points
    .map((point) => {
      formattingDatePoint(point.dateFrom, point.dateTo);
      return `<div class="event">
        <time class="event__date" datetime="${pointDateTime}">${pointDateFromTime}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${point.type} Amsterdam</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${pointDateStartTime}">${startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${pointDateEndTime}">${endTime}</time>
          </p>
          <p class="event__duration">${timeCalculation}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        ${createEventOffers(findOfferTypePoint(point.offers), pointOffers)}

        <button class="${favoriteClassActive(point.isFavorite)}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>`;
    })
    .join('');
};

export default class TripListEventElement {
  constructor(points, pointOffers) {
    this.points = points;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return createTripListEventTemplate(this.points, this.pointOffers);
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
