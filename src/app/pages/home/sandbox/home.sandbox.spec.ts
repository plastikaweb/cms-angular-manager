import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { HomeSandbox } from './home.sandbox';

describe('HomeSandbox', () => {
  let sandbox: HomeSandbox;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [HomeSandbox],
    });
    sandbox = TestBed.get(HomeSandbox);
  });

  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });
});
