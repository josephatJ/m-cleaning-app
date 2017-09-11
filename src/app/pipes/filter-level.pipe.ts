import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLevel'
})
export class FilterLevelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
