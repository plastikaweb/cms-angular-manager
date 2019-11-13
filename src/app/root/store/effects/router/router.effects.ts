import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as fromRoot from '@app/root/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';

import { getRouterPaths } from '../../selectors';

import { isNil } from 'lodash';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(fromRoot.RouterActionTypes.Go),
    map((action: fromRoot.Go) => action.payload),
    withLatestFrom(this.store.pipe(select(getRouterPaths))),
    map(([{ path, query: queryParams, extras }, paths]) => {
      const realPath = [paths[0], ...path];
      return this.router.navigate(realPath, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(fromRoot.RouterActionTypes.Back),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(fromRoot.RouterActionTypes.Forward),
    tap(() => this.location.forward())
  );

  @Effect({ dispatch: false })
  updateTitle$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    withLatestFrom(
      this.store.select(fromRoot.getRouterDataTitle),
      this.store.select(fromRoot.getClientTitle)
    ),
    map(([, routeTitle, clientTitle]: [never, string, string]) => [
      routeTitle,
      clientTitle,
    ]),
    filter(
      ([routeTitle, clientTitle]: [string, string]) =>
        !isNil(routeTitle) && !isNil(clientTitle)
    ),
    map(([routerTitle, clientTitle]: [string, string]) =>
      this.titleService.setTitle(`${clientTitle} - ${routerTitle}`)
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private titleService: Title,
    private store: Store<fromRoot.RootState>
  ) {}
}
