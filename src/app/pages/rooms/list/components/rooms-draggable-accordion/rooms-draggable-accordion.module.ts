import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AccordionModule } from 'ngx-bootstrap';

import { RoomsDraggableAccordionComponent } from './rooms-draggable-accordion.component';

@NgModule({
  declarations: [RoomsDraggableAccordionComponent],
  imports: [
    CommonModule,
    DragDropModule,
    AccordionModule.forRoot(),
    SharedModule,
  ],
  exports: [RoomsDraggableAccordionComponent],
})
export class RoomsDraggableAccordionModule {}
