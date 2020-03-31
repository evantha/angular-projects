import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, maxNumber = 50, appender = '...'): unknown {
    if (value && value.length > maxNumber) {
      value = value.slice(0, maxNumber) + appender;
    }
    return value;
  }

}
