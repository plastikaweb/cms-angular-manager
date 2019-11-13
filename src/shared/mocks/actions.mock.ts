import { ActionsState } from '@app/entities/actions';
import { Action, ActionsTypes, OptApiResponse } from '@shared/models';

export const actionsListMock: Array<Action> = [
  {
    id: 1,
    name: 'DNI',
    type: ActionsTypes.cirugia,
    description: 'Procedimiento',
    createdAt: {
      date: '2019-05-29 12:49:19.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    modifiedAt: {
      date: '2019-05-29 12:49:19.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
  },
  {
    id: 2,
    name: 'radiografía',
    type: ActionsTypes.cirugia,
    description: 'Lorem ipsum',
    createdAt: {
      date: '2019-05-29 16:30:37.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
    modifiedAt: {
      date: '2019-05-29 16:30:37.000000',
      timezone_type: 3,
      timezone: 'Europe/Madrid',
    },
  },
];

export const actionsApiResponseMock: OptApiResponse<Array<Action>> = {
  payload: actionsListMock,
  success: true,
};

export const actionsEntitiesMock: ActionsState = {
  ids: [actionsListMock[0].id, actionsListMock[1].id],
  entities: {
    [actionsListMock[0].id]: actionsListMock[0],
    [actionsListMock[1].id]: actionsListMock[1],
  },
  loading: false,
  loaded: true,
};
