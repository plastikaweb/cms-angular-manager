import { PageType } from '@shared/models';

import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

import { Observable } from 'rxjs';

export type FieldConfigType =
  | Observable<Array<FormlyFieldConfig>>
  | Array<FormlyFieldConfig>
  | Observable<{ [view in PageType]?: Array<FormlyFieldConfig> }>
  | { [view in PageType]?: Array<FormlyFieldConfig> };

export interface FieldConfig {
  getFields(): Observable<Array<FormlyFieldConfig>> | Array<FormlyFieldConfig>;
}

export function showValidationError(field: FieldType) {
  return (
    field.formControl &&
    field.formControl.invalid &&
    !field.field.templateOptions.hideError &&
    (field.formControl.dirty ||
      (field.options.parentForm && field.options.parentForm.submitted) ||
      (field.field.validation && field.field.validation.show))
  );
}
