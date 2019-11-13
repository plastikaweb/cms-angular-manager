import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { AccordionModule } from 'ngx-bootstrap';

import { TagCulturesAccordionComponent } from './tag-cultures-accordion.component';

@NgModule({
  declarations: [TagCulturesAccordionComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    SharedModule,
    RouterModule,
  ],
  exports: [TagCulturesAccordionComponent],
})
export class TagCulturesAccordionModule {}
