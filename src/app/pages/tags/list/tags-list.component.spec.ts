import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ConfigServiceMock } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import { TagsSandbox } from '../sandbox/tags.sandbox';
import { TagsListComponent } from './tags-list.component';
import {
    VirtualScrollTagItemComponent
} from './virtual-scroll-tag-item/virtual-scroll-tag-item.component';

describe('TagsListComponent', () => {
  let component: TagsListComponent;
  let fixture: ComponentFixture<TagsListComponent>;
  let sandbox: TagsSandbox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsListComponent, VirtualScrollTagItemComponent],
      imports: [
        SharedModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: TagsSandbox,
          useValue: {
            getTags: jest.fn(),
            updateTag: jest.fn(),
            createTag: jest.fn(),
            goTo: jest.fn(),
            getCultures: jest.fn(() => ConfigServiceMock.settings.cultures),
          },
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsListComponent);
    component = fixture.componentInstance;
    component.appliedFilters = { name: { value: 'aaa', exactValue: true } };
    sandbox = TestBed.get(TagsSandbox);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should call getTags sandbox method', () => {
    component.getTags(1, 12);
    expect(sandbox.getTags).toHaveBeenCalledWith(
      { number: 1, name: 'aaa' },
      12
    );
  });

  test('should emit a new list length', () => {
    let newLength;
    component.listLengthSubject$.subscribe(length => (newLength = length));
    component.getListLength(11);
    expect(newLength).toEqual(11);
  });

  test('should emit a new filter', () => {
    const filter = { name: { value: 'aaaa', exactValue: false } };
    let newFilters;
    component.sendFilterSubject$.subscribe(filters => (newFilters = filters));
    component.filter(filter);
    expect(newFilters).toEqual(filter);
  });
});
