import { ActionsTypes, TimeZoneDate } from '@shared/models';

export interface Action {
  id: number;
  name: string;
  type: ActionsTypes;
  description: string;
  createdAt: TimeZoneDate;
  modifiedAt: TimeZoneDate;
}

export type ActionCreation = Pick<Action, 'name' | 'type' | 'description'>;
