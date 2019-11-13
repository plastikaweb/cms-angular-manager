import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CheckClientGuard } from './check-client.guard';

describe('CheckClientGuard', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    })
  );

  test('should be created', () => {
    const service: CheckClientGuard = TestBed.get(CheckClientGuard);
    expect(service).toBeTruthy();
  });
});
