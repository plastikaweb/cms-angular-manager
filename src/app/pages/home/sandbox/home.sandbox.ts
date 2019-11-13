import { Injectable } from '@angular/core';
import { PageFactoryService } from '@app/root/services/page/page-factory.service';
import { BaseSandbox } from '@shared/services/sandbox/base.sandbox';

@Injectable({
  providedIn: 'root',
})
export class HomeSandbox extends BaseSandbox {
  constructor(protected pageService: PageFactoryService) {
    super(pageService);
  }
}
