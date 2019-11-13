import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CheckClientGuard } from './guards/check-client/check-client.guard';

const routes: Routes = [
  {
    path: ':client',
    loadChildren: () =>
      import('../layout/layout.module').then(m => m.LayoutModule),
    canActivate: [CheckClientGuard],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    canActivate: [CheckClientGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static components = [AppComponent];
}
