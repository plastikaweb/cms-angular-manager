import { getClientFeatureState } from '@app/root/store/reducers';
import * as fromClient from '@app/root/store/reducers/client/client.reducer';
import { createSelector } from '@ngrx/store';

export const getClientTitle = createSelector(
  getClientFeatureState,
  fromClient.getClientTitleState
);

export const getClientSlug = createSelector(
  getClientFeatureState,
  fromClient.getClientSlugState
);

export const getClientTheme = createSelector(
  getClientFeatureState,
  fromClient.getClientThemeState
);

export const getClientImageRoute = createSelector(
  getClientFeatureState,
  fromClient.getClientImageRouteState
);
