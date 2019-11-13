import { TagsReducerUtils } from './tags.reducer.utils';

describe('Tags reducer utils', () => {
  describe('getRequestedFiltersTotal', () => {
    const requestedFilters = { received: 5, total: 10 };
    test('should return the api filter count', () => {
      expect(
        TagsReducerUtils.getRequestedFiltersTotal(
          requestedFilters,
          25,
          10,
          5,
          12
        )
      ).toEqual(12);
    });
    test('should return the requested filters total param', () => {
      expect(
        TagsReducerUtils.getRequestedFiltersTotal(
          requestedFilters,
          25,
          5,
          1,
          null
        )
      ).toEqual(10);
    });
    test('should return the matches filter count', () => {
      expect(
        TagsReducerUtils.getRequestedFiltersTotal(null, 25, 25, 12, null)
      ).toEqual(12);
    });
    test('should return null', () => {
      expect(
        TagsReducerUtils.getRequestedFiltersTotal(null, 25, 20, 12, null)
      ).toBeNull();
    });
  });

  describe('getRequestedFiltersReceived', () => {
    test('should return the matches filter count', () => {
      expect(TagsReducerUtils.getRequestedFiltersReceived(3, 7, 10, 1)).toEqual(
        3
      );
    });
    test('should return the api filter count', () => {
      expect(
        TagsReducerUtils.getRequestedFiltersReceived(null, 7, 10, 1)
      ).toEqual(7);
    });
    test('should return the pageNumber * batchSize', () => {
      expect(
        TagsReducerUtils.getRequestedFiltersReceived(null, 12, 10, 1)
      ).toEqual(10);
    });
  });
});
