import * as fromActions from '@app/root/store/actions';
import { clientMockState } from '@shared/mocks';

describe('Client Actions', () => {
  test('should set the client', () => {
    const payload = clientMockState;
    const action = new fromActions.SetClient(clientMockState);
    expect({ ...action }).toEqual({
      type: fromActions.ClientActionTypes.SetClient,
      payload,
    });
  });
});
