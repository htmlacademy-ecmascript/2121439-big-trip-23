import { createElement } from "../render";

import { SORT_VALUES } from "../const";

const createSortValuesTemplate = () =>
  SORT_VALUES.map(
    (
      item
    ) => `<div class="trip-sort__item  trip-sort__item--${item.value.toLocaleLowerCase()}">
                <input id="sort-${item.value.toLocaleLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" item.value="sort-${item.value.toLocaleLowerCase()}"
                ${item.isChecked ? "checked" : ""}
                ${item.isDisabled ? "disabled" : ""}>
                <label class="trip-sort__btn" for="sort-${item.value.toLocaleLowerCase()}">${
      item.value
    }</label>
            </div>`
  );

const tripEventsBoardViewTemplate = () => `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      ${createSortValuesTemplate().join("")}
    </form>
`;

export default class TripFormSort {
  getTemplate() {
    return tripEventsBoardViewTemplate();
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
