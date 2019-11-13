import { SelectOptionsUtils } from './select-options.utils';

enum Types {
  A = 'item 1',
  B = 'item 2',
  C = 'item 3',
  D = 'item 4',
}

describe('Select Options Utils', () => {
  test('should transform enum to select options values', () => {
    const result = SelectOptionsUtils.getOptionsFromEnum(Types);
    const selectTypes = [
      { value: 'A', label: 'item 1' },
      { value: 'B', label: 'item 2' },
      { value: 'C', label: 'item 3' },
      { value: 'D', label: 'item 4' },
    ];
    expect(result).toEqual(selectTypes);
  });
});
