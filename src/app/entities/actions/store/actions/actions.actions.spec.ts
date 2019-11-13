import {
    ActionsActionTypes, LoadActions, LoadActionsFail, LoadActionsSuccess
} from '@app/entities/actions';
import { actionsListMock } from '@shared/mocks';

describe('Actions Actions', () => {
  test('should dispatch LoadActions', () => {
    const action = new LoadActions();
    expect({ ...action }).toEqual({
      type: ActionsActionTypes.LoadActions,
    });
  });

  test('should dispatch LoadActionsSuccess', () => {
    const payload = actionsListMock;
    const action = new LoadActionsSuccess(payload);
    expect({ ...action }).toEqual({
      type: ActionsActionTypes.LoadActionsSuccess,
      payload,
    });
  });

  test('should dispatch LoadActionsFail', () => {
    const payload = new Error('!!!');
    const action = new LoadActionsFail(payload);
    expect({ ...action }).toEqual({
      type: ActionsActionTypes.LoadActionsFail,
      payload,
    });
  });
});
