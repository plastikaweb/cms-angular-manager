import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ActionsService } from './actions.service';

describe('ActionsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ActionsService],
    })
  );

  test('should be created', () => {
    const service: ActionsService = TestBed.get(ActionsService);
    expect(service).toBeTruthy();
  });
});
