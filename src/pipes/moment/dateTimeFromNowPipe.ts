import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DateTime } from 'ionic-angular';

@Pipe({
  name: 'dateTimeFromNow',
})
  
export class DateTimeFromNowPipe implements PipeTransform {
  transform(date) {
    return moment(date, 'DD-MM-YYYY kk:mm:ss').calendar(null, {
      sameDay: '[Today] [from] LT',
      nextDay: '[Tomorrow] [from] LT',
      nextWeek: '[Next Week] dddd [from] LT',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
  });
  }
}


