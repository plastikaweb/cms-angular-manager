import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalService, ModalModule } from 'ngx-bootstrap';

import { ModalWrapperComponent } from './modal-wrapper.component';

describe('ModalWrapperComponent', () => {
  let component: ModalWrapperComponent;
  let fixture: ComponentFixture<ModalWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
      declarations: [ModalWrapperComponent],
      providers: [BsModalService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWrapperComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
