import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProgressModule } from '@ngx-progressbar/core';

import { ActivitybarComponent } from './activitybar.component';

import { of } from 'rxjs';

describe('ActivitybarComponent', () => {
  let component: ActivitybarComponent;
  let fixture: ComponentFixture<ActivitybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgProgressModule],
      declarations: [ActivitybarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ActivitybarComponent);
    component = fixture.componentInstance;
  }));

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should set progressRef on init', () => {
    component.isLoading$ = of(false);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.progressRef).toBeDefined();
  });
});
