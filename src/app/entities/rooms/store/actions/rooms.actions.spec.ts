import {
    CreateRoom, CreateRoomFail, CreateRoomSuccess, LoadRooms, LoadRoomsFail, LoadRoomsSuccess,
    RemoveRoom, RemoveRoomFail, RemoveRoomSuccess, ReorderRooms, ReorderRoomsFail,
    ReorderRoomsSuccess, RoomsActionTypes, SetSelectedRoom, UpdateRoom, UpdateRoomFail,
    UpdateRoomSuccess
} from '@app/entities/rooms';
import { roomsListMock } from '@shared/mocks';

describe('Pages Rooms Actions', () => {
  describe('Load', () => {
    test('should dispatch LoadRooms', () => {
      const action = new LoadRooms();
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.LoadRooms,
      });
    });

    test('should dispatch LoadRoomsSuccess', () => {
      const payload = roomsListMock;
      const action = new LoadRoomsSuccess(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.LoadRoomsSuccess,
        payload,
      });
    });

    test('should dispatch LoadRoomsFail', () => {
      const payload = new Error('!!!');
      const action = new LoadRoomsFail(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.LoadRoomsFail,
        payload,
      });
    });
  });

  describe('Create', () => {
    test('should dispatch CreateRoom', () => {
      const { id, ...payload } = roomsListMock[0];
      const action = new CreateRoom(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.CreateRoom,
        payload,
      });
    });

    test('should dispatch CreateRoomSuccess', () => {
      const payload = roomsListMock[0];
      const action = new CreateRoomSuccess(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.CreateRoomSuccess,
        payload,
      });
    });

    test('should dispatch CreateRoomFail', () => {
      const payload = new Error('!!!');
      const action = new CreateRoomFail(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.CreateRoomFail,
        payload,
      });
    });
  });

  describe('Update', () => {
    test('should dispatch UpdateRoom', () => {
      const { id, ...changes } = roomsListMock[0];
      const payload = { id, changes };
      const action = new UpdateRoom(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.UpdateRoom,
        payload,
      });
    });

    test('should dispatch UpdateRoomSuccess', () => {
      const { id, ...changes } = roomsListMock[0];
      const payload = { id, changes };
      const action = new UpdateRoomSuccess(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.UpdateRoomSuccess,
        payload,
      });
    });

    test('should dispatch UpdateRoomFail', () => {
      const payload = new Error('!!!');
      const action = new UpdateRoomFail(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.UpdateRoomFail,
        payload,
      });
    });
  });

  test('should dispatch SetSelectedRoom', () => {
    const payload = 1;
    const action = new SetSelectedRoom(payload);
    expect({ ...action }).toEqual({
      type: RoomsActionTypes.SetSelectedRoom,
      payload,
    });
  });

  describe('Reorder', () => {
    test('should dispatch ReorderRooms', () => {
      const payload = [0, 3, 5, 1];
      const action = new ReorderRooms(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.ReorderRooms,
        payload,
      });
    });

    test('should dispatch ReorderRoomsSuccess', () => {
      const action = new ReorderRoomsSuccess();
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.ReorderRoomsSuccess,
      });
    });

    test('should dispatch ReorderRoomsFail', () => {
      const payload = new Error('!!!');
      const action = new ReorderRoomsFail(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.ReorderRoomsFail,
        payload,
      });
    });
  });

  describe('Remove', () => {
    test('should dispatch RemoveRoom', () => {
      const payload = { id: 1 };
      const action = new RemoveRoom(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.RemoveRoom,
        payload,
      });
    });

    test('should dispatch RemoveRoomSuccess', () => {
      const payload = { id: 1 };
      const action = new RemoveRoomSuccess(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.RemoveRoomSuccess,
        payload,
      });
    });

    test('should dispatch RemoveRoomFail', () => {
      const payload = new Error('!!!');
      const action = new RemoveRoomFail(payload);
      expect({ ...action }).toEqual({
        type: RoomsActionTypes.RemoveRoomFail,
        payload,
      });
    });
  });
});
