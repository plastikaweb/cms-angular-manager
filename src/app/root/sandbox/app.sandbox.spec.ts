import { inject, TestBed } from '@angular/core/testing';
import { AppSandbox } from '@app/root/sandbox/app.sandbox';
import { StoreModule } from '@ngrx/store';

describe('AppSandbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [AppSandbox],
    });
  });

  test('should be created', inject([AppSandbox], (service: AppSandbox) => {
    expect(service).toBeTruthy();
  }));
});
