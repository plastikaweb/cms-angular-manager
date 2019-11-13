import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SelectTagGuard } from './select-tag.guard';

describe('SelectTagGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [SelectTagGuard],
    });
  });

  test('should be created', inject(
    [SelectTagGuard],
    (guard: SelectTagGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
