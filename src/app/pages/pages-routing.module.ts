import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
        data: { title: 'inicio' },
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('./rooms/rooms.module').then(m => m.RoomsModule),
      },
      {
        path: 'tag-families',
        loadChildren: () =>
          import('./tag-families/tag-families.module').then(
            m => m.TagFamiliesModule
          ),
        data: { title: 'familias de etiquetas' },
      },
      {
        path: 'tags',
        loadChildren: () =>
          import('./tags/tags.module').then(m => m.TagsModule),
        data: { title: 'listado de etiquetas' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
  static components = [PagesComponent];
}
