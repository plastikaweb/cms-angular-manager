import { Action } from '@ngrx/store';
import { ChangeOrderFamilyTagBody, TagFamily } from '@shared/models';

export enum TagFamiliesActionTypes {
  LoadTagFamilies = '[Tag Families] Load Tag Families',
  LoadTagFamiliesSuccess = '[Tag Families] Load Tag Families Success',
  LoadTagFamiliesFail = '[Tag Families] Load Tag Families Fail',
  LoadTagFamily = '[Tag Families] Load Tag Family',
  LoadTagFamilySuccess = '[Tag Families] Load Tag Family Success',
  LoadTagFamilyFail = '[Tag Families] Load Tag Family Fail',
  CreateTagFamily = '[Tag Families] Create Tag Family',
  CreateTagFamilySuccess = '[Tag Families] Create Tag Family Success',
  CreateTagFamilyFail = '[Tag Families] Create Tag Family Fail',
  UpdateTagFamily = '[Tag Families] Update Tag Family',
  UpdateTagFamilySuccess = '[Tag Families] Update Tag Family Success',
  UpdateTagFamilyFail = '[Tag Families] Update Tag Family Fail',
  ReorderTagFamilies = '[Tag Families] Reorder Tag Families list',
  ReorderTagFamiliesSuccess = '[Tag Families] Reorder Tag Families Success',
  ReorderTagFamiliesFail = '[Tag Families] Reorder Tag Families Fail',
}

export class LoadTagFamilies implements Action {
  readonly type = TagFamiliesActionTypes.LoadTagFamilies;
}

export class LoadTagFamiliesSuccess implements Action {
  readonly type = TagFamiliesActionTypes.LoadTagFamiliesSuccess;

  constructor(public payload: Array<TagFamily>) {}
}

export class LoadTagFamiliesFail implements Action {
  readonly type = TagFamiliesActionTypes.LoadTagFamiliesFail;

  constructor(public payload: Error | any) {}
}

export class LoadTagFamily implements Action {
  readonly type = TagFamiliesActionTypes.LoadTagFamily;

  constructor(public payload: number | string) {}
}

export class LoadTagFamilySuccess implements Action {
  readonly type = TagFamiliesActionTypes.LoadTagFamilySuccess;

  constructor(public payload: TagFamily) {}
}

export class LoadTagFamilyFail implements Action {
  readonly type = TagFamiliesActionTypes.LoadTagFamilyFail;

  constructor(public payload: Error | any) {}
}

export class CreateTagFamily implements Action {
  readonly type = TagFamiliesActionTypes.CreateTagFamily;

  constructor(public payload: Partial<TagFamily>) {}
}

export class CreateTagFamilySuccess implements Action {
  readonly type = TagFamiliesActionTypes.CreateTagFamilySuccess;
  constructor(public payload: TagFamily) {}
}

export class CreateTagFamilyFail implements Action {
  readonly type = TagFamiliesActionTypes.CreateTagFamilyFail;

  constructor(public payload: Error | any) {}
}

export class UpdateTagFamily implements Action {
  readonly type = TagFamiliesActionTypes.UpdateTagFamily;

  constructor(public payload: Partial<TagFamily>) {}
}

export class UpdateTagFamilySuccess implements Action {
  readonly type = TagFamiliesActionTypes.UpdateTagFamilySuccess;
  constructor(public payload: Partial<TagFamily>) {}
}

export class UpdateTagFamilyFail implements Action {
  readonly type = TagFamiliesActionTypes.UpdateTagFamilyFail;

  constructor(public payload: Error | any) {}
}

export class ReorderTagFamilies implements Action {
  readonly type = TagFamiliesActionTypes.ReorderTagFamilies;

  constructor(public payload: ChangeOrderFamilyTagBody) {}
}

export class ReorderTagFamiliesSuccess implements Action {
  readonly type = TagFamiliesActionTypes.ReorderTagFamiliesSuccess;
}

export class ReorderTagFamiliesFail implements Action {
  readonly type = TagFamiliesActionTypes.ReorderTagFamiliesFail;

  constructor(public payload: Error | any) {}
}

export type TagFamiliesActions =
  | LoadTagFamilies
  | LoadTagFamiliesSuccess
  | LoadTagFamiliesFail
  | LoadTagFamily
  | LoadTagFamilySuccess
  | LoadTagFamilyFail
  | CreateTagFamily
  | CreateTagFamilySuccess
  | CreateTagFamilyFail
  | UpdateTagFamily
  | UpdateTagFamilySuccess
  | UpdateTagFamilyFail
  | ReorderTagFamilies
  | ReorderTagFamiliesSuccess
  | ReorderTagFamiliesFail;
