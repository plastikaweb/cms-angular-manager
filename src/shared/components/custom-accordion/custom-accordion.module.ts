import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionGroupBodyModule } from './accordion-group-body/accordion-group-body.module';
import { AccordionGroupHeaderModule } from './accordion-group-header/accordion-group-header.module';

@NgModule({
  imports: [CommonModule, AccordionGroupHeaderModule, AccordionGroupBodyModule],
  exports: [AccordionGroupHeaderModule, AccordionGroupBodyModule],
})
export class CustomAccordionModule {}
