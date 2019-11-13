import { Injectable } from '@angular/core';
import { getRouterCurrentPage, RootState } from '@app/root/store';
import { HomeConfig, RoomsConfig, TagFamiliesConfig, TagsConfig } from '@config/pages';
import { select, Store } from '@ngrx/store';
import { PageConfig } from '@shared/models';

import { ConfigService } from '../config/config.service';

import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PageFactoryService {
  constructor(private store: Store<RootState>) {}

  private getPageConfig(page: string): any {
    const { pages } = ConfigService.settings;

    switch (page) {
      case pages.home.segment: {
        return HomeConfig;
      }
      case pages.rooms.segment: {
        return RoomsConfig;
      }
      case pages.tags.segment: {
        return TagsConfig;
      }
      case pages.tagFamilies.segment: {
        return TagFamiliesConfig;
      }
    }
    return null;
  }

  getInstance(): Observable<PageConfig> {
    return this.store.pipe(
      select(getRouterCurrentPage),
      map(page => {
        const ConfigClass = this.getPageConfig(page);
        return (ConfigClass && new ConfigClass(this.store)) || null;
      }),
      publishReplay(1),
      refCount()
    );
  }
}
