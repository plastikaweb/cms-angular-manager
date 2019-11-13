import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TagsService } from './tags.service';

describe('TagsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  test('should be created', () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service).toBeTruthy();
  });
});
