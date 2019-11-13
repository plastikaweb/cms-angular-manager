import { inject, TestBed } from '@angular/core/testing';
import { entitiesFiltersMock, roomsListMock } from '@shared/mocks';
import { RoomTypes } from '@shared/models';

import { FilterEntitiesPipe } from './filter-entities.pipe';

describe('FilterEntities Pipe', () => {
  let pipe: FilterEntitiesPipe;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [FilterEntitiesPipe],
    })
  );

  beforeEach(inject([FilterEntitiesPipe], p => {
    pipe = p;
  }));

  test('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  test('should return an error if no entities are provided as argument', () => {
    expect(() => pipe.transform(null)).toThrow();
  });

  test('should return a list of entities filtered', () => {
    expect(pipe.transform(roomsListMock, entitiesFiltersMock)).toEqual([
      roomsListMock[0],
    ]);
    expect(pipe.transform(roomsListMock, entitiesFiltersMock)).toEqual(
      pipe.doFilter(roomsListMock, entitiesFiltersMock)
    );
  });
});
