import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ChecPendingEntityGuard } from './check-pending-entity.guard';

describe('ChecPendingEntityGuard', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    })
  );

  test('should be created', () => {
    const service: ChecPendingEntityGuard = TestBed.get(ChecPendingEntityGuard);
    expect(service).toBeTruthy();
  });
});
