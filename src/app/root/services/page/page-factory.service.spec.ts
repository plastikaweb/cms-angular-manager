import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PageFactoryService } from './page-factory.service';

describe('PageFactoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    })
  );

  test('should be created', () => {
    const service: PageFactoryService = TestBed.get(PageFactoryService);
    expect(service).toBeTruthy();
  });
});
