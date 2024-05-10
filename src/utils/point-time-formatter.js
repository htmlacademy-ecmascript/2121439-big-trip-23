import { MILLISECONDS, MINUTES } from '../const';

export const pointTimeFormatter = (pointDateFrom, pointDateTo) => {
  const date = new Date(pointDateFrom);
  const dateTo = new Date(pointDateTo);
  const fullYear = date.getFullYear();
  const days = date.getDate();

  const month = date.getMonth() + 1;
  const monthName = date
    .toLocaleString('EN-en', { month: 'long' })
    .substring(0, 3)
    .toUpperCase();

  const timeToMilliseconds = Math.abs(date - dateTo);
  let timeCalculation = '';
  const pointDateFromTime = `${monthName} ${days} `;
  const pointDateTime = `${fullYear}-${month}-${days}`;
  const pointDateStartTime = `${date
    .toISOString()
    .slice(0, 16)
    .split('-')
    .join('-')}`;
  const pointDateEndTime = `${dateTo
    .toISOString()
    .slice(0, 16)
    .split('-')
    .join('-')}`;
  const startTime = `${date.toISOString().slice(11, -8).split('-').join('-')}`;
  const endTime = `${dateTo.toISOString().slice(11, -8).split('-').join('-')}`;

  if (Math.floor(timeToMilliseconds / MILLISECONDS) >= MINUTES) {
    const calculationHours = Math.floor(
      timeToMilliseconds / MILLISECONDS / MINUTES
    );

    timeCalculation = `${calculationHours}H`;
  } else {
    timeCalculation = `${Math.floor(timeToMilliseconds / MILLISECONDS)}M`;
  }

  return {
    pointDateFromTime,
    pointDateTime,
    pointDateStartTime,
    pointDateEndTime,
    startTime,
    endTime,
    timeCalculation,
  };
};
