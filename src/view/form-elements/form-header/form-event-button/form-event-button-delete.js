import { FormType } from '../../../../const';
export const createFormEventButtonDeleteTemplate = (
  formTypeSelect,
  statePoint
) => {
  const getRenderByFormType = () =>
    `${
      formTypeSelect === FormType.FORM_ADD
        ? 'Cancel'
        : `${statePoint.isDeleting ? 'Deleting...' : 'Delete'}`
    }`;

  return `<button class="event__reset-btn" type="reset">${getRenderByFormType()}</button>`;
};
