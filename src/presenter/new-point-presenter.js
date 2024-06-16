import { RenderPosition, remove, render } from '../framework/render';
import TripFormView from '../view/trip-form-view';
import { UserAction, UpdateType } from '../const';
import { FormType } from '../const';
import { DEFAULT_POINT } from '../const';

export default class NewPointPresenter {
  #handleDataChange = null;
  #handleDestroy = null;
  #point = DEFAULT_POINT;
  #pointsModel = null;
  #additionalOfferModel = null;
  #pointsDestinationModel = null;
  #pointEditFormComponent = null;

  constructor({
    additionalOfferModel,
    pointDestinationsModel,
    onDataChange,
    onDestroy,
  }) {
    this.#additionalOfferModel = additionalOfferModel;
    this.#pointsDestinationModel = pointDestinationsModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#point = DEFAULT_POINT;
  }

  init() {
    if (this.#pointEditFormComponent !== null) {
      return;
    }

    this.#pointEditFormComponent = new TripFormView({
      formType: FormType.FORM_ADD,
      destinations: this.#pointsDestinationModel.pointDestinations,
      pointOffers: this.#additionalOfferModel.additionalOffers,
      point: this.#point,
      allOffers: this.#additionalOfferModel.additionalOffers[0],
      onEditClick: this.#clickEditHandler,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
    });

    const newFormElement = document.querySelector('.trip-events__list');

    render(
      this.#pointEditFormComponent,
      newFormElement,
      RenderPosition.AFTERBEGIN
    );

    const buttonSave = document.querySelector('.event__save-btn');
    buttonSave.disabled = true;

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#pointEditFormComponent === null) {
      return;
    }
    this.#handleDestroy();

    remove(this.#pointEditFormComponent);
    this.#pointEditFormComponent = null;
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MINOR, point.point);
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #clickEditHandler = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
