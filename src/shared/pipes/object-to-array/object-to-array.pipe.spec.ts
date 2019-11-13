import { inject, TestBed } from '@angular/core/testing';

import { ObjectToArrayPipe } from './object-to-array.pipe';

describe('ObjectToArray Pipe', () => {
  let pipe: ObjectToArrayPipe;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ObjectToArrayPipe],
    })
  );

  beforeEach(inject([ObjectToArrayPipe], p => {
    pipe = p;
  }));

  test('sould be created', () => {
    expect(pipe).toBeTruthy();
  });

  test('should return an error if no object is provided as argument', () => {
    expect(() => pipe.transform(null)).toThrow();
    expect(() => pipe.transform('string')).toThrow();
    expect(() => pipe.transform([])).toThrow();
    expect(() => pipe.transform(32)).toThrow();
  });

  test('should return an array of entities', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(pipe.transform(obj)).toEqual([1, 2, 3]);
  });
});
