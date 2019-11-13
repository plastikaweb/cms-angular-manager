import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { customTreeMoveTagFamilyMock, newTagFamilyInnerLevelMock } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import { TagFamiliesSandbox } from '../sandbox/tag-families.sandbox';
import { TagFamiliesListComponent } from './tag-families-list.component';

describe('TagFamiliesListComponent', () => {
  let component: TagFamiliesListComponent;
  let fixture: ComponentFixture<TagFamiliesListComponent>;
  let sandbox: TagFamiliesSandbox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagFamiliesListComponent],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
      ],
      providers: [
        {
          provide: TagFamiliesSandbox,
          useValue: {
            setTagFamiliesOrder: jest.fn(),
            addNewTagFamily: jest.fn(),
            editTagFamily: jest.fn(),
            goToEditTag: jest.fn(),
            goToNewTag: jest.fn(),
          },
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagFamiliesListComponent);
    component = fixture.componentInstance;
    sandbox = TestBed.get(TagFamiliesSandbox);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should call setTagFamiliesReorder sandbox method', () => {
    const mock = customTreeMoveTagFamilyMock();
    component.setTagFamiliesOrder(mock);
    expect(sandbox.setTagFamiliesOrder).toHaveBeenCalledWith(mock);
  });

  test('should call addNewTagFamily sandbox method', () => {
    const mock = newTagFamilyInnerLevelMock;
    component.addNewTagFamily(mock);
    expect(sandbox.addNewTagFamily).toHaveBeenCalledWith(mock);
  });

  test('should call editTagFamily sandbox method', () => {
    const mock = newTagFamilyInnerLevelMock;
    component.editTagFamily(mock);
    expect(sandbox.editTagFamily).toHaveBeenCalledWith(mock);
  });

  test('should call goToEditTag sandbox method', () => {
    component.goToEditTag(1);
    expect(sandbox.goToEditTag).toHaveBeenCalledWith(1);
  });

  test('should call goToNewTag sandbox method', () => {
    component.goToNewTag(1);
    expect(sandbox.goToNewTag).toHaveBeenCalledWith(1);
  });

  test('should call toggleTree method', () => {
    let toggleAction = null;
    component.isTreeCollapsed$.subscribe(action => (toggleAction = action));
    component.toggleTree(true);
    expect(toggleAction).toBeTruthy();
  });

  test('should emit a new filter', () => {
    const filter = { name: 'aaaa', pending: false };
    let newFilters;
    component.filterValue.subscribe(filters => (newFilters = filters));
    component.doFilter(filter);
    expect(newFilters).toEqual(filter);
    expect(component.filters).toEqual(filter);
  });
});
