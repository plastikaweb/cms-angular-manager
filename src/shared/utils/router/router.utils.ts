import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateUrl } from '@app/root/store/reducers';

import { map } from 'lodash';

export class RouterUtils {
  static extractActivatedRouterData(
    snapshot: ActivatedRouteSnapshot
  ): RouterStateUrl {
    let params = {};
    let paths: Array<string> = [];
    let queryParams;
    while (snapshot.firstChild) {
      params = { ...params, ...snapshot.params };
      queryParams = snapshot.queryParams;
      if (snapshot.url.length) {
        paths = [...paths, ...map(snapshot.url, 'path')];
      }
      snapshot = snapshot.firstChild;
    }

    return {
      url: paths.join('/'),
      params,
      queryParams,
      paths,
      title: snapshot.data.title,
      currentPage: (paths && paths[1]) || '',
    };
  }
}
