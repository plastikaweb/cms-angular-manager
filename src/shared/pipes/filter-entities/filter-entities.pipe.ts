import { Pipe, PipeTransform } from '@angular/core';
import { EntityListViewFilterApplied } from '@shared/models';

import { isString } from 'lodash';

@Pipe({ name: 'filterEntities' })
export class FilterEntitiesPipe implements PipeTransform {
  transform(entities: any[], filters?: EntityListViewFilterApplied): any {
    if (!entities || !Array.isArray(entities)) {
      throw new Error('Requires an Array as input');
    }
    if (!filters) {
      return entities;
    }
    return this.doFilter(entities, filters);
  }

  doFilter(entities: Array<any>, filters: EntityListViewFilterApplied) {
    return entities.filter(entity =>
      Object.keys(filters).reduce((isValid, key) => {
        const { value: keyValue, exactValue } = filters[key];
        let entityPropValue = entity[key];
        let keyPropValue = keyValue;
        if (isString(entityPropValue)) {
          entityPropValue = entityPropValue.toLowerCase();
          keyPropValue = keyValue.toLowerCase();
        }

        return exactValue
          ? isValid && entityPropValue === keyPropValue
          : isValid && entityPropValue.indexOf(keyValue.toLowerCase()) !== -1;
      }, true)
    );
  }
}
