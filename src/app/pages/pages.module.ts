import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from '@app/pages/pages-routing.module';
import { effects } from '@app/pages/store/effects';
import { reducers } from '@app/pages/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PagesRoutingModule.components],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    StoreModule.forFeature('entities', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class PagesModule {}
