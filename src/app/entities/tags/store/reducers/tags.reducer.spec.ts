import {
    ChangePaginationFilterTags, CreateTag, CreateTagFail, CreateTagSuccess, LoadTag, LoadTagFail,
    LoadTags, LoadTagsFail, LoadTagsSuccess, LoadTagSuccess, SelectTag, SelectTagFamily, UpdateTag,
    UpdateTagFail, UpdateTagSuccess
} from '@app/entities/tags/store/actions/tags.actions';
import { initialState, reducer } from '@app/entities/tags/store/reducers/tags.reducer';
import {
    tagApiResponseMock, tagEntitiesMock, tagFamiliesMock, tagsApiResponseMock, tagsEntitiesMock,
    tagUpdateApiResponseMock, updatedTagsEntitiesMock, updateTagPayload
} from '@shared/mocks';

describe('Tags Reducer', () => {
  test('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(initialState);
  });

  describe('Load Tags Actions', () => {
    test('should handle the Load Tags Action', () => {
      const result = {
        ...initialState,
        ids: [],
        entities: {},
        loading: true,
        pageNumber: 1,
      };
      let newState = reducer(initialState, new LoadTags({ number: 1 }));
      expect(newState).toEqual(result);
      newState = reducer(
        { ...initialState, pageNumber: 1 },
        new LoadTags({ number: 3, name: 'aaa' })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Load Tag Action', () => {
      const result = {
        ...initialState,
        ids: [],
        entities: {},
        loading: true,
      };
      const newState = reducer(initialState, new LoadTag(1));
      expect(newState).toEqual(result);
    });

    describe('should handle the Load Tags Success Action', () => {
      test('when no filter term is present', () => {
        const result = {
          ...tagsEntitiesMock,
          loading: false,
        };
        const newState = reducer(
          tagsEntitiesMock,
          new LoadTagsSuccess(tagsApiResponseMock.payload)
        );
        expect(newState).toEqual(result);
      });

      test('when filter term is present', () => {
        const result = {
          ...tagsEntitiesMock,
          filterTerm: 'aaa',
          totalTagsByFilter: 30,
          loading: false,
          requestedFilters: {
            aaa: { received: 0, total: 30 },
          },
        };
        const newState = reducer(
          {
            ...tagsEntitiesMock,
            filterTerm: 'aaa',
            totalTagsByFilter: 12,
            requestedFilters: {
              aaa: { received: 0, total: 12 },
            },
          },
          new LoadTagsSuccess(tagsApiResponseMock.payload)
        );
        expect(newState).toEqual(result);
      });
    });

    test('should handle the Load Tag Success Action', () => {
      const result = {
        ...tagEntitiesMock,
        loading: false,
      };
      const newState = reducer(
        tagEntitiesMock,
        new LoadTagSuccess(tagApiResponseMock.payload)
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Load Tags Fail Action', () => {
      const result = {
        ...initialState,
        loading: false,
      };
      const newState = reducer(
        initialState,
        new LoadTagsFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Load Tag Fail Action', () => {
      const result = {
        ...initialState,
        loading: false,
      };
      const newState = reducer(initialState, new LoadTagFail(new Error('!!!')));
      expect(newState).toEqual(result);
    });
  });

  describe('Change Pagination Filter Tags', () => {
    test('should update when filtering by a term', () => {
      const result = {
        ...initialState,
        filterTerm: 'aaa',
        totalTagsByFilter: 12,
        requestedFilters: { aaa: { received: 12, total: 12 } },
      };

      const newState = reducer(
        initialState,
        new ChangePaginationFilterTags({
          params: { name: 'aaa', number: 1 },
          matchesCount: 12,
        })
      );
      expect(newState).toEqual(result);
    });

    test('should update when not filtering by a term', () => {
      const result = {
        ...tagsEntitiesMock,
        filterTerm: '',
        totalTagsByFilter: null,
        requestedFilters: { aaa: { total: 15, received: 12 } },
      };

      const newState = reducer(
        {
          ...tagsEntitiesMock,
          requestedFilters: { aaa: { total: 15, received: 12 } },
        },
        new ChangePaginationFilterTags({
          params: { number: 1 },
          matchesCount: 36,
        })
      );
      expect(newState).toEqual(result);
    });
  });

  describe('Select Actions', () => {
    test('should handle the Select Tag Action', () => {
      const result = {
        ...tagsEntitiesMock,
        selectedTagId: 1,
        selectedTagFamily: null,
      };
      const newState = reducer(
        { ...tagsEntitiesMock, selectedTagFamily: null },
        new SelectTag(1)
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Select Tag Family Action', () => {
      const { id, name } = tagFamiliesMock[0];
      const payload = {
        id,
        name,
      };
      const result = {
        ...initialState,
        loading: false,
        selectedTagFamily: payload,
      };
      const newState = reducer(initialState, new SelectTagFamily(payload));
      expect(newState).toEqual(result);
    });
  });

  describe('Update Tag Actions', () => {
    test('should handle the Update Tag Action', () => {
      const result = {
        ...tagsEntitiesMock,
        loading: true,
      };
      const { id, ...changes } = updateTagPayload;
      const newState = reducer(
        tagsEntitiesMock,
        new UpdateTag({ id, changes })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Update Tag Success Action', () => {
      const result = {
        ...updatedTagsEntitiesMock,
        loading: false,
        selectedTagFamily: null,
      };
      const { id, ...changes } = tagUpdateApiResponseMock.payload;
      const newState = reducer(
        {
          ...tagsEntitiesMock,
          selectedTagFamily: null,
          requestedFilters: {},
        },
        new UpdateTagSuccess({ id, changes })
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Update Tag Fail Action', () => {
      const result = {
        ...tagsEntitiesMock,
        loading: false,
      };
      const newState = reducer(
        tagsEntitiesMock,
        new UpdateTagFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });

  describe('Create Tag Actions', () => {
    test('should handle the Create Tag Action', () => {
      const result = {
        ...initialState,
        loading: true,
      };
      const { id, ...changes } = updateTagPayload;
      const newState = reducer(initialState, new CreateTag(changes));
      expect(newState).toEqual(result);
    });

    test('should handle the Create Tag Success Action', () => {
      const result = {
        ...tagEntitiesMock,
        loading: false,
        initiallyLoaded: false,
        selectedTagId: null,
        totalTags: 1,
        selectedTagFamily: null,
        pageNumber: null,
        batchSize: initialState.batchSize,
      };
      const newState = reducer(
        initialState,
        new CreateTagSuccess(tagEntitiesMock.entities[1])
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Create Tag Fail Action', () => {
      const result = {
        ...initialState,
        loading: false,
      };
      const newState = reducer(
        initialState,
        new CreateTagFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });
});
