import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../const';

const createSortValuesTemplate = ({ currentSortType }) => Object.values(SortType).map(
  (item) => `<div class="trip-sort__item  trip-sort__item--${item}">
                <input id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}"
                data-sort-type=${item} ${
  item === currentSortType ? 'checked' : ''
} ${item === SortType.EVENT || item === SortType.OFFERS ? 'disabled' : ''}>
                <label class="trip-sort__btn" for="sort-${item}">${item}</label>
            </div>`
);
const tripEventsBoardViewTemplate = ({ currentSortType }) => `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      ${createSortValuesTemplate({ currentSortType }).join('')}
    </form>
`;

export default class TripFormSortView extends AbstractView {
  #handleSortTypeChange = null;
  #activeSortType = null;
  constructor({ currentSortType, onSortTypeChange }) {
    super();
    this.#activeSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return tripEventsBoardViewTemplate({
      currentSortType: this.#activeSortType,
    });
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
