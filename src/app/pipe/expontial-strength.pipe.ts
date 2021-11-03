import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expontialStrength'
})
export class ExpontialStrengthPipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }

}
