import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeListFilter } from '@shared/models';

import { FormContainerModule } from '../form-container/form-container.module';
import {
    CustomTreeNodeEditionComponent
} from './custom-tree-node-edition/custom-tree-node-edition.component';
import { CustomTreeComponent } from './custom-tree.component';

import { TreeComponent, TreeModule } from 'angular-tree-component';

describe('CustomTreeComponent', () => {
  let component: CustomTreeComponent;
  let fixture: ComponentFixture<CustomTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTreeComponent, CustomTreeNodeEditionComponent],
      imports: [FormContainerModule, TreeModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTreeComponent);
    component = fixture.componentInstance;
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should emit nodes order', () => {
    const move = {
      tree: 1,
      parent: 2,
      node: null,
    };
    let result = null;
    component.emitNodesOrder.subscribe(data => (result = data));
    component.onMoveNode(move);
    expect(result).toEqual(move);
  });

  test('should emit add new node', () => {
    const newNode = {
      tree: 1,
      parent: 2,
      node: null,
    };
    let result = null;
    component.emitNewNode.subscribe(data => (result = data));
    component.addNewNode(newNode);
    expect(result).toEqual(newNode);
  });

  test('should emit edit node', () => {
    const node = {
      tree: 1,
      parent: 2,
      node: null,
    };
    let result = null;
    component.emitEditNode.subscribe(data => (result = data));
    component.editNode(node);
    expect(result).toEqual(node);
  });

  test('should emit edit tag', () => {
    let result = null;
    component.emitEditTag.subscribe(data => (result = data));
    component.editTag(1);
    expect(result).toEqual(1);
  });

  test('should emit new tag', () => {
    let result = null;
    component.emitNewTag.subscribe(data => (result = data));
    component.newTag(1);
    expect(result).toEqual(1);
  });

  describe('search match', () => {
    test('should return true on partial string match', () => {
      const filters: Array<TreeListFilter> = [
        { field: 'name', value: 'node1', inputType: 'text', evaluate: null },
      ];
      expect(
        component.searchMatch(filters, { id: 1, name: 'node1111' })
      ).toBeTruthy();
    });

    test('should return false on no match', () => {
      const filters: Array<TreeListFilter> = [
        { field: 'name', value: 'node2', inputType: 'text', evaluate: null },
      ];
      expect(
        component.searchMatch(filters, { id: 1, name: 'node1111' })
      ).toBeFalsy();
    });

    test('should return false if search term is longer than tree name', () => {
      const filters: Array<TreeListFilter> = [
        {
          field: 'name',
          value: 'node222222222',
          inputType: 'text',
          evaluate: null,
        },
      ];
      expect(
        component.searchMatch(filters, { id: 1, name: 'node1111' })
      ).toBeFalsy();
    });

    test('should return true if search term length is exactly equal to tree name', () => {
      const filters: Array<TreeListFilter> = [
        { field: 'name', value: 'node1111', inputType: 'text', evaluate: null },
      ];
      expect(
        component.searchMatch(filters, { id: 1, name: 'node1111' })
      ).toBeTruthy();
    });

    test('should return true on match with upper case', () => {
      const filters: Array<TreeListFilter> = [
        { field: 'name', value: 'Node1', inputType: 'text', evaluate: null },
      ];
      expect(
        component.searchMatch(filters, { id: 1, name: 'node1111' })
      ).toBeTruthy();
    });

    test('should return true on match with especial chars case', () => {
      const filters: Array<TreeListFilter> = [
        { field: 'name', value: 'nóde1', inputType: 'text', evaluate: null },
      ];
      expect(
        component.searchMatch(filters, { id: 1, name: 'node1111' })
      ).toBeTruthy();
    });

    test('should return true on match with boolean truthy match', () => {
      const filters: Array<TreeListFilter> = [
        {
          field: 'pending',
          value: false,
          inputType: 'boolean',
          evaluate: (value, node) => {
            return !value
              ? true
              : !node.tagId && !node.children.length === value;
          },
        },
      ];
      expect(
        component.searchMatch(filters, {
          id: 1,
          name: 'node1111',
          tagId: null,
          children: [],
        })
      ).toBeTruthy();
    });

    test('should return false on match with boolean truthy match', () => {
      const filters: Array<TreeListFilter> = [
        {
          field: 'pending',
          value: true,
          inputType: 'boolean',
          evaluate: (value, node) => {
            return !value
              ? true
              : !node.tagId && !node.children.length === value;
          },
        },
      ];
      expect(
        component.searchMatch(filters, {
          id: 1,
          name: 'node1111',
          tagId: 32,
          children: [{ id: 3 }],
        })
      ).toBeFalsy();
    });

    test('should return false in multiple filters if one of them is false', () => {
      const filters: Array<TreeListFilter> = [
        { field: 'name', value: 'node2', inputType: 'text', evaluate: null },
        {
          field: 'pending',
          value: false,
          inputType: 'boolean',
          evaluate: (value, node) => {
            return !value
              ? true
              : !node.tagId && !node.children.length === value;
          },
        },
      ];
      expect(
        component.searchMatch(filters, {
          id: 1,
          name: 'node1111',
          tagId: 32,
          children: [{ id: 3 }],
        })
      ).toBeFalsy();
    });
  });
});
