import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TagDetailComponent } from './tag-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TagDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagDetailRoutingModule {
  static components = [TagDetailComponent];
}
