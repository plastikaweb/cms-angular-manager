import { roomsListMock } from '@shared/mocks';

import { RoomAccordionGroupBodyPresenter } from './room-accordion-group-body.presenter';

describe('RoomAccordionGroupBody presenter', () => {
  let presenter: RoomAccordionGroupBodyPresenter;
  let selectedRoom;

  beforeEach(() => {
    presenter = new RoomAccordionGroupBodyPresenter();
    selectedRoom = { ...roomsListMock[0] };
  });

  describe('getCleaned() should return cleaned model', () => {
    test('when actions are present, return a Partial Room object', () => {
      const { id, name, type, capacity, actions: oldActions } = selectedRoom;
      const actions = presenter.getActionsIds(oldActions);
      const roomUpdateMock = {
        id,
        name,
        capacity,
        type,
        actions,
      };

      expect(presenter.getCleanedModel(selectedRoom)).toEqual(roomUpdateMock);
    });
  });

  test('when no actions are present, return a Partial Room object with empty actions array', () => {
    const { id, name, type, capacity } = selectedRoom;
    const selectedRoomWithNoActions = {
      ...selectedRoom,
      actions: [],
    };
    const actions = presenter.getActionsIds([]);
    const roomUpdateMock = {
      id,
      name,
      capacity,
      type,
      actions,
    };

    expect(presenter.getCleanedModel(selectedRoomWithNoActions)).toEqual(
      roomUpdateMock
    );
  });
});
