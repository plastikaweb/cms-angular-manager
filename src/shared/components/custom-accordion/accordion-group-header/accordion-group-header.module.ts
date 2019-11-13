import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeModule } from '@shared/components/badge/badge.module';

import { AccordionGroupHeaderComponent } from './accordion-group-header.component';

@NgModule({
  declarations: [AccordionGroupHeaderComponent],
  imports: [CommonModule, BadgeModule],
  exports: [AccordionGroupHeaderComponent],
})
export class AccordionGroupHeaderModule {}
