import { NgModule } from '@angular/core';

import { NgxInputSelectModule } from './ngx-input-select/ngx-input-select.module';

import { TextareaWithCounterModule } from './textarea-with-counter/textarea-with-counter.module';

@NgModule({
  imports: [NgxInputSelectModule, TextareaWithCounterModule],
  exports: [NgxInputSelectModule, TextareaWithCounterModule],
})
export class FormlyTypesModule {}
