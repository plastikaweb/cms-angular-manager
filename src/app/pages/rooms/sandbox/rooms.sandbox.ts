import { Injectable } from '@angular/core';
import { SetPendingEntity } from '@app/entities/global/store/actions/global-entities.actions';
import {
    CreateRoom, RemoveRoom, ReorderRooms, SetSelectedRoom, UpdateRoom
} from '@app/entities/rooms/store/actions/rooms.actions';
import {
    getRoomsLoading, getRoomsSelectedRoomId, getRoomsWithActionsLabels
} from '@app/entities/rooms/store/selectors/rooms.selectors';
import { PagesState } from '@app/pages/store/reducers';
import { PageFactoryService } from '@app/root/services/page/page-factory.service';
import {
    getUIConfirmationModal, Go, HideConfirmationModal, ShowConfirmationModal
} from '@app/root/store';
import { select, Store } from '@ngrx/store';
import { AccordionGroup, Room } from '@shared/models';
import { BaseSandbox } from '@shared/services/sandbox/base.sandbox';

@Injectable({
  providedIn: 'root',
})
export class RoomsSandbox extends BaseSandbox {
  selectedRoomId$ = this.store.pipe(select(getRoomsSelectedRoomId));
  roomActivity$ = this.store.pipe(select(getRoomsLoading));
  confirmModalConfig$ = this.store.pipe(select(getUIConfirmationModal));
  roomsWithActionLabels$ = this.store.pipe(select(getRoomsWithActionsLabels));

  constructor(
    private store: Store<PagesState>,
    protected pageService: PageFactoryService
  ) {
    super(pageService);
  }

  sendHasChanged(changed: boolean) {
    this.store.dispatch(new SetPendingEntity(changed));
  }

  createRoom(room: Partial<Room>) {
    this.store.dispatch(new CreateRoom(room));
  }

  updateRoom(room: Partial<Room>) {
    const { id, ...changes } = room;
    this.store.dispatch(new UpdateRoom({ id, changes }));
  }

  confirmRemoveRoom({ id, name }: Partial<Room>) {
    this.store.dispatch(
      new ShowConfirmationModal({
        visible: true,
        data: { id, name },
        title: `Eliminar ${name}`,
        body: `¿Realmente quieres eliminar esta entrada? Esta acción es irreversible.`,
        action: this.removeRoom.bind(this, { id, name }),
      })
    );
  }

  removeRoom(room: Partial<Room>) {
    this.store.dispatch(new RemoveRoom(room));
    this.closeModal();
  }

  setSelectedRoom({ isOpened, id }: AccordionGroup) {
    this.store.dispatch(new SetSelectedRoom(isOpened ? id : null));
  }

  reorderRooms(roomsIndexes: Array<number>) {
    this.store.dispatch(new ReorderRooms(roomsIndexes));
  }

  goToRoomsList() {
    this.store.dispatch(new Go({ path: ['rooms'] }));
    this.closeModal();
  }

  closeModal() {
    this.store.dispatch(new HideConfirmationModal());
  }
}
