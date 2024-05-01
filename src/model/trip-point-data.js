import { POINTS_DATA } from '../mock/points-data';

export default class TripPointData {
  SORTED_POINTS = POINTS_DATA.reduce((acc, point) => {
    if (!acc[point.type]) {
      acc[point.type] = [];
    }
    acc[point.type].push(point);
    return acc;
  }, {});

  getPointData() {
    return this.SORTED_POINTS;
  }
}
