import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ConfigService } from '@app/root/services/config/config.service';
import * as fromRoot from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, switchMap, withLatestFrom } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CheckClientGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.RootState>,
    @Inject(DOCUMENT) private document: Document
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.getMainPathFromStore().pipe(
      switchMap(([path, clientSlug]) =>
        path && clientSlug ? of(true) : this.leaveApp()
      ),
      catchError(() => this.leaveApp())
    );
  }

  private getMainPathFromStore(): Observable<any> {
    return this.store.pipe(
      select(fromRoot.getRouterPaths),
      filter(paths => !!paths.length),
      first(),
      map(paths => paths[0]),
      withLatestFrom(this.store.pipe(select(fromRoot.getClientSlug))),
      first()
    );
  }

  private leaveApp(): Observable<boolean> {
    this.document.location.href = ConfigService.settings.externalUrl;
    return of(false);
  }
}
