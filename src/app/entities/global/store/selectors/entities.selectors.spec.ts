import { getEntitiesLoading, getEntitiesPendingEdition } from './global-entities.selectors';

describe('Entities selectors', () => {
  test('should return loading state', () => {
    expect(getEntitiesLoading.projector(false, false)).toBeFalsy();
    expect(getEntitiesLoading.projector(true, false)).toBeTruthy();
    expect(getEntitiesLoading.projector(true, true)).toBeTruthy();
  });

  test('should return if entities edition is pending', () => {
    expect(
      getEntitiesPendingEdition.projector({ pendingEdition: true })
    ).toBeTruthy();
  });
});
