import { initialState, reducer, SetPendingEntity } from '@app/entities/global';

describe('GlobalEntities Reducer', () => {
  test('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(initialState);
  });

  test('should handle the Set Pendings Action', () => {
    const result = {
      pendingEdition: true,
    };
    const newState = reducer(initialState, new SetPendingEntity(true));
    expect(newState).toEqual(result);
  });
});
