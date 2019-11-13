import { RoomsState } from '@app/entities/rooms';
import { OptApiResponse, Room, RoomTypes } from '@shared/models';

import { actionsListMock } from './actions.mock';

export const roomsListMock: Array<Room> = [
  {
    id: 1,
    name: 'Room A',
    type: RoomTypes.aparatos,
    actions: [1],
    capacity: 1,
    createdAt: {
      date: '2019-05-28 15:20:53.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    modifiedAt: {
      date: '2019-05-28 15:20:53.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    estimation: { title: 'lorem ipsum' },
    position: 0,
  },
  {
    id: 2,
    name: 'Room B',
    type: RoomTypes.aparatos,
    actions: [1, 2],
    capacity: 1,
    createdAt: {
      date: '2019-05-28 15:20:53.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    modifiedAt: {
      date: '2019-05-28 15:20:53.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    estimation: {},
    position: 2,
  },
  {
    id: 3,
    name: 'Room C',
    type: RoomTypes.quirofano,
    actions: [],
    capacity: 1,
    createdAt: {
      date: '2019-05-28 15:20:53.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    modifiedAt: {
      date: '2019-05-28 15:20:53.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    estimation: {},
    position: 1,
  },
];

export const roomsListOrderedByPosition = [...roomsListMock].sort(
  (a, b) => a.position - b.position
);

export const roomsListWithActionLabelsMock = [
  ...roomsListOrderedByPosition,
].reduce((roomsList, roomItem) => {
  const room = {
    ...roomItem,
    actions: roomItem.actions.map(roomActionIndex => {
      const { id, name } = actionsListMock.find(
        action => action.id === roomActionIndex
      );
      return { id, name };
    }),
  };
  return [...roomsList, room];
}, []);

// positions: [1, 3, 2]
export const roomsEntitiesMock: RoomsState = {
  ids: [roomsListMock[0].id, roomsListMock[2].id, roomsListMock[1].id],
  entities: {
    [roomsListMock[0].id]: roomsListMock[0],
    [roomsListMock[1].id]: roomsListMock[1],
    [roomsListMock[2].id]: roomsListMock[2],
  },
  loading: false,
  loaded: true,
  selectedRoomId: roomsListMock[0].id,
  selectedRoomDirty: roomsListMock[0],
  orderDirty: null,
};

// positions: [1, 2, 3]
export const roomsEntitiesReorderedMock: RoomsState = {
  ...roomsEntitiesMock,
  ids: [roomsListMock[0].id, roomsListMock[1].id, roomsListMock[2].id],
  entities: {
    [roomsListMock[0].id]: { ...roomsListMock[0], position: 0 },
    [roomsListMock[1].id]: { ...roomsListMock[1], position: 1 },
    [roomsListMock[2].id]: { ...roomsListMock[2], position: 2 },
  },
  orderDirty: [...roomsEntitiesMock.ids],
};

export const roomsEntitiesRemoveOneMock: RoomsState = {
  ...roomsEntitiesMock,
  ids: [roomsListMock[2].id, roomsListMock[1].id],
  entities: {
    [roomsListMock[2].id]: { ...roomsListMock[2] },
    [roomsListMock[1].id]: { ...roomsListMock[1] },
  },
};

export const roomsApiResponseMock: OptApiResponse<Array<Room>> = {
  payload: roomsListMock,
  success: true,
};

export const roomApiResponseMock: OptApiResponse<Room> = {
  payload: roomsListMock[0],
  success: true,
};

export const roomRemoveApiResponseMock: OptApiResponse<Partial<Room>> = {
  payload: { id: 1, name: 'room' },
  success: true,
};
