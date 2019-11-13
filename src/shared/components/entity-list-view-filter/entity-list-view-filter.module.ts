import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxSelectModule } from 'ngx-select-ex';

import { EntityListViewFilterComponent } from './entity-list-view-filter.component';

@NgModule({
  declarations: [EntityListViewFilterComponent],
  imports: [
    CommonModule,
    NgxSelectModule.forRoot({
      optionValueField: 'value',
      optionTextField: 'label',
      keepSelectedItems: true,
    }),
  ],
  exports: [EntityListViewFilterComponent],
})
export class EntityListViewFilterModule {}
