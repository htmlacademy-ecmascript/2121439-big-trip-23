import { nameCitiesDestination } from '../../../../mock/points-data';

let inputValue = '';

const createNameCitiesDestination = () =>
  nameCitiesDestination.map(
    (nameCities) => `<option value="${nameCities}"></option>`
  );

const getValueDestination = (destination, point) => {
  Object.values(destination).map((item) => {
    if (item.id === point.destination) {
      inputValue = item.name;
    }
  });
};

export const createFormEventDestinationTemplate = (
  point,
  pointDestinations
) => {
  getValueDestination(pointDestinations, point);
  return `<div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-1">
    ${point.type}
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${inputValue}" list="destination-list-1">
  <datalist id="destination-list-1">
  ${createNameCitiesDestination().join('')}
  </datalist>
</div>`;
};
