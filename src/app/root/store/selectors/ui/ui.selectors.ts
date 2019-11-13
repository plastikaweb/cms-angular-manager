import { getEntitiesLoading } from '@app/entities/global/store/selectors/global-entities.selectors';
import { getUIFeatureState } from '@app/root/store/reducers';
import * as fromUI from '@app/root/store/reducers/ui/ui.reducer';
import { createSelector } from '@ngrx/store';

export const getUISidebarVisibility = createSelector(
  getUIFeatureState,
  fromUI.getUISidebarVisibilityState
);

export const getUINotification = createSelector(
  getUIFeatureState,
  fromUI.getUINotificationState
);

export const getUIConfirmationModal = createSelector(
  getUIFeatureState,
  fromUI.getUIConfirmationModalState
);

export const getUIRouterActivity = createSelector(
  getUIFeatureState,
  fromUI.getRouterActivityState
);

export const getActivity = createSelector(
  getUIRouterActivity,
  getEntitiesLoading,
  (routerLoading, entitiesLoading) => routerLoading || entitiesLoading
);
