import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
    CreateRoom, CreateRoomFail, CreateRoomSuccess, LoadRooms, LoadRoomsFail, LoadRoomsSuccess,
    RemoveRoom, RemoveRoomFail, RemoveRoomSuccess, ReorderRooms, ReorderRoomsFail,
    ReorderRoomsSuccess, UpdateRoom, UpdateRoomFail, UpdateRoomSuccess
} from '@app/entities/rooms';
import { RoomsService } from '@app/entities/rooms/services/rooms.service';
import { RoomsEffects } from '@app/entities/rooms/store/effects/rooms.effects';
import { Go } from '@app/root/store';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import {
    roomApiResponseMock, roomRemoveApiResponseMock, roomsApiResponseMock, roomsListMock
} from '@shared/mocks';

import { cold, hot } from 'jasmine-marbles';
import { Observable, of, Subject } from 'rxjs';

class TestStore<T> {
  private state: Subject<T> = new Subject();
  setState(data: T) {
    this.state.next(data);
  }
  pipe() {
    return this.select();
  }
  select(selector?: any): Observable<any> {
    return of(['baviera']);
  }
  dispatch(action: any) {}
}

describe('Rooms Effects', () => {
  let effects: RoomsEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<RoomsEffects>;
  let roomsService: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      providers: [
        RoomsEffects,
        provideMockActions(() => actions),
        {
          provide: RoomsService,
          useValue: {
            list: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            updatePositions: jest.fn(),
          },
        },
        { provide: Store, useClass: TestStore },
      ],
    });

    effects = TestBed.get(RoomsEffects);
    metadata = getEffectsMetadata(effects);
    roomsService = TestBed.get(RoomsService);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('should pass through loadRooms', () => {
    const action = new LoadRooms();
    test('should return success action', () => {
      const outcome = new LoadRoomsSuccess(roomsApiResponseMock.payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: roomsApiResponseMock });
      roomsService.list = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadRooms$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new LoadRoomsFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      roomsService.list = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.loadRooms$).toBeObservable(expected);
    });

    test('should register loadRooms$ that dispatches an action', () => {
      expect(metadata.loadRooms$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through createRoom', () => {
    const payload = roomsListMock[0];
    const { id, ...changes } = payload;
    const action = new CreateRoom(changes);
    test('should return success action', () => {
      const outcome = new CreateRoomSuccess(payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: roomApiResponseMock });
      roomsService.create = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.createRoom$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new CreateRoomFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      roomsService.create = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.createRoom$).toBeObservable(expected);
    });

    test('should register createRoom$ that dispatches an action', () => {
      expect(metadata.createRoom$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('create room success', () => {
    test('should return Go action', () => {
      const action = new CreateRoomSuccess(roomsListMock[0]);
      const outcome = new Go({ path: ['rooms'] });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.createRoomSuccess$).toBeObservable(expected);
    });

    test('should register createRoomSuccess$ that dispatches an action', () => {
      expect(metadata.createRoomSuccess$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through updateRoom', () => {
    const { id, ...changes } = roomsListMock[0];
    const payload = { id, changes };
    const action = new UpdateRoom(payload);
    test('should return success action', () => {
      const outcome = new UpdateRoomSuccess(payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: roomApiResponseMock });
      roomsService.update = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.updateRoom$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new UpdateRoomFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      roomsService.update = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.updateRoom$).toBeObservable(expected);
    });

    test('should register updateRoom$ that dispatches an action', () => {
      expect(metadata.updateRoom$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through updateRoomsOrdering', () => {
    const action = new ReorderRooms([0, 1, 2, 3]);
    test('should return success action', () => {
      const outcome = new ReorderRoomsSuccess();

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: null });
      roomsService.updatePositions = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.updateRoomsOrdering$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new ReorderRoomsFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      roomsService.updatePositions = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.updateRoomsOrdering$).toBeObservable(expected);
    });

    test('should register updateRoomsOrdering$ that dispatches an action', () => {
      expect(metadata.updateRoomsOrdering$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through removeRoom', () => {
    const action = new RemoveRoom(roomRemoveApiResponseMock.payload);
    test('should return success action', () => {
      const outcome = new RemoveRoomSuccess(roomRemoveApiResponseMock.payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: roomRemoveApiResponseMock });
      roomsService.delete = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.removeRoom$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new RemoveRoomFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      roomsService.delete = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.removeRoom$).toBeObservable(expected);
    });

    test('should register removeRoom$ that dispatches an action', () => {
      expect(metadata.removeRoom$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });
});
