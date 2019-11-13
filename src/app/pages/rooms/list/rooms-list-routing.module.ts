import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckActionsGuard, CheckRoomsGuard } from '@app/pages/rooms/guards';
import { RoomsListComponent } from '@app/pages/rooms/list/rooms-list.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsListComponent,
    canActivate: [CheckActionsGuard, CheckRoomsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsListRoutingModule {
  static components = [RoomsListComponent];
}
