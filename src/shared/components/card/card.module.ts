import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownMenuModule } from '@shared/components/dropdown-menu/dropdown-menu.module';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, DropdownMenuModule],
  exports: [CardComponent],
})
export class CardModule {}
