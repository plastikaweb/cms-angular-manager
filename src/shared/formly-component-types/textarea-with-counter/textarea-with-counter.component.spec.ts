import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { TextareaWithCounterComponent } from './textarea-with-counter.component';

describe('TextareaWithCounterComponent', () => {
  let component: TextareaWithCounterComponent;
  let fixture: ComponentFixture<TextareaWithCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot(),
      ],
      declarations: [TextareaWithCounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithCounterComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
