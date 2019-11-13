import { Action, RoomTypes, TimeZoneDate } from '@shared/models';

import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Room {
  id: number;
  name: string;
  type: RoomTypes;
  actions: Array<number | Partial<Action>>;
  capacity: number;
  createdAt: TimeZoneDate;
  modifiedAt: TimeZoneDate;
  estimation?: { [name: string]: string };
  position: number;
}

export interface RoomWithFormSignature {
  model: Room;
  fields: Array<FormlyFieldConfig>;
}

export type RoomCreation = Exclude<
  Room,
  'id' | 'createdAt' | 'modifiedAt' | 'position' | 'estimation'
>;
