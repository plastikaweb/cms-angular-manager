import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ChangePaginationFilterTags, getTagsInitiallyLoaded, LoadTags } from '@app/entities/tags';
import { RootState } from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckTagsGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(getTagsInitiallyLoaded),
      map(tagsLoaded => {
        if (!tagsLoaded) {
          this.store.dispatch(new LoadTags({ number: 1 }));
        } else {
          this.store.dispatch(
            new ChangePaginationFilterTags({ params: { name: '' } })
          );
        }
        return tagsLoaded;
      }),
      filter((tagsLoaded: boolean) => !!tagsLoaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
