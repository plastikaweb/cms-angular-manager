import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxInputSelectComponent } from './ngx-input-select.component';

@NgModule({
  declarations: [NgxInputSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    NgxSelectModule.forRoot({
      optionValueField: 'value',
      optionTextField: 'label',
      keepSelectedItems: true,
    }),
  ],
  exports: [NgxInputSelectComponent],
})
export class NgxInputSelectModule {}
