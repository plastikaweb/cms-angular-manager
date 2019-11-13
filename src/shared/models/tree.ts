import { EntityListViewFilter } from './entity-filter-fields-types';

export type TreeListFilter = Pick<
  EntityListViewFilter,
  'field' | 'inputType' | 'evaluate'
> & {
  value: string | boolean;
};
