import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Room } from '@shared/models';

export enum RoomsActionTypes {
  LoadRooms = '[Rooms] Load Rooms',
  LoadRoomsSuccess = '[Rooms] Load Rooms Success',
  LoadRoomsFail = '[Rooms] Load Rooms Fail',
  CreateRoom = '[Rooms] Create Room',
  CreateRoomSuccess = '[Rooms] Create Room Success',
  CreateRoomFail = '[Rooms] Create Room Fail',
  UpdateRoom = '[Rooms] Update Room',
  UpdateRoomSuccess = '[Rooms] Update Room Success',
  UpdateRoomFail = '[Rooms] Update Room Fail',
  SetSelectedRoom = '[Rooms] Set Selected Room',
  ReorderRooms = '[Rooms] Reorder rooms list',
  ReorderRoomsSuccess = '[Rooms] Reorder rooms Success',
  ReorderRoomsFail = '[Rooms] Reorder rooms Fail',
  RemoveRoom = '[Rooms] Remove Room',
  RemoveRoomSuccess = '[Rooms] Remove Room Success',
  RemoveRoomFail = '[Rooms] Remove Room Fail',
}

export class LoadRooms implements Action {
  readonly type = RoomsActionTypes.LoadRooms;
}

export class LoadRoomsSuccess implements Action {
  readonly type = RoomsActionTypes.LoadRoomsSuccess;

  constructor(public payload: Array<Room>) {}
}

export class LoadRoomsFail implements Action {
  readonly type = RoomsActionTypes.LoadRoomsFail;

  constructor(public payload: Error | any) {}
}

export class CreateRoom implements Action {
  readonly type = RoomsActionTypes.CreateRoom;

  constructor(public payload: Partial<Room>) {}
}

export class CreateRoomSuccess implements Action {
  readonly type = RoomsActionTypes.CreateRoomSuccess;
  constructor(public payload: Room) {}
}

export class CreateRoomFail implements Action {
  readonly type = RoomsActionTypes.CreateRoomFail;

  constructor(public payload: Error | any) {}
}

export class UpdateRoom implements Action {
  readonly type = RoomsActionTypes.UpdateRoom;

  constructor(public payload: { id: number; changes: Partial<Room> }) {}
}

export class UpdateRoomSuccess implements Action {
  readonly type = RoomsActionTypes.UpdateRoomSuccess;
  constructor(public payload: Update<Room>) {}
}

export class UpdateRoomFail implements Action {
  readonly type = RoomsActionTypes.UpdateRoomFail;

  constructor(public payload: Error | any) {}
}

export class SetSelectedRoom implements Action {
  readonly type = RoomsActionTypes.SetSelectedRoom;

  constructor(public payload: number) {}
}

export class ReorderRooms implements Action {
  readonly type = RoomsActionTypes.ReorderRooms;

  constructor(public payload: Array<number | string>) {}
}

export class ReorderRoomsSuccess implements Action {
  readonly type = RoomsActionTypes.ReorderRoomsSuccess;
}

export class ReorderRoomsFail implements Action {
  readonly type = RoomsActionTypes.ReorderRoomsFail;

  constructor(public payload: Error | any) {}
}

export class RemoveRoom implements Action {
  readonly type = RoomsActionTypes.RemoveRoom;

  constructor(public payload: Partial<Room>) {}
}

export class RemoveRoomSuccess implements Action {
  readonly type = RoomsActionTypes.RemoveRoomSuccess;
  constructor(public payload: Partial<Room>) {}
}

export class RemoveRoomFail implements Action {
  readonly type = RoomsActionTypes.RemoveRoomFail;

  constructor(public payload: Error | any) {}
}

export type RoomsActions =
  | LoadRooms
  | LoadRoomsSuccess
  | LoadRoomsFail
  | CreateRoom
  | CreateRoomSuccess
  | CreateRoomFail
  | UpdateRoom
  | UpdateRoomSuccess
  | UpdateRoomFail
  | SetSelectedRoom
  | ReorderRooms
  | ReorderRoomsSuccess
  | ReorderRoomsFail
  | RemoveRoom
  | RemoveRoomSuccess
  | RemoveRoomFail;
