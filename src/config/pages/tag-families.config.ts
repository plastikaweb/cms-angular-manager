import {
    EditTagFamilyFieldConfig, FieldConfigType, NewTagFamilyFieldConfig
} from '@config/forms-builders';
import { ButtonsGroupConfig, EntityListViewFilter, PageConfig } from '@shared/models';
import { ErrorUtils } from '@shared/utils';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { ITreeOptions } from 'angular-tree-component';

export class TagFamiliesConfig implements PageConfig {
  private getText() {
    return {
      header: '<i class="zmdi zmdi-tag"></i> Etiquetas',
      listTitle: 'Listado de familias',
    };
  }

  private getButtons(): ButtonsGroupConfig {
    return {
      alwaysVisible: false,
      pristineVisible: false,
      layout: 'row',
      showIcon: true,
      showLabel: false,
    };
  }

  private getTree(): ITreeOptions {
    return {
      allowDrag: true,
      allowDrop: ({ parent: elementParent }, { parent: toParent }) =>
        false || elementParent.id === toParent.id,
    };
  }

  private getFilter(): Array<EntityListViewFilter> {
    return [
      {
        field: 'name',
        name: 'nombre',
        inputType: 'text',
        exactValue: false,
      },
      {
        field: 'pending',
        name: 'pending',
        inputType: 'boolean',
        exactValue: true,
        evaluate: (value, node) =>
          !value ? true : !node.tagId && !node.children.length === value,
      },
    ];
  }

  private getFields(view: 'create' | 'update'): Array<FormlyFieldConfig> {
    switch (view) {
      case 'create':
        return new NewTagFamilyFieldConfig().getFields();
      case 'update':
        return new EditTagFamilyFieldConfig().getFields();
    }
    return ErrorUtils.unreachable(view);
  }

  getConfig() {
    return {
      text: this.getText(),
      buttons: { list: this.getButtons() },
      tree: this.getTree(),
      filter: this.getFilter(),
      fields: {
        create: this.getFields('create'),
        update: this.getFields('update'),
      },
    };
  }
}
