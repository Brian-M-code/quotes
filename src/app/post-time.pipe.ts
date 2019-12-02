import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postTime'
})
export class PostTimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
