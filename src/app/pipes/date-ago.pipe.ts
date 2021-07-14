import { Pipe, PipeTransform } from '@angular/core';
import { DAYS_AGO, TODAY } from '../constants/statics/statics';

@Pipe({
  name: 'dateAgo',
  pure: true,
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date();
      const firstDate = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      );

      const nextDate = new Date(value);
      const secondDate = new Date(
        nextDate.getFullYear(),
        nextDate.getMonth() + 1,
        nextDate.getDate()
      );
      const diffDays = Math.round(
        Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
      );
      if (diffDays === 0) {
        return TODAY;
      } else {
        return `${diffDays}${DAYS_AGO}`;
      }
    }
    return value;
  }
}
