import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownMenuModule } from '@shared/components/dropdown-menu/dropdown-menu.module';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [DropdownMenuModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
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
});
