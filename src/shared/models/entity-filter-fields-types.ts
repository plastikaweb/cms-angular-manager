export type EntityListViewFilterInputTypes = 'text' | 'select' | 'boolean';

export interface EntityListViewFilter {
  field: string;
  name: string;
  items?: Array<{ label: string; value: any }>;
  inputType: EntityListViewFilterInputTypes;
  exactValue: boolean;
  evaluate?(value: boolean, item: any): boolean;
}

export interface EntityListViewFilterValue {
  value: any;
  exactValue: boolean;
}

export interface EntityListViewFilterApplied {
  [field: string]: EntityListViewFilterValue;
}
