import {
    CreateRoom, CreateRoomFail, CreateRoomSuccess, initialState, LoadRooms, LoadRoomsFail,
    LoadRoomsSuccess, reducer, RemoveRoom, RemoveRoomFail, RemoveRoomSuccess, ReorderRooms,
    ReorderRoomsFail, ReorderRoomsSuccess, SetSelectedRoom, UpdateRoom, UpdateRoomFail,
    UpdateRoomSuccess
} from '@app/entities/rooms';
import {
    roomsEntitiesMock, roomsEntitiesRemoveOneMock, roomsEntitiesReorderedMock, roomsListMock,
    roomsListOrderedByPosition
} from '@shared/mocks';

describe('Rooms Reducer', () => {
  test('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(initialState);
  });

  describe('Load Rooms Actions', () => {
    test('should handle the Load Rooms Action', () => {
      const result = {
        ids: [],
        entities: {},
        loading: true,
        loaded: false,
        selectedRoomId: null,
        selectedRoomDirty: null,
        orderDirty: null,
      };
      const newState = reducer(initialState, new LoadRooms());
      expect(newState).toEqual(result);
    });

    test('should handle the Load Rooms Success Action', () => {
      const result = {
        ...roomsEntitiesMock,
        loading: false,
        loaded: true,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new LoadRoomsSuccess(roomsListOrderedByPosition)
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Load Rooms Fail Action', () => {
      const result = {
        ids: [],
        entities: {},
        loaded: false,
        loading: false,
        orderDirty: null,
        selectedRoomDirty: null,
        selectedRoomId: null,
      };
      const newState = reducer(
        initialState,
        new LoadRoomsFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });

  describe('Update Room Actions', () => {
    test('should handle the Update Room Action', () => {
      const changes = {
        ...roomsListMock[0],
        name: 'Room AA',
      };
      const result = {
        ...roomsEntitiesMock,
        loading: true,
        selectedRoomDirty: roomsListMock[0],
        entities: {
          ...roomsEntitiesMock.entities,
          [roomsListMock[0].id]: changes,
        },
      };
      const newState = reducer(
        roomsEntitiesMock,
        new UpdateRoom({
          id: changes.id,
          changes,
        })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Update Room Success Action', () => {
      const changes = {
        ...roomsListMock[0],
        name: 'Room AA',
      };
      const result = {
        ...roomsEntitiesMock,
        entities: {
          ...roomsEntitiesMock.entities,
          [changes.id]: changes,
        },
        loading: false,
        selectedRoomDirty: null,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new UpdateRoomSuccess({ id: changes.id, changes })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Update Room Fail Action', () => {
      const result = {
        ...roomsEntitiesMock,
        loading: false,
        selectedRoomDirty: null,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new UpdateRoomFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });

  describe('Create Room Actions', () => {
    test('should handle the Create Room Action', () => {
      const { id, ...changes } = { ...roomsListMock[0] };
      const result = {
        ...roomsEntitiesMock,
        loading: true,
      };
      const newState = reducer(roomsEntitiesMock, new CreateRoom(changes));
      expect(newState).toEqual(result);
    });

    test('should handle the Create Room Success Action', () => {
      const list = [...roomsListMock];
      const newRoom = list.shift();
      const result = {
        ...roomsEntitiesMock,
        loading: false,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new CreateRoomSuccess(newRoom)
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Create Room Fail Action', () => {
      const result = {
        ...roomsEntitiesMock,
        loading: false,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new CreateRoomFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });

  test('should handle the Set Selected Room Action', () => {
    const selectedRoomId = 3;
    const result = {
      ...roomsEntitiesMock,
      selectedRoomId,
    };
    const newState = reducer(
      roomsEntitiesMock,
      new SetSelectedRoom(selectedRoomId)
    );
    expect(newState).toEqual(result);
  });

  describe('Reorder Rooms Actions', () => {
    test('should handle the Reorder Rooms Action', () => {
      const result = {
        ...roomsEntitiesReorderedMock,
        loading: true,
        orderDirty: [...roomsEntitiesMock.ids],
      };
      const newState = reducer(
        roomsEntitiesMock,
        new ReorderRooms([...roomsEntitiesReorderedMock.ids])
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Reorder Rooms Success Action', () => {
      const result = {
        ...roomsEntitiesReorderedMock,
        loading: false,
        orderDirty: null,
      };
      const newState = reducer(
        roomsEntitiesReorderedMock,
        new ReorderRoomsSuccess()
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Reorder Rooms Fail Action', () => {
      const result = {
        ...roomsEntitiesMock,
        loading: false,
        orderDirty: null,
      };
      const newState = reducer(
        { ...roomsEntitiesReorderedMock },
        new ReorderRoomsFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });

  describe('Remove Room Actions', () => {
    test('should handle the Remove Room Action', () => {
      const result = {
        ...roomsEntitiesMock,
        loading: true,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new RemoveRoom({ id: 1, name: 'room' })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Remove Room Success Action', () => {
      const result = {
        ...roomsEntitiesRemoveOneMock,
        loading: false,
      };
      const newState = reducer(
        roomsEntitiesMock,
        new RemoveRoomSuccess({ id: 1 })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Remove Room Fail Action', () => {
      const result = {
        ...roomsEntitiesMock,
        loading: false,
      };
      const newState = reducer(
        { ...roomsEntitiesMock },
        new RemoveRoomFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });
});
