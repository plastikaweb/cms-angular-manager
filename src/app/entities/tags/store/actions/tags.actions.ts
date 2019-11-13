import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Tag, TagApiParams, TagFamily, TagsApiResponse } from '@shared/models';

export enum TagsActionTypes {
  LoadTags = '[Tags] Load Tags',
  LoadTagsSuccess = '[Tags] Load Tags Success',
  LoadTagsFail = '[Tags] Load Tags Fail',
  ChangePaginationFilterTags = '[Tags] Change Pagination and or Filtering Tags',
  LoadTag = '[Tags] Load Tag',
  LoadTagSuccess = '[Tags] Load Tag Success',
  LoadTagFail = '[Tags] Load Tag Fail',
  SelectTag = '[Tags] Selected Tag By Id',
  SelectTagFamily = '[Tags] Selected Tag Family',
  UpdateTag = '[Tags] Update Tag',
  UpdateTagSuccess = '[Tags] Update Tag Success',
  UpdateTagFail = '[Tags] Update Tag Fail',
  CreateTag = '[Tags] Create Tag',
  CreateTagSuccess = '[Tags] Create Tag Success',
  CreateTagFail = '[Tags] Create Tag Fail',
}

export class LoadTags implements Action {
  readonly type = TagsActionTypes.LoadTags;

  constructor(public payload?: TagApiParams) {}
}

export class LoadTagsSuccess implements Action {
  readonly type = TagsActionTypes.LoadTagsSuccess;

  constructor(public payload: TagsApiResponse) {}
}

export class LoadTagsFail implements Action {
  readonly type = TagsActionTypes.LoadTagsFail;

  constructor(public payload: Error | any) {}
}

export class ChangePaginationFilterTags implements Action {
  readonly type = TagsActionTypes.ChangePaginationFilterTags;

  constructor(
    public payload: { params: TagApiParams; matchesCount?: number }
  ) {}
}

export class LoadTag implements Action {
  readonly type = TagsActionTypes.LoadTag;

  constructor(public payload: number | string) {}
}

export class LoadTagSuccess implements Action {
  readonly type = TagsActionTypes.LoadTagSuccess;

  constructor(public payload: Tag) {}
}

export class LoadTagFail implements Action {
  readonly type = TagsActionTypes.LoadTagFail;

  constructor(public payload: Error | any) {}
}

export class SelectTag implements Action {
  readonly type = TagsActionTypes.SelectTag;

  constructor(public payload: number | string) {}
}

export class SelectTagFamily implements Action {
  readonly type = TagsActionTypes.SelectTagFamily;

  constructor(public payload: Partial<TagFamily>) {}
}

export class UpdateTag implements Action {
  readonly type = TagsActionTypes.UpdateTag;

  constructor(public payload: { id: number; changes: Partial<Tag> }) {}
}

export class UpdateTagSuccess implements Action {
  readonly type = TagsActionTypes.UpdateTagSuccess;
  constructor(public payload: Update<Tag>) {}
}

export class UpdateTagFail implements Action {
  readonly type = TagsActionTypes.UpdateTagFail;

  constructor(public payload: Error | any) {}
}
export class CreateTag implements Action {
  readonly type = TagsActionTypes.CreateTag;

  constructor(public payload: Partial<Tag>) {}
}

export class CreateTagSuccess implements Action {
  readonly type = TagsActionTypes.CreateTagSuccess;
  constructor(public payload: Tag) {}
}

export class CreateTagFail implements Action {
  readonly type = TagsActionTypes.CreateTagFail;

  constructor(public payload: Error | any) {}
}

export type TagsActions =
  | LoadTags
  | LoadTagsSuccess
  | LoadTagsFail
  | ChangePaginationFilterTags
  | LoadTag
  | LoadTagSuccess
  | LoadTagFail
  | SelectTag
  | SelectTagFamily
  | UpdateTag
  | UpdateTagSuccess
  | UpdateTagFail
  | CreateTag
  | CreateTagSuccess
  | CreateTagFail;
