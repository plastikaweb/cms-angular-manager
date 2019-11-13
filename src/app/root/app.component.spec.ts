import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppSandbox } from '@app/root/sandbox/app.sandbox';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), StoreModule.forRoot({})],
      declarations: [AppComponent],
      providers: [AppSandbox, { provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));

  test('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
