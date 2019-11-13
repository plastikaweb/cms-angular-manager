# Feature configuration

## Introduction

We want to isolate in some concrete files the fixed configurations related to a feature and loaded as needed on lazy loading those feature modules.

## Interfaces

The main configuration for a feature implements the `PageConfigItems` interface and it is served to the current feature [sandbox](../architecture/high-level-architecture#presentation-layer-decoupled-from-the-central-layer) via `app/root/services/page-factory/page-factory.service.ts`.

```typescript
export interface PageConfigItems {
  text?: PageTexts;
  buttons?: { [view in PageType]?: ButtonsGroupConfig };
  tree?: ITreeOptions;
  filter?: Array<EntityListViewFilter>;
  fields?: FieldConfigType;
}
```

### Child models

- **Text**: Defines the header text, the secondary text and other texts for any feature page.
- **Buttons**: Defines buttons configurations for forms or other possible buttons uses for any feature page.
- **Tree**: Defines options for [Angular Tree Component](https://github.com/500tech/angular-tree-component) for a given feature page.
- **Filter**: Defines configuration for filtering data for a feature page.
- **Fields**: Defines configuration for [ngx-formly](https://ngx-formly.github.io/ngx-formly/) fields, for any uses of forms for a given feature page.

```typescript
// TEXT
export interface PageTexts {
  header: string;
  title?: string;
  listTitle?: string;
  editTitle?: string;
  createTitle?: string;
}

// BUTTONS
export type ButtonsGroupLayout = 'column' | 'row';

export interface ButtonsGroupConfig {
  layout?: ButtonsGroupLayout | string;
  showLabel?: boolean;
  showIcon?: boolean;
  alwaysVisible?: boolean;
  pristineVisible?: boolean;
  extraClasses?: string;
}

export interface ButtonsGroupBuilder {
  getButtons(): Observable<ButtonsGroupConfig> | ButtonsGroupConfig;
}

// TREE
// uses angular tree component https://github.com/500tech/angular-tree-component
import { ITreeOptions } from 'angular-tree-component';

// FILTER
export type EntityListViewFilterInputTypes = 'text' | 'select';

export interface EntityListViewFilter {
  field: string;
  name: string;
  items?: Array<{ label: string; value: any }>;
  inputType: EntityListViewFilterInputTypes;
  exactValue: boolean;
}

export interface EntityListViewFilterValue {
  value: any;
  exactValue: boolean;
}

export interface EntityListViewFilterApplied {
  [field: string]: EntityListViewFilterValue;
}

// FIELDS
export type FieldConfigType =
  | Observable<Array<FormlyFieldConfig>>
  | Array<FormlyFieldConfig>
  | Observable<{ [view in PageType]?: Array<FormlyFieldConfig> }>
  | { [view in PageType]?: Array<FormlyFieldConfig> };

export interface FieldConfig {
  getFields(): Observable<Array<FormlyFieldConfig>> | Array<FormlyFieldConfig>;
}
```

## Use

Just creating the configuration files for a new feature and setting it on the `page factory service` the configuration will be used on loading the related feature module.

> **Important!**: The related segment page must exist on the [global assets/config.json file, under pages node](<(global-configuration#description)>).

```typescript
// app/root/services/page-factory/page-factory.service.ts

private getPageConfig(page: string): any {
    const { pages } = ConfigService.settings;

    switch (page) {
      case pages.home.segment: {
        return HomeConfig;
      }
      case pages.rooms.segment: {
        return RoomsConfig;
      }
      case pages.tags.segment: {
        return TagsConfig;
      }
      case pages.tagFamilies.segment: {
        return TagFamiliesConfig;
      }
      // new feature
      case pages.newFeature.segment: {
        return NewFeatureConfig;
      }
    }
    return null;
  }
```
