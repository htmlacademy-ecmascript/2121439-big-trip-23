import { FormType } from '../../../../const';
import he from 'he';

let inputValue = '';

const createNameCitiesDestination = (destinations) =>
  destinations.map((item) => `<option value="${item}"></option>`);

const getValueDestination = (destination, point) => {
  Object.values(destination).map((item) => {
    if (item.id === point.destination) {
      inputValue = item.name;
    }
  });
};

const selectDestination = (formTypeSelect) => {
  if (formTypeSelect === FormType.FORM_ADD) {
    inputValue = 'Please select destination';
  }
};

export const createFormEventDestinationTemplate = (
  point,
  pointDestinations,
  formTypeSelect,
  destinationNames
) => {
  selectDestination(formTypeSelect);
  getValueDestination(pointDestinations, point);

  return `<div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-1">
    ${point.type}
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${he.encode(
    inputValue
  )}" list="destination-list-1">
  <datalist id="destination-list-1">
  ${createNameCitiesDestination(destinationNames).join('')}
  </datalist>
</div>`;
};
