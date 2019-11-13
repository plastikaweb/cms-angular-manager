import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TagFamiliesRoutingModule } from './tag-families-routing.module';

@NgModule({
  declarations: [TagFamiliesRoutingModule.components],
  imports: [CommonModule, SharedModule, TagFamiliesRoutingModule],
})
export class TagFamiliesModule {}
