import { Injectable } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { FieldConfig } from './field-config';

@Injectable({
  providedIn: 'root',
})
export class TagsFieldConfig implements FieldConfig {
  getFields(): Array<FormlyFieldConfig> {
    return [
      {
        fieldGroup: [
          {
            key: 'od',
            type: 'textarea-with-counter',
            templateOptions: {
              placeholder: 'Ojo derecho',
              required: true,
              minLength: 5,
              rows: 3,
              maxLength: 250,
              hideError: false,
              addonLeft: {
                class: 'icon-eye icon-eye-right px-4',
              },
            },
          },
          {
            key: 'oi',
            type: 'textarea-with-counter',
            templateOptions: {
              placeholder: 'Ojo izquierdo',
              required: true,
              minLength: 5,
              rows: 3,
              maxLength: 250,
              hideError: false,
              addonLeft: { class: 'icon-eye icon-eye-left px-4' },
            },
          },
          {
            key: 'ao',
            type: 'textarea-with-counter',
            templateOptions: {
              placeholder: 'Ambos ojos',
              required: true,
              minLength: 5,
              rows: 3,
              maxLength: 250,
              hideError: false,
              addonLeft: { class: 'icon-eye icon-eye-both px-4' },
            },
          },
        ],
      },
    ];
  }
}
