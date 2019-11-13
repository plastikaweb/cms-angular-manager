import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@shared/pipes/pipes.module';

import { VirtualScrollComponent } from './virtual-scroll.component';

@NgModule({
  declarations: [VirtualScrollComponent],
  imports: [CommonModule, RouterModule, ScrollingModule, PipesModule],
  exports: [VirtualScrollComponent],
})
export class VirtualScrollModule {}
