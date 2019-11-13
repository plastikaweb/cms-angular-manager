import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DropdownMenuComponent } from './dropdown-menu.component';

@NgModule({
  declarations: [DropdownMenuComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()],
  exports: [DropdownMenuComponent],
})
export class DropdownMenuModule {}
