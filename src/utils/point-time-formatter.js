import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { Milliseconds, FormatTime } from '../const';

dayjs.extend(duration);

const dateConversion = (date, formatDate) =>
  date ? dayjs(date).format(formatDate) : '';

const getCorrectDateFormat = (dateFrom, dateTo) => {
  const pointDuration = dayjs(dateTo).diff(dateFrom);
  if (pointDuration < Milliseconds.HOUR) {
    return dayjs(pointDuration).format(FormatTime.MINUTES);
  }
  if (pointDuration >= Milliseconds.HOUR && pointDuration < Milliseconds.DAY) {
    return dayjs(pointDuration).format(FormatTime.DAY);
  }
  if (pointDuration >= Milliseconds.DAY) {
    return dayjs(pointDuration).format(FormatTime.DAYS);
  }
};
export { dateConversion, getCorrectDateFormat };
