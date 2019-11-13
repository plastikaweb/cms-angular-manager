import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormContainerModule } from '@shared/components/form-container/form-container.module';

import { AccordionGroupBodyComponent } from './accordion-group-body.component';

@NgModule({
  declarations: [AccordionGroupBodyComponent],
  imports: [CommonModule, FormContainerModule],
  exports: [AccordionGroupBodyComponent],
})
export class AccordionGroupBodyModule {}
