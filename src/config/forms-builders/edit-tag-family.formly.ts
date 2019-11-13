import { Injectable } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { FieldConfig } from './field-config';

@Injectable({
  providedIn: 'root',
})
export class EditTagFamilyFieldConfig implements FieldConfig {
  getFields(): Array<FormlyFieldConfig> {
    return [
      {
        className: 'block',
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          placeholder: 'Editar familia',
          required: true,
          minLength: 3,
          maxLength: 50,
          hideError: true,
        },
        focus: true,
      },
    ];
  }
}
