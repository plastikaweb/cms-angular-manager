import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { roomsListMock } from '@shared/mocks';
import { SharedModule } from '@shared/shared.module';

import { RoomsSandbox } from '../sandbox/rooms.sandbox';
import { CreateRoomComponent } from './create-room.component';

describe('CreateRoomComponent', () => {
  let component: CreateRoomComponent;
  let fixture: ComponentFixture<CreateRoomComponent>;
  let sandbox: RoomsSandbox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        SharedModule,
      ],
      declarations: [CreateRoomComponent],
      providers: [
        {
          provide: RoomsSandbox,
          useValue: {
            createRoom: jest.fn(),
            sendHasChanged: jest.fn(),
          },
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoomComponent);
    component = fixture.componentInstance;
    sandbox = TestBed.get(RoomsSandbox);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('sendHasChanged sandbox method', () => {
    test('should be called', () => {
      component.hasChanged = false;
      component.sendHasChanged();
      expect(sandbox.sendHasChanged).toHaveBeenCalledWith(true);
      expect(component.hasChanged).toBeTruthy();
    });

    test('should not be called', () => {
      component.hasChanged = true;
      component.sendHasChanged();
      expect(sandbox.sendHasChanged).not.toHaveBeenCalled();
    });
  });

  test('should call createRoom sandbox method', () => {
    const { id, ...create } = roomsListMock[0];
    component.submit(create);
    expect(sandbox.createRoom).toHaveBeenCalledWith({ ...create, position: 0 });
  });
});
