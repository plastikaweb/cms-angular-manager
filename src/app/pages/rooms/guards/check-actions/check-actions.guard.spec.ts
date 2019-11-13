import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CheckActionsGuard } from './check-actions.guard';

describe('CheckActionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CheckActionsGuard],
    });
  });

  test('should be created', inject(
    [CheckActionsGuard],
    (guard: CheckActionsGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
