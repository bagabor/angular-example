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

  getRowData(dates: Date[]) {

    type dataArray = Array<{ deviceId: number, dataTypeId: string, value: boolean, time: any }>;

    const arr: dataArray = [
      { deviceId: 1, dataTypeId: '0', value: true, time: '2019-02-21 15:40:11' },
      { deviceId: 1, dataTypeId: '0', value: false, time: '2019-02-21 15:50:10' },
      { deviceId: 1, dataTypeId: '0', value: false, time: '2019-02-21 18:40:00' },
      { deviceId: 1, dataTypeId: '0', value: true, time: '2019-02-21 19:30:15' },
      { deviceId: 1, dataTypeId: '0', value: true, time: '2019-02-21 20:49:11' },
      { deviceId: 1, dataTypeId: '0', value: true, time: '2019-02-22 15:40:11' },
      { deviceId: 1, dataTypeId: '0', value: false, time: '2019-02-22 15:50:10' },
      { deviceId: 1, dataTypeId: '0', value: false, time: '2019-02-22 18:40:00' },
      { deviceId: 1, dataTypeId: '0', value: true, time: '2019-02-22 19:30:15' },
      { deviceId: 1, dataTypeId: '0', value: true, time: '2019-02-22 20:49:11' },
      { deviceId: 1, dataTypeId: '1', value: true, time: '2019-02-23 15:40:11' },
      { deviceId: 1, dataTypeId: '1', value: false, time: '2019-02-23 15:50:10' },
      { deviceId: 1, dataTypeId: '1', value: false, time: '2019-02-23 18:40:00' },
      { deviceId: 1, dataTypeId: '1', value: true, time: '2019-02-23 19:30:15' },
      { deviceId: 1, dataTypeId: '1', value: true, time: '2019-02-23 20:49:11' },
      { deviceId: 2, dataTypeId: '0', value: true, time: '2019-02-24 15:40:11' },
      { deviceId: 2, dataTypeId: '0', value: false, time: '2019-02-24 15:50:10' },
      { deviceId: 2, dataTypeId: '0', value: false, time: '2019-02-24 18:40:00' },
      { deviceId: 2, dataTypeId: '0', value: true, time: '2019-02-24 19:30:15' },
      { deviceId: 2, dataTypeId: '0', value: true, time: '2019-02-24 20:49:11' }
    ];

    return arr;
  }

}
