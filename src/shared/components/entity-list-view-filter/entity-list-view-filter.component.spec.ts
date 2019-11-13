import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EntityListViewFilter } from '@shared/models';

import { NgxSelectModule } from 'ngx-select-ex';

import { EntityListViewFilterComponent } from './entity-list-view-filter.component';
import { EntityListViewFilterPresenter } from './entity-list-view-filter.presenter';

const field: EntityListViewFilter = {
  field: 'name',
  name: 'aaa',
  inputType: 'text',
  exactValue: false,
};
const value = 'aaa';

describe('EntityListViewFilterComponent', () => {
  let component: EntityListViewFilterComponent;
  let fixture: ComponentFixture<EntityListViewFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxSelectModule.forRoot({
          optionValueField: 'value',
          optionTextField: 'label',
          keepSelectedItems: true,
        }),
      ],
      declarations: [EntityListViewFilterComponent],
      providers: [EntityListViewFilterPresenter],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityListViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('updateFilters', () => {
    let out;
    component.clicks.subscribe(val => (out = val));
    component.updateFilters(field, value);
    expect(out).toStrictEqual({ field, value });
  });

  test('should return track filter field', () => {
    expect(
      component.trackByFilter(0, {
        field: 'name',
        name: 'aa',
        inputType: 'text',
        exactValue: false,
      })
    ).toEqual('name');
  });
});
