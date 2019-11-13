import { getActionsAll } from '@app/entities/actions';
import {
    getRoomsLoadedState, getRoomsLoadingState, getRoomsOrderDirtyState,
    getRoomsSelectedRoomDirtyState, getRoomsSelectedRoomIdState, selectAll, selectEntities,
    selectIds, selectTotal
} from '@app/entities/rooms/store/reducers/rooms.reducer';
import { getRoomsState } from '@app/pages/store/reducers';
import { createSelector } from '@ngrx/store';

export const getRoomsIds = createSelector(
  getRoomsState,
  selectIds
);

export const getRoomsEntities = createSelector(
  getRoomsState,
  selectEntities
);

export const getRoomsAll = createSelector(
  getRoomsState,
  selectAll
);

export const getRoomsWithActionsLabels = createSelector(
  getRoomsAll,
  getActionsAll,
  (rooms, actions) => {
    return rooms.reduce((roomsList, roomItem) => {
      const room = {
        ...roomItem,
        actions: roomItem.actions.map(roomActionIndex => {
          const { id, name } = actions.find(
            action => action.id === roomActionIndex
          );
          return { id, name };
        }),
      };
      return [...roomsList, room];
    }, []);
  }
);

export const getRoomsTotal = createSelector(
  getRoomsState,
  selectTotal
);

export const getRoomsLoading = createSelector(
  getRoomsState,
  getRoomsLoadingState
);

export const getRoomsLoaded = createSelector(
  getRoomsState,
  getRoomsLoadedState
);

export const getRoomsSelectedRoomId = createSelector(
  getRoomsState,
  getRoomsSelectedRoomIdState
);

export const getRoomsSelectedRoomDirty = createSelector(
  getRoomsState,
  getRoomsSelectedRoomDirtyState
);

export const getRoomsOrderDirty = createSelector(
  getRoomsState,
  getRoomsOrderDirtyState
);
