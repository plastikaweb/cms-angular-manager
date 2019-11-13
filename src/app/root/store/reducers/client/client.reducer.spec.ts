import { SetClient } from '@app/root/store/actions';
import * as fromClient from '@app/root/store/reducers/client/client.reducer';
import { clientMockState } from '@shared/mocks';

describe('Client reducer', () => {
  test('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = fromClient.reducer(undefined, action);
    expect(newState).toBe(fromClient.initialState);
  });

  test('should handle the Set Client Action', () => {
    const payload = clientMockState;
    const newState = fromClient.reducer(
      fromClient.initialState,
      new SetClient(payload)
    );
    expect(newState).toEqual(payload);
  });
});
