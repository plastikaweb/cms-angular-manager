import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    CheckTagFamiliesGuard
} from '@app/pages/tag-families/guards/check-tag-families/check-tag-families.guard';

import { TagFamiliesListComponent } from './list/tag-families-list.component';

const routes: Routes = [
  {
    path: '',
    component: TagFamiliesListComponent,
    canActivate: [CheckTagFamiliesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagFamiliesRoutingModule {
  static components = [TagFamiliesListComponent];
}
