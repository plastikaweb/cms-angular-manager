import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CheckTagsGuard } from './check-tags.guard';

describe('CheckTagsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CheckTagsGuard],
    });
  });

  test('should be created', inject(
    [CheckTagsGuard],
    (guard: CheckTagsGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
