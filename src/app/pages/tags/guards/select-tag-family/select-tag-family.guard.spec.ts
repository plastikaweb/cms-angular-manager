import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SelectTagFamilyGuard } from './select-tag-family.guard';

describe('SelectTagFamilyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [SelectTagFamilyGuard],
    });
  });

  test('should be created', inject(
    [SelectTagFamilyGuard],
    (guard: SelectTagFamilyGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
