import {
    newTagFamilyFirstLevelMock, newTagFamilyInnerLevelMock, tagFamiliesAddOnFirstLevelMock,
    tagFamiliesAddOnInnerLevelMock, tagFamiliesEntitiesMock, tagFamiliesMock,
    tagFamiliesReorderedInnerLevelMock, tagFamiliesReorderedMock, tagFamiliesUpdateOnFirstLevelMock,
    tagFamiliesUpdateOnInnerLevelMock, updateTagFirstLevelFamilyMock, updateTagInnerLevelFamilyMock
} from '@shared/mocks';
import { ChangeOrderFamilyTagBody, TagFamily } from '@shared/models';

import { TagFamiliesReducerUtils } from './tag-families.reducer.utils';

describe('Tag Families reducer utils', () => {
  describe('getListArray', () => {
    const { ids, entities } = tagFamiliesEntitiesMock;
    test('should return an array from entities object', () => {
      expect(
        TagFamiliesReducerUtils.getListArray(ids as Array<number>, entities)
      ).toEqual(tagFamiliesMock);
    });
  });

  describe('reorder', () => {
    test('should return an array with reordered families on first level', () => {
      const changeOrder: ChangeOrderFamilyTagBody = {
        id: 18,
        parentId: null,
        from: 2,
        to: 0,
      };
      expect(
        TagFamiliesReducerUtils.reorder(changeOrder, tagFamiliesMock)
      ).toEqual(tagFamiliesReorderedMock);
    });

    test('should return an array with reordered families on inner level', () => {
      const changeOrder: ChangeOrderFamilyTagBody = {
        id: 14,
        parentId: 13,
        from: 0,
        to: 1,
      };
      expect(
        TagFamiliesReducerUtils.reorder(changeOrder, tagFamiliesMock)
      ).toEqual(tagFamiliesReorderedInnerLevelMock);
    });
  });

  describe('add', () => {
    test('should return an array with a new tag family on first level', () => {
      expect(
        TagFamiliesReducerUtils.add({ ...newTagFamilyFirstLevelMock }, [
          ...tagFamiliesMock,
        ])
      ).toEqual([...tagFamiliesAddOnFirstLevelMock]);
    });

    test('should return an array with a new tag family on inner level', () => {
      expect(
        TagFamiliesReducerUtils.add({ ...newTagFamilyInnerLevelMock }, [
          ...tagFamiliesMock,
        ])
      ).toEqual([...tagFamiliesAddOnInnerLevelMock]);
    });
  });

  describe('update', () => {
    test('should return an array with a new tag family on first level', () => {
      expect(
        TagFamiliesReducerUtils.update(
          { ...updateTagFirstLevelFamilyMock } as TagFamily,
          [...tagFamiliesMock]
        )
      ).toEqual([...tagFamiliesUpdateOnFirstLevelMock]);
    });

    test('should return an array with a new tag family on inner level', () => {
      expect(
        TagFamiliesReducerUtils.update(
          { ...updateTagInnerLevelFamilyMock } as TagFamily,
          [...tagFamiliesMock]
        )
      ).toEqual([...tagFamiliesUpdateOnInnerLevelMock]);
    });
  });
});
