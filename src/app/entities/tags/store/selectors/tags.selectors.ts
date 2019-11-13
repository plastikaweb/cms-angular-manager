import {
    getTagsBatchSizeState, getTagsFilterTermState, getTagsInitiallyLoadedState, getTagsLoadingState,
    getTagsPageNumberState, getTagsRequestedFiltersState, getTagsSelectedTagFamilyState,
    getTagsSelectedTagIdState, getTagsTotalTagsByFilterState, getTagsTotalTagsState, selectAll,
    selectEntities, selectIds, selectTotal
} from '@app/entities/tags/store/reducers/tags.reducer';
import { getTagsState } from '@app/pages/store/reducers';
import { createSelector } from '@ngrx/store';

export const getTagsIds = createSelector(
  getTagsState,
  selectIds
);

export const getTagsEntities = createSelector(
  getTagsState,
  selectEntities
);

export const getTagsAll = createSelector(
  getTagsState,
  selectAll
);

export const getTagsTotal = createSelector(
  getTagsState,
  selectTotal
);

export const getTagsLoading = createSelector(
  getTagsState,
  getTagsLoadingState
);

export const getTagsInitiallyLoaded = createSelector(
  getTagsState,
  getTagsInitiallyLoadedState
);

export const getTagsTotalTags = createSelector(
  getTagsState,
  getTagsTotalTagsState
);

export const getTagsSelectedTagId = createSelector(
  getTagsState,
  getTagsSelectedTagIdState
);

export const getSelectedTag = createSelector(
  getTagsEntities,
  getTagsSelectedTagId,
  (tags, id) => tags[id]
);

export const getSelectedTagFamily = createSelector(
  getTagsState,
  getTagsSelectedTagFamilyState
);

export const getTagsBatchSize = createSelector(
  getTagsState,
  getTagsBatchSizeState
);

export const getTagsPageNumber = createSelector(
  getTagsState,
  getTagsPageNumberState
);

export const getTagsFilterTerm = createSelector(
  getTagsState,
  getTagsFilterTermState
);

export const getTagsLoaded = createSelector(
  getTagsTotal,
  getTagsTotalTags,
  (loadedTags, totalTags) => !!totalTags && +loadedTags >= +totalTags
);

export const getTagsTotalTagsByFilter = createSelector(
  getTagsState,
  getTagsTotalTagsByFilterState
);

export const getTagsRequestedFilters = createSelector(
  getTagsState,
  getTagsRequestedFiltersState
);

export const getFilteredTagsLoaded = createSelector(
  getTagsRequestedFilters,
  getTagsFilterTerm,
  (filters, filterName) => {
    if (filters && filters[filterName]) {
      const { total, received } = filters[filterName];
      return received >= total;
    }
    return false;
  }
);

export const getTagsVisibleLength = createSelector(
  getTagsFilterTerm,
  getTagsTotalTags,
  getTagsTotalTagsByFilter,
  (filterTerm, totalTags, totalFilteredTags) =>
    filterTerm ? totalFilteredTags : totalTags
);
