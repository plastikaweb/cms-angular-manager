import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import {
    getTagFamiliesEntity, getTagFamiliesLoaded, getTagFamiliesLoading, LoadTagFamilies,
    LoadTagFamily, LoadTagFamilyFail
} from '@app/entities/tag-families';
import { SelectTagFamily } from '@app/entities/tags';
import { getRouterPaths, Go, RootState, ShowNotificacion } from '@app/root/store';
import { select, Store } from '@ngrx/store';
import { NotificationTypes } from '@shared/models';
import { RouterUtils } from '@shared/utils';

import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SelectTagFamilyGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const { params } = RouterUtils.extractActivatedRouterData(next.root);
    const { tagFamilyId } = params;

    return this.store.pipe(
      select(getTagFamiliesEntity, tagFamilyId),
      withLatestFrom(this.store.pipe(select(getTagFamiliesLoaded))),
      map(([selectedTagFamily, loaded]) => {
        if (!loaded) {
          this.store.dispatch(new LoadTagFamilies());
        } else if (selectedTagFamily) {
          this.store.dispatch(new SelectTagFamily(selectedTagFamily));
        }
        return !!selectedTagFamily;
      }),
      switchMap(tagFamilyExists =>
        this.store
          .pipe(select(getTagFamiliesLoading))
          .pipe(
            withLatestFrom(
              [tagFamilyExists],
              this.store.pipe(select(getRouterPaths))
            )
          )
      ),
      filter(([isLoading, , paths]) => !isLoading && !!paths.length),
      first(),
      map(([, exists, paths]) => {
        if (!exists && paths.length) {
          this.store.dispatch(new Go({ path: ['tag-families'] }));
          this.store.dispatch(
            new ShowNotificacion({
              message: `La familia de etiquetas con id ${tagFamilyId} no existe.`,
              type: NotificationTypes.error,
              title: `Crear etiqueta`,
              config: { timeOut: 10000 },
            })
          );
        }
        return exists;
      })
    );
  }
}
