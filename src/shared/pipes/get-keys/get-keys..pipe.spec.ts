import { inject, TestBed } from '@angular/core/testing';

import { GetKeysPipe } from './get-keys.pipe';

describe('GetKeys Pipe', () => {
  let pipe: GetKeysPipe;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GetKeysPipe],
    })
  );

  beforeEach(inject([GetKeysPipe], p => {
    pipe = p;
  }));

  test('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  test('should return an error if no object is provided as argument', () => {
    expect(() => pipe.transform(null)).toThrow();
    expect(() => pipe.transform([])).toThrow();
    expect(() => pipe.transform('string')).toThrow();
    expect(() => pipe.transform(32)).toThrow();
  });

  test('should return an array of object keys', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(pipe.transform(obj)).toEqual(['a', 'b', 'c']);
  });
});
