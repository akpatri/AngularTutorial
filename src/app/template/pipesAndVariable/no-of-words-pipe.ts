import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noOfWords',
})
export class NoOfWordsPipe implements PipeTransform {
  transform(value: string, delimiter: string=' '): number {
    return value.split(delimiter).length;
  }
}
