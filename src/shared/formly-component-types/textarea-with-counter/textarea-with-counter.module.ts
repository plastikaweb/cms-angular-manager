import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { TextareaWithCounterComponent } from './textarea-with-counter.component';

@NgModule({
  declarations: [TextareaWithCounterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
  ],
  exports: [TextareaWithCounterComponent],
})
export class TextareaWithCounterModule {}
