import Observable from '../framework/observable';
import { FilterType } from '../const';

export default class FilterModel extends Observable {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updatePoint, filter) {
    this.#filter = filter;
    this._notify(updatePoint, filter);
  }
}
