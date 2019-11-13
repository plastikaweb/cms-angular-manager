import { TestBed } from '@angular/core/testing';
import { CreateTagFamily, ReorderTagFamilies, UpdateTagFamily } from '@app/entities/tag-families';
import { PagesState } from '@app/pages/store/reducers';
import { Go } from '@app/root/store';
import { Store, StoreModule } from '@ngrx/store';
import { customTreeMoveTagFamilyMock } from '@shared/mocks';

import { TagFamiliesSandbox } from './tag-families.sandbox';

describe('TagFamiliesSandbox', () => {
  let sandbox: TagFamiliesSandbox;
  let store: Store<PagesState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [TagFamiliesSandbox],
    });
    sandbox = TestBed.get(TagFamiliesSandbox);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  describe('should dispatch a ReorderTagFamilies action', () => {
    test('with parent tag family', () => {
      const mock = customTreeMoveTagFamilyMock();
      const { id, newPosition: to, currentPosition: from } = mock.node;
      const { id: parentId } = mock.parent;
      const payload = {
        id,
        parentId,
        to,
        from,
      };
      const action = new ReorderTagFamilies(payload);

      sandbox.setTagFamiliesOrder(mock);

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    test('with no parent tag family', () => {
      const mock = customTreeMoveTagFamilyMock(false);
      const { id, newPosition: to, currentPosition: from } = mock.node;
      const payload = {
        id,
        parentId: null,
        to,
        from,
      };

      const action = new ReorderTagFamilies(payload);

      sandbox.setTagFamiliesOrder(mock);

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  test('should dispatch a CreateTagFamily action', () => {
    const payload = {
      parentId: 13,
      name: 'new family tag',
    };
    const action = new CreateTagFamily(payload);
    sandbox.addNewTagFamily(payload);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch an UpdateTagFamily action', () => {
    const payload = {
      parentId: 13,
      name: 'new family tag',
    };
    const action = new UpdateTagFamily(payload);
    sandbox.editTagFamily(payload);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a Go action on edit tag', () => {
    const payload = {
      path: ['tags', 1],
    };
    const action = new Go(payload);
    sandbox.goToEditTag(1);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  test('should dispatch a Go action on new tag', () => {
    const payload = {
      path: ['tags', 'new', 1],
    };
    const action = new Go(payload);
    sandbox.goToNewTag(1);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
