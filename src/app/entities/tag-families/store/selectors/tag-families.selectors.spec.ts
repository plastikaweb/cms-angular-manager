import { tagFamiliesEntitiesMock, tagFamiliesMock } from '@shared/mocks';

import {
    getTagFamiliesAll, getTagFamiliesEntities, getTagFamiliesEntity, getTagFamiliesIds,
    getTagFamiliesLastNodeEdition, getTagFamiliesLoaded, getTagFamiliesLoading, getTagFamiliesTotal
} from './tag-families.selectors';

describe('Tag Families selectors', () => {
  test('should return TagFamilies list', () => {
    expect(getTagFamiliesAll.projector(tagFamiliesEntitiesMock)).toStrictEqual(
      tagFamiliesMock
    );
  });
  test('should return TagFamilies ids', () => {
    expect(getTagFamiliesIds.projector(tagFamiliesEntitiesMock)).toEqual(
      tagFamiliesEntitiesMock.ids
    );
  });

  test('should return TagFamilies entities', () => {
    expect(getTagFamiliesEntities.projector(tagFamiliesEntitiesMock)).toBe(
      tagFamiliesEntitiesMock.entities
    );
  });

  test('should return TagFamilies total', () => {
    expect(getTagFamiliesTotal.projector(tagFamiliesEntitiesMock)).toBe(
      tagFamiliesEntitiesMock.ids.length
    );
  });

  test('should return TagFamilies loading', () => {
    expect(getTagFamiliesLoading.projector(tagFamiliesEntitiesMock)).toBe(
      tagFamiliesEntitiesMock.loading
    );
  });

  test('should return TagFamilies loaded', () => {
    expect(getTagFamiliesLoaded.projector(tagFamiliesEntitiesMock)).toBe(
      tagFamiliesEntitiesMock.loaded
    );
  });

  test('should return TagFamilies lastNodeEdtion', () => {
    expect(
      getTagFamiliesLastNodeEdition.projector(tagFamiliesEntitiesMock)
    ).toBe(tagFamiliesEntitiesMock.lastNodeEdition);
  });

  describe('should return TagFamily', () => {
    test('tag family exists', () => {
      const result = {
        id: 14,
        name: `Párpado y anejos - Ectropion - superior`,
      };
      expect(getTagFamiliesEntity.projector(tagFamiliesMock, 14)).toStrictEqual(
        result
      );
    });

    test('tag family does not exist', () => {
      expect(getTagFamiliesEntity.projector(tagFamiliesMock, 5555)).toBeNull();
    });
  });
});
