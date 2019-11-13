import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RoomsService } from './rooms.service';

describe('RoomsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  test('should be created', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    expect(service).toBeTruthy();
  });
});
