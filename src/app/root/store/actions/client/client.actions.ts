import { ClientState } from '@app/root/store/reducers/client/client.reducer';
import { Action } from '@ngrx/store';

export enum ClientActionTypes {
  SetClient = '[Client] Set Client',
}

export class SetClient implements Action {
  readonly type = ClientActionTypes.SetClient;

  constructor(public payload: ClientState) {}
}

export type ClientActions = SetClient;
