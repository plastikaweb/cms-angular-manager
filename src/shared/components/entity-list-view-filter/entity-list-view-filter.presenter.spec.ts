import { entitiesFiltersMock } from '@shared/mocks';
import { EntityListViewFilter, RoomTypes } from '@shared/models';

import { EntityListViewFilterPresenter } from './entity-list-view-filter.presenter';

describe('EntityListViewFilterPresenter presenter', () => {
  let presenter: EntityListViewFilterPresenter;

  beforeEach(() => {
    presenter = new EntityListViewFilterPresenter();
    presenter.filters = entitiesFiltersMock;
  });

  test('appliedFilters should return a filters object', () => {
    expect(presenter.filters).toEqual(presenter.filters);
  });

  test('updateFilters() should update appliedFilters', () => {
    const newFilterField: EntityListViewFilter = {
      field: 'type',
      name: 'tipo',
      inputType: 'select',
      exactValue: true,
      items: [],
    };
    presenter.updateFilters(newFilterField, RoomTypes.aparatos);
    const { field, exactValue } = newFilterField;
    expect(presenter.filters).toEqual({
      ...entitiesFiltersMock,
      [field]: { value: RoomTypes.aparatos, exactValue },
    });
  });
});
