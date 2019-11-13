import {
    actionsListMock, roomsEntitiesMock, roomsEntitiesReorderedMock, roomsListOrderedByPosition,
    roomsListWithActionLabelsMock
} from '@shared/mocks';

import {
    getRoomsAll, getRoomsEntities, getRoomsIds, getRoomsLoaded, getRoomsLoading, getRoomsOrderDirty,
    getRoomsSelectedRoomDirty, getRoomsSelectedRoomId, getRoomsTotal, getRoomsWithActionsLabels
} from './rooms.selectors';

describe('Rooms selectors', () => {
  test('should return Rooms list', () => {
    expect(getRoomsAll.projector(roomsEntitiesMock)).toEqual(
      roomsListOrderedByPosition
    );
  });

  test('should return Rooms list with actions labels', () => {
    expect(
      getRoomsWithActionsLabels.projector(
        roomsListOrderedByPosition,
        actionsListMock
      )
    ).toEqual(roomsListWithActionLabelsMock);
  });

  test('should return Rooms ids', () => {
    expect(getRoomsIds.projector(roomsEntitiesMock)).toEqual(
      roomsEntitiesMock.ids
    );
  });

  test('should return Rooms entities', () => {
    expect(getRoomsEntities.projector(roomsEntitiesMock)).toBe(
      roomsEntitiesMock.entities
    );
  });

  test('should return Rooms total', () => {
    expect(getRoomsTotal.projector(roomsEntitiesMock)).toBe(
      roomsEntitiesMock.ids.length
    );
  });

  test('should return Rooms loading', () => {
    expect(getRoomsLoading.projector(roomsEntitiesMock)).toBe(
      roomsEntitiesMock.loading
    );
  });

  test('should return Rooms loaded', () => {
    expect(getRoomsLoaded.projector(roomsEntitiesMock)).toBe(
      roomsEntitiesMock.loaded
    );
  });

  test('should return Rooms selected room id', () => {
    expect(getRoomsSelectedRoomId.projector(roomsEntitiesMock)).toBe(
      roomsEntitiesMock.selectedRoomId
    );
  });

  test('should return Rooms selected room dirty', () => {
    expect(getRoomsSelectedRoomDirty.projector(roomsEntitiesMock)).toBe(
      roomsEntitiesMock.selectedRoomDirty
    );
  });

  test('should return Rooms order dirty', () => {
    expect(getRoomsOrderDirty.projector(roomsEntitiesReorderedMock)).toBe(
      roomsEntitiesReorderedMock.orderDirty
    );
  });
});
