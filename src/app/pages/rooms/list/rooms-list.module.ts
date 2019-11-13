import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    RoomsDraggableAccordionModule
} from '@app/pages/rooms/list/components/rooms-draggable-accordion/rooms-draggable-accordion.module';
import { RoomsListRoutingModule } from '@app/pages/rooms/list/rooms-list-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [RoomsListRoutingModule.components],
  imports: [
    CommonModule,
    RoomsListRoutingModule,
    SharedModule,
    RoomsDraggableAccordionModule,
  ],
})
export class RoomsListModule {}
