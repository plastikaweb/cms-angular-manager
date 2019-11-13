import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/rooms-list.module').then(m => m.RoomsListModule),
    data: { title: 'listado de salas' },
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./create/create-room.module').then(m => m.CreateRoomModule),
    data: { title: 'crear nueva sala' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
