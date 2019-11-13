import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';

describe('RestService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  test('should be created', () => {
    const service: RestService<null, null, null> = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
