import { Pipe, PipeTransform } from '@angular/core';
import { Owner } from '../models/owner.model';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: Owner , ...args: unknown[]): unknown{
  value.cnp = "+4" + value.cnp;
  const firstPhase = value.cnp.slice(0, 3); // +40
  const secondPhase = value.cnp.slice(3, 6) // 758
  const thirdPhase = value.cnp.slice(6, 9) // 570
  const lastPhase = value.cnp.slice (9, 12) // 776

  return `${firstPhase} ${secondPhase}-${thirdPhase}-${lastPhase}`;
  }
}

  //   var roPhoneRegex = new RegExp('^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$');
  //   if (!(value.cnp?.match(roPhoneRegex))) {
  //     alert('Only digits are allowed!');
  //     return 0;
  // }
