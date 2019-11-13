import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoomsSandbox } from '@app/pages/rooms/sandbox/rooms.sandbox';
import { Room } from '@shared/models';

@Component({
  selector: 'create-room',
  templateUrl: './create-room.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRoomComponent {
  activity$ = this.sandbox.roomActivity$;
  pageConfig$ = this.sandbox.pageConfig$;
  hasChanged = false;

  constructor(private sandbox: RoomsSandbox) {}

  sendHasChanged() {
    if (!this.hasChanged) {
      this.hasChanged = true;
      this.sandbox.sendHasChanged(true);
    }
  }

  submit(room: Partial<Room>) {
    this.sandbox.createRoom({ ...room, position: 0 });
  }
}
