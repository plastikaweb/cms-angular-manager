import { TestBed } from '@angular/core/testing';
import { SetPendingEntity } from '@app/entities/global/store/actions/global-entities.actions';
import {
    CreateRoom, RemoveRoom, ReorderRooms, SetSelectedRoom, UpdateRoom
} from '@app/entities/rooms/store/actions/rooms.actions';
import { RoomsSandbox } from '@app/pages/rooms/sandbox/rooms.sandbox';
import { PagesState } from '@app/pages/store/reducers';
import { Go, HideConfirmationModal } from '@app/root/store';
import { Store, StoreModule } from '@ngrx/store';
import { roomsListMock } from '@shared/mocks';
import { Room } from '@shared/models';

const room: Partial<Room> = { id: 1, name: 'room' };

describe('RoomsSandbox', () => {
  let sandbox: RoomsSandbox;
  let store: Store<PagesState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [RoomsSandbox],
    });
    sandbox = TestBed.get(RoomsSandbox);
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    spyOn(sandbox, 'closeModal').and.callThrough();
    spyOn(sandbox, 'confirmRemoveRoom').and.callThrough();
  });

  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  test('should dispatch a SetPending action', () => {
    const action = new SetPendingEntity(true);
    sandbox.sendHasChanged(true);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a CreateRoom action', () => {
    const payload = roomsListMock[0];
    const { id, ...changes } = payload;
    const action = new CreateRoom(changes);
    sandbox.createRoom(changes);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch an UpdateRoom action', () => {
    const payload = roomsListMock[0];
    const { id, ...changes } = payload;
    const action = new UpdateRoom({ id, changes });
    sandbox.updateRoom(payload);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a ShowConfirmationModal action on confirmRemoveRoom', () => {
    sandbox.confirmRemoveRoom(room);
    expect(store.dispatch).toHaveBeenCalled();
  });

  test('should dispatch a RemoveRoom action', () => {
    const action = new RemoveRoom({ id: 1, name: 'sala 3' });
    sandbox.removeRoom({ id: 1, name: 'sala 3' });
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(sandbox.closeModal).toHaveBeenCalled();
  });

  describe('SetSelectedRoom action', () => {
    test('should dispatch on an active selected room', () => {
      const payload = { isOpened: true, id: 1 };
      const action = new SetSelectedRoom(payload.id);
      sandbox.setSelectedRoom(payload);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    test('should dispatch on no active selected room', () => {
      const payload = { isOpened: false, id: 1 };
      const action = new SetSelectedRoom(null);
      sandbox.setSelectedRoom(payload);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  test('should dispatch a ReorderRooms action', () => {
    const roomsIndexes = [1, 2, 3];
    const action = new ReorderRooms(roomsIndexes);
    sandbox.reorderRooms(roomsIndexes);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a Go action', () => {
    const action = new Go({ path: ['rooms'] });
    sandbox.goToRoomsList();
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(sandbox.closeModal).toHaveBeenCalled();
  });

  test('should dispatch a HideConfirmationModal action', () => {
    const action = new HideConfirmationModal();
    sandbox.closeModal();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
