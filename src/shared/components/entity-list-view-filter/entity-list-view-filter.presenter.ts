import { EntityListViewFilter, EntityListViewFilterApplied } from '@shared/models';

import { omit } from 'lodash';
import { Observable, of } from 'rxjs';

export class EntityListViewFilterPresenter {
  filters: EntityListViewFilterApplied = {};

  updateFilters(
    filter: EntityListViewFilter,
    value: string | Array<any>
  ): Observable<EntityListViewFilterApplied> {
    const { field, exactValue } = filter;
    if (!value && this.filters && this.filters[field]) {
      this.filters = omit({ ...this.filters }, [field]);
    } else {
      this.filters = omit({
        ...this.filters,
        [field]: { value, exactValue },
      });
    }
    return of(this.filters);
  }
}
