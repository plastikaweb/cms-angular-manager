import { async, TestBed } from '@angular/core/testing';
import { PageFactoryService } from '@app/root/services/page/page-factory.service';
import { StoreModule } from '@ngrx/store';
import { BaseSandboxMock } from '@shared/mocks';

import { BaseSandbox } from './base.sandbox';

describe('BaseSandbox', () => {
  let sandbox: BaseSandbox;
  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        { provide: BaseSandbox, useClass: BaseSandboxMock },
        PageFactoryService,
      ],
    })));

  beforeEach(() => {
    sandbox = TestBed.get(BaseSandbox);
  });
  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });
});
