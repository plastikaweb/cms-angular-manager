import { ActionsActionTypes, LoadActionsFail } from '@app/entities/actions';
import {
    CreateRoomFail, CreateRoomSuccess, LoadRoomsFail, RemoveRoomFail, RemoveRoomSuccess,
    ReorderRoomsFail, ReorderRoomsSuccess, RoomsActionTypes, UpdateRoomFail, UpdateRoomSuccess
} from '@app/entities/rooms';
import {
    CreateTagFamilyFail, CreateTagFamilySuccess, LoadTagFamiliesFail, LoadTagFamilyFail,
    ReorderTagFamiliesFail, ReorderTagFamiliesSuccess, TagFamiliesActionTypes, UpdateTagFamilyFail,
    UpdateTagFamilySuccess
} from '@app/entities/tag-families';
import {
    CreateTagFail, CreateTagSuccess, LoadTagFail, LoadTagsFail, TagsActionTypes, UpdateTagFail,
    UpdateTagSuccess
} from '@app/entities/tags';

export type showNotificationTypes =
  | LoadRoomsFail
  | CreateRoomFail
  | UpdateRoomFail
  | RemoveRoomFail
  | ReorderRoomsFail
  | LoadActionsFail
  | LoadTagFamiliesFail
  | LoadTagFamilyFail
  | ReorderTagFamiliesFail
  | CreateTagFamilyFail
  | UpdateTagFamilyFail
  | LoadTagsFail
  | LoadTagFail
  | UpdateTagFail
  | CreateTagFail
  | CreateRoomSuccess
  | UpdateRoomSuccess
  | RemoveRoomSuccess
  | ReorderRoomsSuccess
  | ReorderTagFamiliesSuccess
  | CreateTagFamilySuccess
  | UpdateTagFamilySuccess
  | UpdateTagSuccess
  | CreateTagSuccess;

export const showNotificationActions = [
  RoomsActionTypes.LoadRoomsFail,
  RoomsActionTypes.CreateRoomFail,
  RoomsActionTypes.UpdateRoomFail,
  RoomsActionTypes.RemoveRoomFail,
  RoomsActionTypes.ReorderRoomsFail,
  ActionsActionTypes.LoadActionsFail,
  TagFamiliesActionTypes.LoadTagFamiliesFail,
  TagFamiliesActionTypes.LoadTagFamilyFail,
  TagFamiliesActionTypes.ReorderTagFamiliesFail,
  TagFamiliesActionTypes.CreateTagFamilyFail,
  TagFamiliesActionTypes.UpdateTagFamilyFail,
  TagsActionTypes.LoadTagsFail,
  TagsActionTypes.LoadTagFail,
  TagsActionTypes.UpdateTagFail,
  TagsActionTypes.CreateTagFail,
  RoomsActionTypes.CreateRoomSuccess,
  RoomsActionTypes.UpdateRoomSuccess,
  RoomsActionTypes.RemoveRoomSuccess,
  RoomsActionTypes.ReorderRoomsSuccess,
  TagFamiliesActionTypes.ReorderTagFamiliesSuccess,
  TagFamiliesActionTypes.CreateTagFamilySuccess,
  TagFamiliesActionTypes.UpdateTagFamilySuccess,
  TagsActionTypes.UpdateTagSuccess,
  TagsActionTypes.CreateTagSuccess,
];
