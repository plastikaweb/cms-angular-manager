import { ConfigService } from '@app/root/services/config/config.service';
import { PageFactoryService } from '@app/root/services/page/page-factory.service';
import { PageConfigItems } from '@shared/models';

import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

export abstract class BaseSandbox {
  pageConfig$: Observable<PageConfigItems>;

  constructor(protected pageService: PageFactoryService) {
    this.pageConfig$ = this.pageService.getInstance().pipe(
      map(instance => instance.getConfig()),
      first()
    );
  }

  getCultures() {
    return ConfigService.settings.cultures;
  }
}
