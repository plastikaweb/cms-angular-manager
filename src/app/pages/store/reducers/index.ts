import {
    ActionsState, reducer as ActionsReducer
} from '@app/entities/actions/store/reducers/actions.reducer';
import {
    GlobalEntityState, reducer as GlobalEntitiesReducer
} from '@app/entities/global/store/reducers/global-entities.reducer';
import {
    reducer as RoomReducer, RoomsState
} from '@app/entities/rooms/store/reducers/rooms.reducer';
import {
    reducer as TagFamiliesReducer, TagFamiliesState
} from '@app/entities/tag-families/store/reducers/tag-families.reducer';
import { reducer as TagsReducer, TagsState } from '@app/entities/tags/store/reducers/tags.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface PagesState {
  rooms: RoomsState;
  actions: ActionsState;
  tagFamilies: TagFamiliesState;
  tags: TagsState;
  global: GlobalEntityState;
}

export const reducers: ActionReducerMap<PagesState> = {
  rooms: RoomReducer,
  actions: ActionsReducer,
  tagFamilies: TagFamiliesReducer,
  tags: TagsReducer,
  global: GlobalEntitiesReducer,
};

export const getPagesFeatureState = createFeatureSelector<PagesState>(
  'entities'
);

export const getRoomsState = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state && state.rooms
);

export const getActionsState = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state && state.actions
);

export const getTagFamiliesState = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state && state.tagFamilies
);

export const getTagsState = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state && state.tags
);

export const getGlobalEntitiesState = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state && state.global
);
