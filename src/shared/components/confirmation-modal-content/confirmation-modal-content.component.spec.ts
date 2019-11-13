import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalRef } from 'ngx-bootstrap';

import { ConfirmationModalContentComponent } from './confirmation-modal-content.component';

describe('ConfirmationModalContentComponent', () => {
  let component: ConfirmationModalContentComponent;
  let fixture: ComponentFixture<ConfirmationModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationModalContentComponent],
      providers: [BsModalRef],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalContentComponent);
    component = fixture.componentInstance;
    component.config = {
      visible: false,
      title: 'the title',
      data: { id: 1, name: 'the name' },
      action: () => {},
    };
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should emit emitAction', () => {
    let emitAction = null;
    component.emitAction.subscribe(action => (emitAction = action));
    component.doAction();
    expect(emitAction).toEqual(component.config.data);
  });

  test('should emit emitClose action', () => {
    let closeAction = false;
    component.emitClose.subscribe(() => (closeAction = true));
    component.closeModal();
    expect(closeAction).toBeTruthy();
  });
});
