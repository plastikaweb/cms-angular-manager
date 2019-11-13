import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { PagesComponent } from '@app/pages/pages.component';
import { StoreModule } from '@ngrx/store';

describe('PagesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), StoreModule.forRoot({})],
      declarations: [PagesComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));

  test('should be created', () => {
    const fixture = TestBed.createComponent(PagesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
