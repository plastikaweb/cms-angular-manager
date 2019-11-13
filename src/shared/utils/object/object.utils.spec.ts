import { ObjectUtils } from './object.utils';

describe('Object Utils', () => {
  test('should check if value is an object', () => {
    let result = ObjectUtils.checkIsObject({ id: 1 });
    expect(result).toBeTruthy();
    result = ObjectUtils.checkIsObject([]);
    expect(result).toBeFalsy();
    result = ObjectUtils.checkIsObject('string');
    expect(result).toBeFalsy();
    result = ObjectUtils.checkIsObject(333);
    expect(result).toBeFalsy();
    result = ObjectUtils.checkIsObject(null);
    expect(result).toBeFalsy();
    result = ObjectUtils.checkIsObject(false);
    expect(result).toBeFalsy();
    result = ObjectUtils.checkIsObject(undefined);
    expect(result).toBeFalsy();
  });
});
