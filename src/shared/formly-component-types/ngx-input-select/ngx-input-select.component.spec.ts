import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxInputSelectComponent } from './ngx-input-select.component';

describe('NgxInputSelectComponent', () => {
  let component: NgxInputSelectComponent;
  let fixture: ComponentFixture<NgxInputSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxInputSelectComponent],
      imports: [
        ReactiveFormsModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot(),
        NgxSelectModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputSelectComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
