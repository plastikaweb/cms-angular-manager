import { Injectable } from '@angular/core';
import { EntityPresenter, Room } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class RoomAccordionGroupBodyPresenter
  implements EntityPresenter<Room, Partial<Room>> {
  model: Room;

  getActionsIds(actions): Array<number> {
    return (
      (actions &&
        actions.length &&
        actions.map(action => action && action.id)) ||
      []
    );
  }

  getCleanedModel(room: Room): Partial<Room> {
    const { id, name, type, capacity, actions: oldActions } = { ...room };
    const actions = this.getActionsIds(oldActions);
    return (
      room && {
        id,
        name,
        capacity,
        type,
        actions,
      }
    );
  }
}
