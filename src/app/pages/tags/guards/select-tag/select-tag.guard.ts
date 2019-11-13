import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import {
    getSelectedTag, getTagsLoading, getTagsSelectedTagId, LoadTag, SelectTag
} from '@app/entities/tags';
import { RootState } from '@app/root/store';
import { select, Store } from '@ngrx/store';
import { RouterUtils } from '@shared/utils';

import { Observable } from 'rxjs';
import { filter, first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SelectTagGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const { params } = RouterUtils.extractActivatedRouterData(next.root);
    const { tagId } = params;

    this.store.dispatch(new SelectTag(tagId));

    return this.store.pipe(
      select(getTagsSelectedTagId),
      filter(selectedTagId => !!selectedTagId),
      switchMap(() => this.store.pipe(select(getSelectedTag))),
      tap(selectedTag => {
        if (!selectedTag) {
          this.store.dispatch(new LoadTag(tagId));
        }
      }),
      withLatestFrom(this.store.pipe(select(getTagsLoading))),
      filter(([, isLoading]) => !isLoading),
      first(),
      map(([selectedTag]) => !!selectedTag)
    );
  }
}
