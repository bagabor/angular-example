import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getValuesWithRange(rangeDates: Date[]) {
    let map = new Map();

    if (rangeDates[1] === null) {
      const day = moment(rangeDates[0]);
      map.set(day.format('YYYY-MM-DD'), Math.floor((Math.random() * 100) + 1));
      return map;
    }

    const startDate = moment(rangeDates[0]).startOf('day');
    const endDate = moment(rangeDates[1]).startOf('day');
    const numberOfDays = endDate.diff(startDate, 'days') + 1;

    for (let i = 0; i < numberOfDays; i++) {
      const day = moment(startDate).add(i, 'days');
      map.set(day.format('YYYY-MM-DD'), Math.floor((Math.random() * 100) + 1));
    }
    return map;
  }
  
  getValuesForDates(dates: Date[]) {
    let map = new Map();
    for (let i = 0; i < dates.length; i++) {
      const day = moment(dates[i]).format('YYYY-MM-DD');
      map.set(day, Math.floor((Math.random() * 100) + 1));
    }
    return map;
  }
}
