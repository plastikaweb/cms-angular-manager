import { getActionsLoaded, getActionsLoading } from '@app/entities/actions';
import { actionsEntitiesMock, actionsListMock } from '@shared/mocks';

import {
    getActionsAll, getActionsEntities, getActionsIds, getActionsTotal
} from './actions.selectors';

describe('Actions selectors', () => {
  test('should return Actions list', () => {
    expect(getActionsAll.projector(actionsEntitiesMock)).toStrictEqual(
      actionsListMock
    );
  });
  test('should return Actions ids', () => {
    expect(getActionsIds.projector(actionsEntitiesMock)).toEqual(
      actionsEntitiesMock.ids
    );
  });

  test('should return Actions entities', () => {
    expect(getActionsEntities.projector(actionsEntitiesMock)).toBe(
      actionsEntitiesMock.entities
    );
  });

  test('should return Actions total', () => {
    expect(getActionsTotal.projector(actionsEntitiesMock)).toBe(
      actionsEntitiesMock.ids.length
    );
  });

  test('should return Actions loading', () => {
    expect(getActionsLoading.projector(actionsEntitiesMock)).toBe(
      actionsEntitiesMock.loading
    );
  });

  test('should return Actions loaded', () => {
    expect(getActionsLoaded.projector(actionsEntitiesMock)).toBe(
      actionsEntitiesMock.loaded
    );
  });
});
