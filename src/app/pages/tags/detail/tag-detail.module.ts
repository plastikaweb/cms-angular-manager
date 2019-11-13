import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import {
    TagCulturesAccordionModule
} from './components/tag-cultures-accordion/tag-cultures-accordion.module';
import { TagDetailRoutingModule } from './tag-detail-routing.module';

@NgModule({
  declarations: [TagDetailRoutingModule.components],
  imports: [
    CommonModule,
    TagDetailRoutingModule,
    SharedModule,
    TagCulturesAccordionModule,
  ],
})
export class TagDetailModule {}
