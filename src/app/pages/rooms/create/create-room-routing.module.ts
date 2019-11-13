import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckActionsGuard } from '@app/pages/rooms/guards';

import { CreateRoomComponent } from './create-room.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRoomComponent,
    canActivate: [CheckActionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoomRoutngModule {
  static components = [CreateRoomComponent];
}
