import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CheckRoomsGuard } from './check-rooms.guard';

describe('CheckRoomsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CheckRoomsGuard],
    });
  });

  test('should be created', inject(
    [CheckRoomsGuard],
    (guard: CheckRoomsGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
