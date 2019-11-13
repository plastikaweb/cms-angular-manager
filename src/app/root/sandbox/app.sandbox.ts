import { Injectable } from '@angular/core';
import * as fromRoot from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { ConfigService } from '../services/config/config.service';

import { isNil } from 'lodash';
import { filter, first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppSandbox {
  constructor(private store: Store<fromRoot.RootState>) {
    this.store
      .pipe(
        select(fromRoot.getRouterPaths),
        filter(paths => !isNil(paths) && !!paths.length),
        map(paths => paths[0]),
        first()
      )
      .subscribe(path =>
        this.store.dispatch(
          new fromRoot.SetClient(ConfigService.settings.clients[path])
        )
      );
  }
}
