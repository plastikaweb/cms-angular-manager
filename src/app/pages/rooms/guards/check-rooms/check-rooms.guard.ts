import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { getRoomsLoaded, LoadRooms } from '@app/entities/rooms';
import { RootState } from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckRoomsGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(getRoomsLoaded),
      map(roomsLoaded => {
        if (!roomsLoaded) {
          this.store.dispatch(new LoadRooms());
        }
        return roomsLoaded;
      }),
      filter((roomsLoaded: boolean) => !!roomsLoaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
