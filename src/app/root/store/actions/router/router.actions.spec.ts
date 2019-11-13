import * as fromActions from '@app/root/store/actions';

describe('Router Actions', () => {
  test('should dispatch de Go action', () => {
    const payload = {
      path: ['/'],
      query: {},
      extras: {
        queryParams: { page: 1 },
      },
    };
    const action = new fromActions.Go(payload);
    expect({ ...action }).toEqual({
      type: fromActions.RouterActionTypes.Go,
      payload,
    });
  });

  test('should dispatch de Back action', () => {
    const action = new fromActions.Back();
    expect({ ...action }).toEqual({
      type: fromActions.RouterActionTypes.Back,
    });
  });

  test('should dispatch de Forward action', () => {
    const action = new fromActions.Forward();
    expect({ ...action }).toEqual({
      type: fromActions.RouterActionTypes.Forward,
    });
  });
});
