import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigServiceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  test('should be created', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });
});
