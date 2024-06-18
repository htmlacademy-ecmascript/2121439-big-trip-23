export const createFormEventButtonSubmitTemplate = (statePoint) => `


  <button class="event__save-btn  btn  btn--blue" type="submit" ${
  statePoint.isDisabled ? 'disabled' : ''
}>${statePoint.isSaving ? 'Saving...' : 'Save'}</button>`;
