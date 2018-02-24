import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTimeFormat',
})
export class DateTimeFormatPipe implements PipeTransform {

  transform(date, format) {
    return moment(date, 'DD-MM-YYYY kk:mm:ss').format(format);
  }
}
