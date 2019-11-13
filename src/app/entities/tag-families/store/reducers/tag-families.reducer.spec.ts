import {
    initialState, LoadTagFamilies, LoadTagFamiliesFail, LoadTagFamiliesSuccess, reducer,
    ReorderTagFamilies, ReorderTagFamiliesFail, ReorderTagFamiliesSuccess
} from '@app/entities/tag-families';
import {
    tagFamiliesEntitiesMock, tagFamiliesEntitiesReorderedMock, tagFamiliesMock,
    tagFamilyEntitiesMock
} from '@shared/mocks';

import {
    CreateTagFamily, CreateTagFamilyFail, CreateTagFamilySuccess, LoadTagFamily, LoadTagFamilyFail,
    LoadTagFamilySuccess, UpdateTagFamily, UpdateTagFamilyFail, UpdateTagFamilySuccess
} from '../actions/tag-families.actions';
import { TagFamiliesReducerUtils } from './tag-families.reducer.utils';

describe('Tag Families reducer', () => {
  describe('an unknown action', () => {
    test('should return the default state on undefined Action', () => {
      const action = {} as any;
      const newState = reducer(undefined, action);
      expect(newState).toBe(initialState);
    });
    describe('Load TagFamilies Actions', () => {
      test('should handle the Load Tag Families Action', () => {
        const payload = {
          ...initialState,
          loading: true,
          loaded: false,
        };
        const newState = reducer(initialState, new LoadTagFamilies());
        expect(newState).toEqual(payload);
      });

      test('should handle the Load Tag Families Success Action', () => {
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: false,
          loaded: true,
          lastNodeEdition: null,
        };
        const newState = reducer(
          initialState,
          new LoadTagFamiliesSuccess([...tagFamiliesMock])
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Load Tag Families Fail Action', () => {
        const result = {
          ...initialState,
          loaded: false,
          loading: false,
        };
        const newState = reducer(
          initialState,
          new LoadTagFamiliesFail(new Error('!!!'))
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Load Tag Family Action', () => {
        const payload = {
          ...initialState,
          loading: true,
          loaded: false,
        };
        const newState = reducer(initialState, new LoadTagFamily(1));
        expect(newState).toEqual(payload);
      });

      describe('should handle the Load Tag Family Success Action', () => {
        test('if loaded families is true', () => {
          const result = {
            ...tagFamiliesEntitiesMock,
            loading: false,
            loaded: true,
          };
          const newState = reducer(
            { ...initialState, ...tagFamiliesEntitiesMock, loaded: true },
            new LoadTagFamilySuccess([...tagFamiliesMock][0])
          );
          expect(newState).toEqual(result);
        });

        test('if loaded families is false', () => {
          const result = {
            ...tagFamilyEntitiesMock,
            loading: false,
            loaded: false,
          };
          const newState = reducer(
            { ...initialState },
            new LoadTagFamilySuccess([...tagFamiliesMock][0])
          );
          expect(newState).toEqual(result);
        });
      });

      test('should handle the Load Tag Family Fail Action', () => {
        const result = {
          ...initialState,
          loaded: false,
          loading: false,
        };
        const newState = reducer(
          initialState,
          new LoadTagFamilyFail(new Error('!!!'))
        );
        expect(newState).toEqual(result);
      });
    });

    describe('Create TagFamily Actions', () => {
      test('should handle the Create Tag Family Action', () => {
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: true,
        };
        const newState = reducer(
          tagFamiliesEntitiesMock,
          new CreateTagFamily({ name: 'family', parentId: 1 })
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Create Tag Family Success Action', () => {
        const list = [...tagFamiliesMock];
        const newTagFamily = list.shift();
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: false,
          lastNodeEdition: {
            id: newTagFamily.id,
            parentId: newTagFamily.parentId,
          },
        };
        const newState = reducer(
          tagFamiliesEntitiesMock,
          new CreateTagFamilySuccess(newTagFamily)
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Create Tag Family Fail Action', () => {
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: false,
        };
        const newState = reducer(
          tagFamiliesEntitiesMock,
          new CreateTagFamilyFail(new Error('!!!'))
        );
        expect(newState).toEqual(result);
      });
    });

    describe('Update TagFamily Actions', () => {
      test('should handle the Update Tag Family Action', () => {
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: true,
          dirty: TagFamiliesReducerUtils.getListArray(
            [...tagFamiliesEntitiesMock.ids] as Array<number>,
            tagFamiliesEntitiesMock.entities
          ),
        };
        const newState = reducer(
          tagFamiliesEntitiesMock,
          new UpdateTagFamily({
            name: 'family',
            parentId: 12,
            id: 14,
            children: [],
            tagId: null,
          })
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Update Tag Family Success Action', () => {
        const list = [...tagFamiliesMock];
        const newTagFamily = list.shift();
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: false,
          lastNodeEdition: {
            id: newTagFamily.id,
            parentId: newTagFamily.parentId,
          },
        };
        const newState = reducer(
          tagFamiliesEntitiesMock,
          new UpdateTagFamilySuccess(newTagFamily)
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Update Tag Family Fail Action', () => {
        const result = {
          ...tagFamiliesEntitiesMock,
          loading: false,
          loaded: false,
          dirty: null,
        };
        const newState = reducer(
          { ...tagFamiliesEntitiesMock, dirty: tagFamiliesMock },
          new UpdateTagFamilyFail(new Error('!!!'))
        );
        expect(newState).toEqual(result);
      });
    });

    describe('Reorder TagFamilies Actions', () => {
      test('should handle the Reorder Tag Families Action', () => {
        const result = {
          ...tagFamiliesEntitiesReorderedMock,
          loading: true,
          loaded: true,
          dirty: TagFamiliesReducerUtils.getListArray(
            [...tagFamiliesEntitiesMock.ids] as Array<number>,
            tagFamiliesEntitiesMock.entities
          ),
        };

        const newState = reducer(
          { ...tagFamiliesEntitiesMock },
          new ReorderTagFamilies({
            parentId: null,
            id: 17,
            from: 2,
            to: 0,
          })
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Reorder Tag Families Success Action', () => {
        const result = {
          ...tagFamiliesEntitiesReorderedMock,
          dirty: null,
          loaded: true,
        };
        const newState = reducer(
          { ...tagFamiliesEntitiesReorderedMock },
          new ReorderTagFamiliesSuccess()
        );
        expect(newState).toEqual(result);
      });

      test('should handle the Reorder Tag Families Fail Action', () => {
        const result = {
          ...tagFamiliesEntitiesMock,
          loaded: false,
          loading: false,
          dirty: null,
        };
        const newState = reducer(
          { ...tagFamiliesEntitiesReorderedMock },
          new ReorderTagFamiliesFail(new Error('!!!'))
        );
        expect(newState).toEqual(result);
      });
    });
  });
});
