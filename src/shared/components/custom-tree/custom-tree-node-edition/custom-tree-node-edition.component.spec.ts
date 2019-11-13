import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContainerModule } from '@shared/components/form-container/form-container.module';

import { CustomTreeNodeEditionComponent } from './custom-tree-node-edition.component';

describe('CustomTreeNodeEditionComponent', () => {
  let component: CustomTreeNodeEditionComponent;
  let fixture: ComponentFixture<CustomTreeNodeEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTreeNodeEditionComponent],
      imports: [FormContainerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTreeNodeEditionComponent);
    component = fixture.componentInstance;
    spyOn(component, 'toggleEditVisibility').and.callThrough();
    spyOn(component, 'toggleNewVisibility').and.callThrough();
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should change edition visibility', () => {
    component.editionVisible = false;
    component.toggleEditVisibility();
    expect(component.editionVisible).toBeTruthy();
    expect(component.editionNewVisible).toBeFalsy();
  });

  describe('should emit new node action', () => {
    test('with parent id', () => {
      component.node = {
        data: {
          parentId: 1,
          id: 2,
        },
      };
      let newAction = null;
      component.emitNewNode.subscribe(action => (newAction = action));
      component.submitNew({ name: 'new tag family' });
      expect(newAction).toEqual({
        parentId: 2,
        name: 'new tag family',
      });
      expect(component.toggleNewVisibility).toHaveBeenCalled();
    });
    test('with no parent id', () => {
      component.node = null;
      let newAction = null;
      component.emitNewNode.subscribe(action => (newAction = action));
      component.submitNew({ name: 'new tag family' });
      expect(newAction).toEqual({
        parentId: null,
        name: 'new tag family',
      });
      expect(component.toggleNewVisibility).toHaveBeenCalled();
    });
  });

  test('should emit edit node action', () => {
    component.node = {
      data: {
        parentId: 1,
        id: 2,
      },
    };
    let editAction = null;
    component.emitEditNode.subscribe(action => (editAction = action));
    component.submitEdit({ name: 'edit tag family' });
    expect(editAction).toEqual({
      ...component.node.data,
      name: 'edit tag family',
    });
    expect(component.toggleEditVisibility).toHaveBeenCalled();
  });

  test('should emit edit tag action', () => {
    component.node = {
      data: {
        id: 2,
        tagId: 33,
      },
    };
    let editAction = null;
    component.emitEditTag.subscribe(action => (editAction = action));
    component.goToEditOrNewTag(true);
    expect(editAction).toEqual(component.node.data.tagId);
  });

  test('should emit new tag action', () => {
    component.node = {
      data: {
        id: 2,
      },
    };
    let newAction = null;
    component.emitNewtTag.subscribe(action => (newAction = action));
    component.goToEditOrNewTag(false);
    expect(newAction).toEqual(component.node.data.id);
  });
});
