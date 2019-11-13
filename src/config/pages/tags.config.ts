import { FieldConfigType } from '@config/forms-builders';
import { TagsFieldConfig } from '@config/forms-builders/tags.formly';
import { ButtonsGroupConfig, EntityListViewFilter, PageConfig, PageTexts } from '@shared/models';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Observable } from 'rxjs';

export class TagsConfig implements PageConfig {
  private getText(): PageTexts {
    return {
      header: '<i class="zmdi zmdi-tag"></i> Etiquetas',
      listTitle: 'Listado de etiquetas',
      editTitle: 'Edición de etiqueta: ',
      createTitle: 'Creación de nueva etiqueta a partir de familia: ',
    };
  }

  private getButtons(): ButtonsGroupConfig {
    return {
      alwaysVisible: false,
      pristineVisible: false,
      layout: 'row',
      showIcon: true,
      showLabel: true,
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
    ];
  }

  private getFields(): Array<FormlyFieldConfig> {
    return new TagsFieldConfig().getFields();
  }

  getConfig() {
    return {
      text: this.getText(),
      buttons: { default: this.getButtons() },
      filter: this.getFilter(),
      fields: this.getFields(),
    };
  }
}
