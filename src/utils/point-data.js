export const updatePoint = (points, update) =>
  points.map((point) => (point.id === update.id ? update : point));

export const pointDataUpdate = (item, prop) => ({ ...item, ...prop });
