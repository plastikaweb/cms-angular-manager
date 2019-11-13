import { StringUtils } from './string.utils';

describe('String Utils', () => {
  test('should check if string matches', () => {
    let result = StringUtils.matchString('aaa', 'aaa');
    expect(result).toBeTruthy();
    result = StringUtils.matchString('aaa', 'aaa1');
    expect(result).toBeTruthy();
    result = StringUtils.matchString('aaaaa', 'aaa');
    expect(result).toBeFalsy();
    result = StringUtils.matchString('AA', 'aaa');
    expect(result).toBeTruthy();
    result = StringUtils.matchString('áa', 'aaa');
    expect(result).toBeTruthy();
  });
});
