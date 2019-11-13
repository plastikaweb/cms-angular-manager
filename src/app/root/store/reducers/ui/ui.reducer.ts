import { UIActions, UIActionTypes } from '@app/root/store/actions';
import { ConfirmationModalConfig, NotificationConfig } from '@shared/models';

export interface UiState {
  sidebarVisibility: boolean;
  progressbarVisibility: boolean;
  notification: NotificationConfig;
  confirmationModal: ConfirmationModalConfig;
  routerActivity: boolean;
}

export const initialState: UiState = {
  sidebarVisibility: false,
  progressbarVisibility: false,
  notification: null,
  confirmationModal: null,
  routerActivity: false,
};

export function reducer(
  state: UiState = initialState,
  action: UIActions
): UiState {
  switch (action.type) {
    case UIActionTypes.ToggleSidebarVisibility: {
      return {
        ...state,
        sidebarVisibility: !state.sidebarVisibility,
      };
    }
    case UIActionTypes.ShowNotificacion: {
      return {
        ...state,
        notification: action.payload,
      };
    }
    case UIActionTypes.ResetNotification: {
      return {
        ...state,
        notification: null,
      };
    }
    case UIActionTypes.ShowConfirmationModal: {
      return {
        ...state,
        confirmationModal: action.payload,
      };
    }
    case UIActionTypes.HideConfirmationModal: {
      return {
        ...state,
        confirmationModal: { ...state.confirmationModal, visible: false },
      };
    }
    case UIActionTypes.SetRouterActivityOn: {
      return {
        ...state,
        routerActivity: true,
      };
    }
    case UIActionTypes.SetRouterActivityOff: {
      return {
        ...state,
        routerActivity: false,
      };
    }
  }
  return state;
}

export const getUISidebarVisibilityState = (state: UiState) =>
  state.sidebarVisibility;
export const getUINotificationState = (state: UiState) => state.notification;
export const getUIConfirmationModalState = (state: UiState) =>
  state.confirmationModal;
export const getRouterActivityState = (state: UiState) => state.routerActivity;
