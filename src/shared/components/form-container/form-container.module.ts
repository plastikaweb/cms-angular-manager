import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { showValidationError } from '@config/forms-builders';
import validationMessages from '@config/forms-builders/formly-validation-messages';
import {
    NgxInputSelectComponent, TextareaWithCounterComponent
} from '@shared/formly-component-types';
import { FormlyTypesModule } from '@shared/formly-component-types/formly-types.module';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyTypesModule,
    FormlyModule.forChild({
      extras: {
        immutable: true,
        showError: showValidationError,
      },
      validationMessages,
      types: [
        {
          name: 'ngx-input-select',
          component: NgxInputSelectComponent,
        },
        {
          name: 'textarea-with-counter',
          component: TextareaWithCounterComponent,
        },
      ],
    }),
    FormlyBootstrapModule,
  ],
  exports: [FormContainerComponent],
})
export class FormContainerModule {}
