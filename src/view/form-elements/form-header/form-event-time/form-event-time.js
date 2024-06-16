import { dateConversion } from '../../../../utils/point-time-formatter';
import { FormatTime } from '../../../../const';

export const createFormEventTimeTemplate = (point) => `<div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateConversion(
    point.dateFrom,
    FormatTime.DATE_FORM_EDIT
  )}">
    —
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateConversion(
    point.dateTo,
    FormatTime.DATE_FORM_EDIT
  )}">
  </div>`;
