import { Pipe, PipeTransform } from '@angular/core';
import { Owner } from '../models/owner.model';

@Pipe({
  name: 'myFirstPipe'
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value: Owner, ...args: unknown[]): string {
    // const formattedString = value.firstName + '-' + value.firstName;
      return `${value.firstName}-${value.lastName}`
  }

}
