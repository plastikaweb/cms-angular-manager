import { Injectable } from '@angular/core';
import { RoomsService } from '@app/entities/rooms/services/rooms.service';
import {
    CreateRoom, CreateRoomFail, CreateRoomSuccess, LoadRoomsFail, LoadRoomsSuccess, RemoveRoom,
    RemoveRoomFail, RemoveRoomSuccess, ReorderRooms, ReorderRoomsFail, ReorderRoomsSuccess,
    RoomsActionTypes, UpdateRoom, UpdateRoomFail, UpdateRoomSuccess
} from '@app/entities/rooms/store/actions/rooms.actions';
import { RoomsState } from '@app/entities/rooms/store/reducers/rooms.reducer';
import { Go } from '@app/root/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OptApiResponse, Room } from '@shared/models';

import { combineLatest, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class RoomsEffects {
  @Effect()
  loadRooms$ = this.actions$.pipe(
    ofType(RoomsActionTypes.LoadRooms),
    exhaustMap(() => this.roomsService.list()),
    map(
      (response: OptApiResponse<Array<Room>>) =>
        new LoadRoomsSuccess(response.payload)
    ),
    catchError(error => of(new LoadRoomsFail(error)))
  );

  @Effect()
  createRoom$ = this.actions$.pipe(
    ofType(RoomsActionTypes.CreateRoom),
    map((action: CreateRoom) => action.payload),
    exhaustMap((room: Partial<Room>) => this.roomsService.create(room)),
    map(
      (response: OptApiResponse<Room>) =>
        new CreateRoomSuccess(response.payload)
    ),
    catchError(error => of(new CreateRoomFail(error)))
  );

  @Effect()
  createRoomSuccess$ = this.actions$.pipe(
    ofType(RoomsActionTypes.CreateRoomSuccess),
    map(() => new Go({ path: ['rooms'] }))
  );

  @Effect()
  updateRoom$ = this.actions$.pipe(
    ofType(RoomsActionTypes.UpdateRoom),
    map((action: UpdateRoom) => action.payload),
    exhaustMap(({ id, changes }) => this.roomsService.update(id, changes)),
    map((response: OptApiResponse<Room>) => {
      const { id, ...changes } = response.payload;
      return new UpdateRoomSuccess({ id, changes });
    }),
    catchError(error => of(new UpdateRoomFail(error)))
  );

  @Effect()
  updateRoomsOrdering$ = this.actions$.pipe(
    ofType(RoomsActionTypes.ReorderRooms),
    map((action: ReorderRooms) => action.payload),
    exhaustMap((indexes: Array<number>) =>
      this.roomsService.updatePositions<Array<number>>(indexes)
    ),
    map(() => new ReorderRoomsSuccess()),
    catchError(error => of(new ReorderRoomsFail(error)))
  );

  @Effect()
  removeRoom$ = this.actions$.pipe(
    ofType(RoomsActionTypes.RemoveRoom),
    map((action: RemoveRoom) => action.payload),

    exhaustMap(({ id, name }) => {
      return combineLatest(of(name), this.roomsService.delete(id));
    }),
    map(data => {
      const output = {
        name: data[0],
        id: data[1].payload.id,
      };
      return new RemoveRoomSuccess(output);
    }),
    catchError(error => of(new RemoveRoomFail(error)))
  );

  constructor(
    private actions$: Actions,
    private roomsService: RoomsService,
    private store: Store<RoomsState>
  ) {}
}
