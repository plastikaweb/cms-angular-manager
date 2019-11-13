import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContainerModule } from '@shared/components/form-container/form-container.module';

import { AccordionGroupBodyComponent } from './accordion-group-body.component';

describe('AccordionGroupBodyComponent', () => {
  let component: AccordionGroupBodyComponent;
  let fixture: ComponentFixture<AccordionGroupBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupBodyComponent],
      imports: [FormContainerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupBodyComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should return model name or title', () => {
    component.model = { name: 'the name' };
    expect(component.getName()).toBe('the name');
    component.model = { title: 'the title' };
    expect(component.getName()).toBe('the title');
  });

  describe('sendHasChanged method', () => {
    test('should emit hasChanged', () => {
      component.hasChanged = false;
      let changedAction = null;
      component.emitHasChanged.subscribe(action => (changedAction = action));
      component.sendHasChanged();
      expect(changedAction).toBeTruthy();
      expect(component.hasChanged).toBeTruthy();
    });

    test('should not emit hasChanged', () => {
      component.hasChanged = true;
      let changedAction = null;
      component.emitHasChanged.subscribe(action => (changedAction = action));
      component.sendHasChanged();
      expect(changedAction).toBeNull();
    });
  });

  describe('should submit model', () => {
    const model = { id: 1, name: 'the name' };

    test('with no presenter cleaner', () => {
      let submitAction = null;
      component.emitChange.subscribe(action => (submitAction = action));
      component.submit(model);
      expect(submitAction).toEqual(model);
    });
    test('with presenter cleaner', () => {
      component.presenter = {
        sendCleanedModel() {
          return 'cleaned';
        },
      };
      let submitAction = null;
      component.emitChange.subscribe(action => (submitAction = action));
      component.submit(model);
      expect(submitAction).toEqual('cleaned');
    });
  });

  test('should emit remove', () => {
    component.model = { id: 1, name: 'the name', color: 'blue' };
    let removeAction = null;
    component.emitRemove.subscribe(action => (removeAction = action));
    component.remove();
    expect(removeAction).toEqual({ id: 1, name: 'the name' });
  });
});
