import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { getActionsLoaded, LoadActions } from '@app/entities/actions';
import { RootState } from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckActionsGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getActionsLoaded),
      map(actionsLoaded => {
        if (!actionsLoaded) {
          this.store.dispatch(new LoadActions());
        }
        return actionsLoaded;
      }),
      filter((roomsLoaded: boolean) => !!roomsLoaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
