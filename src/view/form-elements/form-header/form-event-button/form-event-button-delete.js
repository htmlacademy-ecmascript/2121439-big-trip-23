import { FormType } from '../../../../const';
export const createFormEventButtonDeleteTemplate = (formTypeSelect) => {
  const getRenderByFormType = () => `${formTypeSelect === FormType.FORM_ADD ? 'Cancel' : 'Delete'}`;

  return `<button class="event__reset-btn" type="reset">${getRenderByFormType()}</button>`;
};
