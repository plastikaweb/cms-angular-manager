import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { RoomsSandbox } from '@app/pages/rooms/sandbox/rooms.sandbox';
import { AccordionGroup, EntityListViewFilterApplied, Room } from '@shared/models';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnDestroy {
  rooms$ = this.sandbox.roomsWithActionLabels$;
  activity$ = this.sandbox.roomActivity$;
  selectedRoomId$ = this.sandbox.selectedRoomId$;
  pageConfig$ = this.sandbox.pageConfig$;
  appliedFilters: EntityListViewFilterApplied;
  filteredRoomsLength: number;
  hasChanged = false;

  constructor(private sandbox: RoomsSandbox) {}

  ngOnDestroy() {
    this.clickRoom({ isOpened: false, id: null });
  }

  updateRoom(room: Partial<Room>) {
    this.sandbox.updateRoom(room);
  }

  confirmRemoveRoom(room: Partial<Room>) {
    this.sandbox.confirmRemoveRoom(room);
  }

  removeRoom(room: Partial<Room>) {
    this.sandbox.removeRoom(room);
  }

  emitRoomHasChanged(changed: boolean) {
    if (!this.hasChanged) {
      this.hasChanged = true;
      this.sandbox.sendHasChanged(changed);
    }
  }

  clickRoom(accordionGroup: AccordionGroup) {
    this.sandbox.setSelectedRoom(accordionGroup);
  }

  reorderRooms(roomsIndexes: Array<number>) {
    this.sandbox.reorderRooms(roomsIndexes);
  }

  closeModal() {
    this.sandbox.closeModal();
  }

  filter(appliedFilters: EntityListViewFilterApplied) {
    this.appliedFilters = appliedFilters;
  }

  setFilteredRoomsLength(len: number) {
    this.filteredRoomsLength = len;
  }
}
