import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { actionsListMock } from '@shared/mocks';

import { DropdownMenuComponent } from './dropdown-menu.component';

describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should check the selected action', () => {
    const selectedAction = 'action 1';
    let checkedAction;
    component.emitAction.subscribe(action => (checkedAction = action));
    component.dispatchAction(selectedAction);

    expect(checkedAction).toBe(selectedAction);
  });

  test('should return track action id', () => {
    expect(component.trackByAction(0, actionsListMock[0])).toEqual(
      actionsListMock[0].id
    );
  });
});
