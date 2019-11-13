import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TagFamiliesService } from './tag-families.service';

describe('TagFamiliesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  test('should be created', () => {
    const service: TagFamiliesService = TestBed.get(TagFamiliesService);
    expect(service).toBeTruthy();
  });
});
