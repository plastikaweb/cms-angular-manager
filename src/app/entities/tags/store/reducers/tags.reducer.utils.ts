import { TagFilters, TagFiltersCounters } from '@shared/models';

import { TagsState } from './tags.reducer';

export class TagsReducerUtils {
  static getRequestedFilters(
    state: TagsState,
    name?: string,
    matchesFilterCount?: number,
    apiFilterCount?: number
  ): TagFilters {
    const { requestedFilters, batchSize, pageNumber, totalTags, ids } = state;
    return name
      ? {
          ...requestedFilters,
          [name]: {
            ...requestedFilters[name],
            received: TagsReducerUtils.getRequestedFiltersReceived(
              matchesFilterCount,
              apiFilterCount,
              batchSize,
              pageNumber
            ),
            total: TagsReducerUtils.getRequestedFiltersTotal(
              { ...requestedFilters[name] },
              totalTags,
              ids.length,
              matchesFilterCount,
              apiFilterCount
            ),
          },
        }
      : requestedFilters;
  }

  static getRequestedFiltersTotal(
    requestedFilters: TagFiltersCounters,
    totalTags: number,
    totalEntities: number,
    matchesFilterCount: number,
    apiFilterCount: number
  ): number {
    return apiFilterCount
      ? apiFilterCount
      : requestedFilters && requestedFilters.total
      ? requestedFilters.total
      : totalTags === totalEntities
      ? matchesFilterCount
      : null;
  }

  static getRequestedFiltersReceived(
    matchesFilterCount: number,
    apiFilterCount: number,
    batchSize: number,
    pageNumber: number
  ): number {
    return matchesFilterCount
      ? matchesFilterCount
      : pageNumber * batchSize > apiFilterCount
      ? apiFilterCount
      : pageNumber * batchSize;
  }
}
