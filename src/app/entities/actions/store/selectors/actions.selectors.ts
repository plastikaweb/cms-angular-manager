import {
    getActionsLoadedState, getActionsLoadingState, selectAll, selectEntities, selectIds, selectTotal
} from '@app/entities/actions/store/reducers/actions.reducer';
import { getActionsState } from '@app/pages/store/reducers';
import { createSelector } from '@ngrx/store';

export const getActionsIds = createSelector(
  getActionsState,
  selectIds
);

export const getActionsEntities = createSelector(
  getActionsState,
  selectEntities
);

export const getActionsAll = createSelector(
  getActionsState,
  selectAll
);

export const getActionsTotal = createSelector(
  getActionsState,
  selectTotal
);

export const getActionsLoading = createSelector(
  getActionsState,
  getActionsLoadingState
);

export const getActionsLoaded = createSelector(
  getActionsState,
  getActionsLoadedState
);
