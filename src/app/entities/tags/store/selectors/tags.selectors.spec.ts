import { tagsEntitiesMock, tagsMock } from '@shared/mocks';

import {
    getFilteredTagsLoaded, getSelectedTag, getSelectedTagFamily, getTagsAll, getTagsBatchSize,
    getTagsEntities, getTagsFilterTerm, getTagsIds, getTagsInitiallyLoaded, getTagsLoaded,
    getTagsLoading, getTagsPageNumber, getTagsRequestedFilters, getTagsSelectedTagId, getTagsTotal,
    getTagsTotalTags, getTagsTotalTagsByFilter, getTagsVisibleLength
} from './tags.selectors';

describe('Tags selectors', () => {
  test('should return Tags list', () => {
    expect(getTagsAll.projector(tagsEntitiesMock)).toStrictEqual(tagsMock);
  });
  test('should return Tags ids', () => {
    expect(getTagsIds.projector(tagsEntitiesMock)).toEqual(
      tagsEntitiesMock.ids
    );
  });

  test('should return Tags entities', () => {
    expect(getTagsEntities.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.entities
    );
  });

  test('should return Tags total', () => {
    expect(getTagsTotal.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.ids.length
    );
  });

  test('should return Tags loading', () => {
    expect(getTagsLoading.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.loading
    );
  });

  test('should return Tags initiallyLoaded', () => {
    expect(getTagsInitiallyLoaded.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.initiallyLoaded
    );
  });

  test('should return Tags totalTags', () => {
    expect(getTagsTotalTags.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.totalTags
    );
  });

  test('should return selected Tag Id', () => {
    expect(getTagsSelectedTagId.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.selectedTagId
    );
  });

  test('should return selected Tag', () => {
    expect(getSelectedTag.projector(tagsEntitiesMock.entities, 1)).toBe(
      tagsEntitiesMock.entities[1]
    );
  });

  test('should return selected Tag Family', () => {
    expect(getSelectedTagFamily.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.selectedTagFamily
    );
  });

  test('should return Tags batchSize', () => {
    expect(getTagsBatchSize.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.batchSize
    );
  });

  test('should return Tags pageNumber', () => {
    expect(getTagsPageNumber.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.pageNumber
    );
  });

  test('should return Tags filterTerm', () => {
    expect(getTagsFilterTerm.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.filterTerm
    );
  });

  test('should return Tags totalTagsByFilter', () => {
    expect(getTagsTotalTagsByFilter.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.totalTagsByFilter
    );
  });

  test('should return Tags requestedFilters', () => {
    expect(getTagsRequestedFilters.projector(tagsEntitiesMock)).toBe(
      tagsEntitiesMock.requestedFilters
    );
  });

  test('should return if Tags are loaded', () => {
    expect(getTagsLoaded.projector(12, 20)).toBeFalsy();
    expect(getTagsLoaded.projector(22, 20)).toBeTruthy();
  });

  test('should return if filtered Tags are loaded', () => {
    expect(
      getFilteredTagsLoaded.projector(
        { aaa: { total: 10, received: 16 } },
        'aaa'
      )
    ).toBeTruthy();
    expect(
      getFilteredTagsLoaded.projector(
        { aaa: { total: 10, received: 2 } },
        'aaa'
      )
    ).toBeFalsy();

    expect(
      getFilteredTagsLoaded.projector(
        { aaa: { total: 10, received: 2 } },
        'ccc'
      )
    ).toBeFalsy();
  });

  test('should return visible tags length', () => {
    expect(getTagsVisibleLength.projector('aaa', 35, 12)).toEqual(12);
    expect(getTagsVisibleLength.projector('', 35, 12)).toEqual(35);
  });
});
