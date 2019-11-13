import { RoomsActions, RoomsActionTypes } from '@app/entities/rooms/store/actions/rooms.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Room } from '@shared/models';
import { ArrayUtils } from '@shared/utils';

export const adapter = createEntityAdapter<Room>({
  sortComparer: (a: Room, b: Room): number => {
    return a.position - b.position;
  },
});

export interface RoomsState extends EntityState<Room> {
  loading: boolean;
  loaded: boolean;
  selectedRoomId: number;
  selectedRoomDirty: Room;
  orderDirty: Array<number | string>;
}

export const initialState: RoomsState = adapter.getInitialState({
  loading: false,
  loaded: false,
  selectedRoomId: null,
  selectedRoomDirty: null,
  orderDirty: null,
});

export function reducer(
  state = initialState,
  action: RoomsActions
): RoomsState {
  switch (action.type) {
    case RoomsActionTypes.LoadRooms:
    case RoomsActionTypes.RemoveRoom:
    case RoomsActionTypes.CreateRoom: {
      return {
        ...state,
        loading: true,
      };
    }

    case RoomsActionTypes.LoadRoomsSuccess: {
      const successPayload = {
        ...state,
        loaded: true,
        loading: false,
      };
      return adapter.addAll(action.payload, successPayload);
    }

    case RoomsActionTypes.LoadRoomsFail:
    case RoomsActionTypes.RemoveRoomFail:
    case RoomsActionTypes.CreateRoomFail: {
      return {
        ...state,
        loading: false,
      };
    }

    case RoomsActionTypes.CreateRoomSuccess: {
      state = {
        ...state,
        loading: false,
        selectedRoomId: action.payload.id,
      };
      return adapter.addOne(action.payload, state);
    }

    case RoomsActionTypes.UpdateRoom: {
      const { id, changes } = action.payload;
      state = {
        ...state,
        selectedRoomDirty: state.entities[action.payload.id],
        loading: true,
      };
      return adapter.updateOne({ id, changes }, state);
    }

    case RoomsActionTypes.UpdateRoomSuccess: {
      state = {
        ...state,
        loading: false,
        selectedRoomDirty: null,
      };
      return adapter.updateOne(action.payload, state);
    }

    case RoomsActionTypes.UpdateRoomFail: {
      const changes = { ...state.selectedRoomDirty };
      state = {
        ...state,
        loading: false,
        selectedRoomDirty: null,
      };
      return adapter.updateOne({ id: changes.id, changes }, state);
    }

    case RoomsActionTypes.SetSelectedRoom: {
      return {
        ...state,
        selectedRoomId: action.payload,
      };
    }

    case RoomsActionTypes.ReorderRooms: {
      state = {
        ...state,
        loading: true,
        orderDirty: state.ids,
      };
      return adapter.map(room => {
        return {
          ...room,
          position: ArrayUtils.findIndex<Room>(action.payload, room),
        };
      }, state);
    }

    case RoomsActionTypes.ReorderRoomsSuccess: {
      return {
        ...state,
        loading: false,
        orderDirty: null,
      };
    }

    case RoomsActionTypes.ReorderRoomsFail: {
      const oldOrder = [...state.orderDirty];
      state = {
        ...state,
        loading: false,
        orderDirty: null,
      };
      return adapter.map(room => {
        return {
          ...room,
          position: ArrayUtils.findIndex(oldOrder, room),
        };
      }, state);
    }

    case RoomsActionTypes.RemoveRoomSuccess: {
      const { id } = action.payload;
      state = {
        ...state,
        loading: false,
      };
      return adapter.removeOne(id, state);
    }
  }
  return state;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
export const getRoomsLoadingState = (state: RoomsState) =>
  state && state.loading;
export const getRoomsLoadedState = (state: RoomsState) => state && state.loaded;
export const getRoomsSelectedRoomIdState = (state: RoomsState) =>
  state && state.selectedRoomId;
export const getRoomsSelectedRoomDirtyState = (state: RoomsState) =>
  state && state.selectedRoomDirty;
export const getRoomsOrderDirtyState = (state: RoomsState) =>
  state && state.orderDirty;
