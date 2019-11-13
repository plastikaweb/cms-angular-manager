import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    NavigationTriggerComponent
} from '@app/layout/components/navigation-trigger/navigation-trigger.component';

describe('NavigationTriggerComponent', () => {
  let component: NavigationTriggerComponent;
  let fixture: ComponentFixture<NavigationTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [NavigationTriggerComponent],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTriggerComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should emit emitSidebarVisibility', () => {
    let toggleAction;
    component.emitSidebarVisibility.subscribe(() => (toggleAction = true));
    component.toggleSidebar();
    expect(toggleAction).toBeTruthy();
  });
});
