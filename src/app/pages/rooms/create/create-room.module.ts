import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CreateRoomRoutngModule } from './create-room-routing.module';

@NgModule({
  declarations: [CreateRoomRoutngModule.components],
  imports: [CommonModule, CreateRoomRoutngModule, SharedModule],
})
export class CreateRoomModule {}
