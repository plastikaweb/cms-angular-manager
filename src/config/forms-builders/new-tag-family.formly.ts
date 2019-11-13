import { Injectable } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { FieldConfig } from './field-config';

@Injectable({
  providedIn: 'root',
})
export class NewTagFamilyFieldConfig implements FieldConfig {
  getFields(): Array<FormlyFieldConfig> {
    return [
      {
        className: 'block',
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: 'Añadir familia',
          required: true,
          minLength: 3,
          maxLength: 50,
          addonLeft: { class: 'zmdi zmdi-chevron-right' },
          hideError: true,
        },
        focus: true,
      },
    ];
  }
}
