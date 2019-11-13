import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CheckTagFamiliesGuard } from './check-tag-families.guard';

describe('CheckTagFamiliesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CheckTagFamiliesGuard],
    });
  });

  test('should be created', inject(
    [CheckTagFamiliesGuard],
    (guard: CheckTagFamiliesGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
