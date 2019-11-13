import { TagsActions, TagsActionTypes } from '@app/entities/tags/store/actions/tags.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Tag, TagFamily, TagFilters } from '@shared/models';

import { TagsReducerUtils } from './tags.reducer.utils';

export const adapter = createEntityAdapter<Tag>();

export interface TagsState extends EntityState<Tag> {
  loading: boolean;
  initiallyLoaded: boolean;
  totalTags: number;
  selectedTagId: number | string;
  selectedTagFamily: Partial<TagFamily>;
  batchSize: number;
  pageNumber: number;
  filterTerm: string;
  totalTagsByFilter: number;
  requestedFilters: TagFilters;
}

export const initialState: TagsState = adapter.getInitialState({
  loading: false,
  initiallyLoaded: false,
  totalTags: 0,
  selectedTagId: null,
  selectedTagFamily: null,
  batchSize: 30,
  pageNumber: null,
  filterTerm: '',
  totalTagsByFilter: null,
  requestedFilters: {},
});

export function reducer(state = initialState, action: TagsActions): TagsState {
  switch (action.type) {
    case TagsActionTypes.LoadTags: {
      const { number: pageNumber, name } = action.payload;
      return {
        ...state,
        pageNumber: name ? state.pageNumber : pageNumber,
        loading: true,
      };
    }

    case TagsActionTypes.LoadTag: {
      return {
        ...state,
        loading: true,
      };
    }

    case TagsActionTypes.ChangePaginationFilterTags: {
      const { params, matchesCount } = action.payload;
      const { name } = params;
      const { requestedFilters, totalTags, ids } = state;

      const totalTagsByFilter = TagsReducerUtils.getRequestedFiltersTotal(
        { ...requestedFilters[name] },
        totalTags,
        ids.length,
        matchesCount,
        null
      );
      const newRequestedFilters = TagsReducerUtils.getRequestedFilters(
        { ...state },
        name,
        matchesCount
      );
      return {
        ...state,
        filterTerm: name || '',
        totalTagsByFilter,
        requestedFilters: newRequestedFilters,
      };
    }

    case TagsActionTypes.LoadTagsSuccess: {
      const { count, tags } = action.payload;
      const { filterTerm } = state;

      const newRequestedFilters = TagsReducerUtils.getRequestedFilters(
        { ...state },
        filterTerm,
        null,
        count
      );
      const successPayload = {
        ...state,
        initiallyLoaded: true,
        loading: false,
        totalTags: filterTerm ? state.totalTags : count,
        totalTagsByFilter: filterTerm ? count : null,
        requestedFilters: newRequestedFilters,
      };

      return adapter.upsertMany(tags, successPayload);
    }

    case TagsActionTypes.LoadTagSuccess: {
      const successPayload = {
        ...state,
        loading: false,
      };
      return adapter.addOne(action.payload, successPayload);
    }

    case TagsActionTypes.LoadTagsFail:
    case TagsActionTypes.UpdateTagFail:
    case TagsActionTypes.CreateTagFail: {
      return {
        ...state,
        loading: false,
      };
    }

    case TagsActionTypes.LoadTagFail: {
      return {
        ...state,
        loading: false,
        selectedTagId: null,
      };
    }

    case TagsActionTypes.SelectTag: {
      return {
        ...state,
        selectedTagId: action.payload,
        selectedTagFamily: null,
      };
    }

    case TagsActionTypes.SelectTagFamily: {
      return {
        ...state,
        selectedTagId: null,
        selectedTagFamily: action.payload,
      };
    }

    case TagsActionTypes.UpdateTag: {
      return {
        ...state,
        loading: true,
      };
    }

    case TagsActionTypes.UpdateTagSuccess: {
      state = {
        ...state,
        loading: false,
      };
      return adapter.updateOne(action.payload, state);
    }

    case TagsActionTypes.CreateTag: {
      return {
        ...state,
        loading: true,
      };
    }

    case TagsActionTypes.CreateTagSuccess: {
      const totalTags = { ...state }.totalTags + 1;
      state = {
        ...state,
        loading: false,
        totalTags,
      };
      return adapter.addOne(action.payload, state);
    }
  }
  return state;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
export const getTagsLoadingState = (state: TagsState) => state && state.loading;
export const getTagsInitiallyLoadedState = (state: TagsState) =>
  state && state.initiallyLoaded;
export const getTagsTotalTagsState = (state: TagsState) =>
  state && state.totalTags;
export const getTagsSelectedTagIdState = (state: TagsState) =>
  state && state.selectedTagId;
export const getTagsSelectedTagFamilyState = (state: TagsState) =>
  state && state.selectedTagFamily;
export const getTagsBatchSizeState = (state: TagsState) =>
  state && state.batchSize;
export const getTagsPageNumberState = (state: TagsState) =>
  state && state.pageNumber;
export const getTagsFilterTermState = (state: TagsState) =>
  state && state.filterTerm;
export const getTagsTotalTagsByFilterState = (state: TagsState) =>
  state && state.totalTagsByFilter;
export const getTagsRequestedFiltersState = (state: TagsState) =>
  state && state.requestedFilters;
