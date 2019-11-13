import { FieldConfigType } from '@config/forms-builders';
import { ButtonsGroupConfig, EntityListViewFilter, PageTexts } from '@shared/models';

import { ITreeOptions } from 'angular-tree-component';

export type PageType = 'default' | 'list' | 'create' | 'update';

export interface PageConfigItems {
  text?: PageTexts;
  buttons?: { [view in PageType]?: ButtonsGroupConfig };
  tree?: ITreeOptions;
  filter?: Array<EntityListViewFilter>;
  fields?: FieldConfigType;
}

export interface PageConfig {
  getConfig(): PageConfigItems;
}
