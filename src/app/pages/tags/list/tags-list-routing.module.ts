import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTagsGuard } from '@app/pages/tags/guards';

import { TagsListComponent } from './tags-list.component';
import {
    VirtualScrollTagItemComponent
} from './virtual-scroll-tag-item/virtual-scroll-tag-item.component';

const routes: Routes = [
  { path: '', component: TagsListComponent, canActivate: [CheckTagsGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsListRoutingModule {
  static components = [TagsListComponent, VirtualScrollTagItemComponent];
}
