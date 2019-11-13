import { Action } from '@ngrx/store';

export enum GlobalEntitiesActionTypes {
  SetPendingEntity = '[Entities] Set Pending Edition Entity',
}

export class SetPendingEntity implements Action {
  readonly type = GlobalEntitiesActionTypes.SetPendingEntity;

  constructor(public payload: boolean) {}
}

export type GlobalEntitiesActions = SetPendingEntity;
