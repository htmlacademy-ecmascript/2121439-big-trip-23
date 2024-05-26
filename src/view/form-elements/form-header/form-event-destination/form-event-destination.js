import { nameCitiesDestination } from '../../../../mock/points-data';

const createNameCitiesDestination = () =>
  nameCitiesDestination.map(
    (nameCities) => `<option value="${nameCities}"></option>`
  );

export const createFormEventDestinationTemplate = (
  point,
  pointDestinations
) => `<div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-1">
    ${point.type}
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${
  pointDestinations[2].name
}" list="destination-list-1">
  <datalist id="destination-list-1">
  ${createNameCitiesDestination().join('')}
  </datalist>
</div>`;
