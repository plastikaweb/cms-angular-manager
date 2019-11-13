import { getActionsLoading } from '@app/entities/actions/store/selectors/actions.selectors';
import {
    getEntitiesPendingEditionState
} from '@app/entities/global/store/reducers/global-entities.reducer';
import { getRoomsLoading } from '@app/entities/rooms/store/selectors/rooms.selectors';
import {
    getTagFamiliesLoading
} from '@app/entities/tag-families/store/selectors/tag-families.selectors';
import { getTagsLoading } from '@app/entities/tags/store/selectors/tags.selectors';
import { getGlobalEntitiesState } from '@app/pages/store/reducers';
import { createSelector } from '@ngrx/store';

export const getEntitiesLoading = createSelector(
  getRoomsLoading,
  getActionsLoading,
  getTagFamiliesLoading,
  getTagsLoading,
  (roomsLoading, actionsLoading, tagFamiliesLoading, tagsLoading) =>
    roomsLoading || actionsLoading || tagFamiliesLoading || tagsLoading
);

export const getEntitiesPendingEdition = createSelector(
  getGlobalEntitiesState,
  getEntitiesPendingEditionState
);
