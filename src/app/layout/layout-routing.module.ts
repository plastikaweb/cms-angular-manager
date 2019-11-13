import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecPendingEntityGuard } from './guards/check-pending-entity/check-pending-entity.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/pages.module').then(m => m.PagesModule),
        canActivateChild: [ChecPendingEntityGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
