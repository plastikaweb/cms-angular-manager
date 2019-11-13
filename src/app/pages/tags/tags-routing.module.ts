import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTagFamilyGuard, SelectTagGuard } from '@app/pages/tags/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/tags-list.module').then(m => m.TagsListModule),
    data: { title: 'listado de etiquetas' },
  },
  {
    path: 'new/:tagFamilyId',
    loadChildren: () =>
      import('./detail/tag-detail.module').then(m => m.TagDetailModule),
    data: { title: 'creación de etiqueta' },
    canActivate: [SelectTagFamilyGuard],
  },
  {
    path: ':tagId',
    loadChildren: () =>
      import('./detail/tag-detail.module').then(m => m.TagDetailModule),
    data: { title: 'edición de etiqueta' },
    canActivate: [SelectTagGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
