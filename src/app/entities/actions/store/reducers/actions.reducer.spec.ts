import {
    initialState, LoadActions, LoadActionsFail, LoadActionsSuccess, reducer
} from '@app/entities/actions';
import { actionsEntitiesMock, actionsListMock } from '@shared/mocks';

describe('Actions reducer', () => {
  describe('an unknown action', () => {
    test('should return the default state on undefined Action', () => {
      const action = {} as any;
      const newState = reducer(undefined, action);
      expect(newState).toBe(initialState);
    });

    test('should handle the Load Actions Action', () => {
      const payload = {
        ids: [],
        entities: {},
        loading: true,
        loaded: false,
      };
      const newState = reducer(initialState, new LoadActions());
      expect(newState).toEqual(payload);
    });

    test('should handle the Load Actions Success Action', () => {
      const result = {
        ...actionsEntitiesMock,
        loading: false,
        loaded: true,
      };
      const newState = reducer(
        initialState,
        new LoadActionsSuccess(actionsListMock)
      );
      expect(newState).toEqual(result);
    });

    test('should handle the Load Actions Fail Action', () => {
      const result = {
        ids: [],
        entities: {},
        loaded: false,
        loading: false,
      };
      const newState = reducer(
        initialState,
        new LoadActionsFail(new Error('!!!'))
      );
      expect(newState).toEqual(result);
    });
  });
});
