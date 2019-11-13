import { Pipe, PipeTransform } from '@angular/core';
import { ObjectUtils } from '@shared/utils';

@Pipe({ name: 'getKeys' })
export class GetKeysPipe implements PipeTransform {
  transform(object: any): any {
    if (!ObjectUtils.checkIsObject(object)) {
      throw new Error('Requires an Object as input');
    }
    return Object.keys(object);
  }
}
