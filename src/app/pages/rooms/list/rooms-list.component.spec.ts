import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {
    RoomsDraggableAccordionModule
} from '@app/pages/rooms/list/components/rooms-draggable-accordion/rooms-draggable-accordion.module';
import { StoreModule } from '@ngrx/store';
import { FormContainerModule } from '@shared/components/form-container/form-container.module';
import { roomsListMock } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import { RoomsSandbox } from '../sandbox/rooms.sandbox';
import { RoomsListComponent } from './rooms-list.component';

import { of } from 'rxjs';

describe('RoomsListComponent', () => {
  let component: RoomsListComponent;
  let fixture: ComponentFixture<RoomsListComponent>;
  let sandbox: RoomsSandbox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsListComponent],
      imports: [
        RouterModule.forRoot([]),
        SharedModule,
        RoomsDraggableAccordionModule,
        StoreModule.forRoot({}),
        FormContainerModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: RoomsSandbox,
          useValue: {
            updateRoom: jest.fn(),
            removeRoom: jest.fn(),
            confirmRemoveRoom: jest.fn(),
            sendHasChanged: jest.fn(),
            setSelectedRoom: jest.fn(),
            reorderRooms: jest.fn(),
            closeModal: jest.fn(),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsListComponent);
    component = fixture.componentInstance;
    sandbox = TestBed.get(RoomsSandbox);
    component.rooms$ = of([]);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should call updateRoom sandbox method', () => {
    const mock = roomsListMock[0];
    component.updateRoom(mock);
    expect(sandbox.updateRoom).toHaveBeenCalledWith(mock);
  });

  test('should call confirmRemoveRoom sandbox method', () => {
    const mock = roomsListMock[0];
    component.confirmRemoveRoom(mock);
    expect(sandbox.confirmRemoveRoom).toHaveBeenCalledWith(mock);
  });

  test('should call removeRoom sandbox method', () => {
    component.removeRoom({ id: 1 });
    expect(sandbox.removeRoom).toHaveBeenCalledWith({ id: 1 });
  });

  describe('sendHasChanged sandbox method', () => {
    test('should be called', () => {
      component.hasChanged = false;
      component.emitRoomHasChanged(true);
      expect(sandbox.sendHasChanged).toHaveBeenCalledWith(true);
      expect(component.hasChanged).toBeTruthy();
    });

    test('should not be called', () => {
      component.hasChanged = true;
      component.emitRoomHasChanged(true);
      expect(sandbox.sendHasChanged).not.toHaveBeenCalled();
    });
  });

  test('should call clickRoom sandbox method', () => {
    const mock = { isOpened: false, id: 1 };
    component.clickRoom(mock);
    expect(sandbox.setSelectedRoom).toHaveBeenCalledWith(mock);
  });

  test('should call reorderRooms sandbox method', () => {
    const mock = [1, 2, 3];
    component.reorderRooms(mock);
    expect(sandbox.reorderRooms).toHaveBeenCalledWith(mock);
  });

  test('should call closeModal sandbox method', () => {
    component.closeModal();
    expect(sandbox.closeModal).toHaveBeenCalled();
  });

  test('should update applied filters', () => {
    const mock = {
      name: { value: 'st', exactValue: false },
    };
    component.filter(mock);
    expect(component.appliedFilters).toEqual(mock);
  });

  test('should set the rooms list filtered length', () => {
    component.setFilteredRoomsLength(3);
    expect(component.filteredRoomsLength).toBe(3);
  });
});
