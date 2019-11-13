import { Action } from '@ngrx/store';
import { ConfirmationModalConfig, NotificationConfig } from '@shared/models';

export enum UIActionTypes {
  ToggleSidebarVisibility = '[UI] Toggle Sidebar Visibility',
  ShowNotificacion = '[Ui] Show Notification',
  ResetNotification = '[Ui] Reset Notification',
  ShowConfirmationModal = '[Ui] Show Confirmation Modal',
  HideConfirmationModal = '[Ui] Hide Confirmation Modal',
  SetRouterActivityOn = '[Ui] Set Api/Routing Activity On',
  SetRouterActivityOff = '[Ui] Set Api/Routing Activity Off',
}

export class ToggleSideBarVisibility implements Action {
  readonly type = UIActionTypes.ToggleSidebarVisibility;
}

export class ShowNotificacion implements Action {
  readonly type = UIActionTypes.ShowNotificacion;

  constructor(public payload: NotificationConfig) {}
}

export class ResetNotification implements Action {
  readonly type = UIActionTypes.ResetNotification;
}

export class ShowConfirmationModal implements Action {
  readonly type = UIActionTypes.ShowConfirmationModal;

  constructor(public payload: ConfirmationModalConfig) {}
}

export class HideConfirmationModal implements Action {
  readonly type = UIActionTypes.HideConfirmationModal;
}

export class SetRouterActivityOn implements Action {
  readonly type = UIActionTypes.SetRouterActivityOn;
}

export class SetRouterActivityOff implements Action {
  readonly type = UIActionTypes.SetRouterActivityOff;
}

export type UIActions =
  | ToggleSideBarVisibility
  | ShowNotificacion
  | ResetNotification
  | ShowConfirmationModal
  | HideConfirmationModal
  | SetRouterActivityOn
  | SetRouterActivityOff;
