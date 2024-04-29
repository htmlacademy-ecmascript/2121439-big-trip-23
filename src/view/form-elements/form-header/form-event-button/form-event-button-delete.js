import { FormType } from '../../../../const';
export const createFormEventButtonDeleteTemplate = (formTypeSelect) =>
  `<button class="event__reset-btn" type="reset">${
    formTypeSelect === FormType.FORM_ADD ? 'Cancel' : 'Delete'
  }</button>`;
