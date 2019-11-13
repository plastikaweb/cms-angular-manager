import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { getTagFamiliesLoaded, LoadTagFamilies } from '@app/entities/tag-families';
import { RootState } from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckTagFamiliesGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getTagFamiliesLoaded),
      map(tagFamiliesLoaded => {
        if (!tagFamiliesLoaded) {
          this.store.dispatch(new LoadTagFamilies());
        }
        return tagFamiliesLoaded;
      }),
      filter((tagFamiliesLoaded: boolean) => !!tagFamiliesLoaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
