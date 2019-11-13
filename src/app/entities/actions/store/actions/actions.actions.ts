import { Action } from '@ngrx/store';
import { Action as ActionType } from '@shared/models';

export enum ActionsActionTypes {
  LoadActions = '[Actions] Load Actions',
  LoadActionsSuccess = '[Actions] Load Actions Success',
  LoadActionsFail = '[Actions] Load Actions Fail',
}

export class LoadActions implements Action {
  readonly type = ActionsActionTypes.LoadActions;
}

export class LoadActionsSuccess implements Action {
  readonly type = ActionsActionTypes.LoadActionsSuccess;

  constructor(public payload: Array<ActionType>) {}
}

export class LoadActionsFail implements Action {
  readonly type = ActionsActionTypes.LoadActionsFail;

  constructor(public payload: Error | any) {}
}

export type ActionsActions = LoadActions | LoadActionsSuccess | LoadActionsFail;
