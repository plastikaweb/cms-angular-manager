import { Injectable } from '@angular/core';
import { ActionsService } from '@app/entities/actions/services/actions.service';
import {
    ActionsActionTypes, LoadActionsFail, LoadActionsSuccess
} from '@app/entities/actions/store/actions/actions.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, OptApiResponse } from '@shared/models';

import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class ActionsEffects {
  @Effect()
  loadActions$ = this.actions$.pipe(
    ofType(ActionsActionTypes.LoadActions),
    exhaustMap(() => this.actionsService.list()),
    map(
      (response: OptApiResponse<Array<Action>>) =>
        new LoadActionsSuccess(response.payload)
    ),
    catchError(error => of(new LoadActionsFail(error)))
  );

  constructor(
    private actions$: Actions,
    private actionsService: ActionsService
  ) {}
}
