import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brDate',
})

export class BrDatePipe implements PipeTransform {
  transform(value: any): any {
    const regex = /(\d{4})-(\d{2})-(\d{2})/

    const match = value.match(regex)
    if (!match) {
      return value;
    }

    const [_, year, month, day] = match
    return `${day}/${month}/${year}`
  }
}
