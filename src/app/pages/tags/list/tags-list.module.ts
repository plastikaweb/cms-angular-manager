import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TagsListRoutingModule } from './tags-list-routing.module';

@NgModule({
  declarations: [TagsListRoutingModule.components],
  imports: [CommonModule, SharedModule, TagsListRoutingModule],
})
export class TagsListModule {}
