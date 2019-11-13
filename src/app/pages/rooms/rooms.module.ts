import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomsRoutingModule } from '@app/pages/rooms/rooms-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, RoomsRoutingModule, SharedModule],
})
export class RoomsModule {}
