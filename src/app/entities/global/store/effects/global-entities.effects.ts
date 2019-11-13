import { Injectable } from '@angular/core';
import { SetPendingEntity } from '@app/entities/global/store/actions/global-entities.actions';
import { RoomsActionTypes } from '@app/entities/rooms/store/actions/rooms.actions';
import { TagsActionTypes } from '@app/entities/tags';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

@Injectable()
export class GlobalEntitiesEffects {
  @Effect()
  crudEntity$ = this.actions$.pipe(
    ofType(
      RoomsActionTypes.CreateRoomSuccess,
      RoomsActionTypes.UpdateRoomSuccess,
      RoomsActionTypes.RemoveRoomSuccess,
      TagsActionTypes.CreateTagSuccess,
      TagsActionTypes.UpdateTagSuccess
    ),
    map(() => new SetPendingEntity(false))
  );

  constructor(private actions$: Actions) {}
}
