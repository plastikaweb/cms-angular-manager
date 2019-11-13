import { GlobalEntitiesActionTypes, SetPendingEntity } from './global-entities.actions';

describe('Global Entities Actions', () => {
  test('should dispatch SetPendingEntity', () => {
    const action = new SetPendingEntity(true);
    expect({ ...action }).toEqual({
      type: GlobalEntitiesActionTypes.SetPendingEntity,
      payload: true,
    });
  });
});
