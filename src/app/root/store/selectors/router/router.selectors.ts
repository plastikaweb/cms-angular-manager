import * as fromRouter from '@app/root/store/reducers';
import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

export const getRouterUrl = createSelector(
  fromRouter.getRouterFeatureState,
  (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
    state && state.state && state.state.url
);

export const getRouterParams = createSelector(
  fromRouter.getRouterFeatureState,
  (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
    state && state.state && state.state.params
);

export const getRouterPaths = createSelector(
  fromRouter.getRouterFeatureState,
  (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
    (state && state.state && state.state.paths) || []
);

export const getRouterDataTitle = createSelector(
  fromRouter.getRouterFeatureState,
  (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
    state && state.state && state.state.title
);

export const getRouterCurrentPage = createSelector(
  fromRouter.getRouterFeatureState,
  (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
    state && state.state && state.state.currentPage
);
