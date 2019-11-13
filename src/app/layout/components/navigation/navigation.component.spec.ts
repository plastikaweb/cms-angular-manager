import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@app/layout/components/navigation/navigation.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), PerfectScrollbarModule],
      declarations: [NavigationComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should return track idx', () => {
    expect(
      component.trackByItem(0, { id: 'home', title: 'home', type: 'item' })
    ).toEqual('home');
  });
});
