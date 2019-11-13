import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { actionsListMock, roomsListMock } from '@shared/mocks';
import { FilterEntitiesPipe } from '@shared/pipes/filter-entities/filter-entities.pipe';
import { SharedModule } from '@shared/shared.module';

import { AccordionModule } from 'ngx-bootstrap';

import { RoomsDraggableAccordionComponent } from './rooms-draggable-accordion.component';

describe('RoomsDraggableAccordionComponent', () => {
  let component: RoomsDraggableAccordionComponent;
  let fixture: ComponentFixture<RoomsDraggableAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsDraggableAccordionComponent],
      imports: [AccordionModule.forRoot(), SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsDraggableAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should emit emitListReorder', () => {
    let reorderAction = null;
    component.groups = roomsListMock;
    component.emitListReorder.subscribe(action => (reorderAction = action));
    component.reorderRooms({
      previousIndex: 0,
      currentIndex: 1,
      item: null,
      container: null,
      previousContainer: null,
      isPointerOverContainer: null,
      distance: null,
    });
    expect(reorderAction).toEqual([2, 1, 3]);
  });

  test('should emit emitRoomUpdate', () => {
    let updateAction = null;
    component.emitRoomUpdate.subscribe(action => (updateAction = action));
    component.updateRoom(roomsListMock[0]);
    expect(updateAction).toEqual(roomsListMock[0]);
  });

  test('should emit emitRoomChanged', () => {
    let sendAction = null;
    component.emitRoomChanged.subscribe(action => (sendAction = action));
    component.sendHasChanged(true);
    expect(sendAction).toBeTruthy();
  });

  test('should emit emitRoomRemove', () => {
    let removeAction = null;
    component.emitRoomRemove.subscribe(action => (removeAction = action));
    component.removeRoom(roomsListMock[0]);
    expect(removeAction).toEqual(roomsListMock[0]);
  });

  describe('should emit emitGroupClick', () => {
    let clickAction;

    test('should be emitted', () => {
      clickAction = null;
      component.emitGroupClick.subscribe(action => (clickAction = action));
      component.clickGroup(false, 2);
      expect(clickAction).toEqual({ isOpened: false, id: 2 });
    });

    test('should not be emitted', () => {
      clickAction = null;
      component.selectedGroupId = 2;
      component.emitGroupClick.subscribe(action => (clickAction = action));
      component.clickGroup(true, 2);
      expect(clickAction).toBeNull();
    });

    test('should set filters and emit emitFilteredItemsLength', () => {
      const filters = { name: { value: 'room', exactValue: false } };
      let filteredLengthAction = null;
      component.emitFilteredItemsLength.subscribe(
        action => (filteredLengthAction = action)
      );
      component.groups = roomsListMock;
      component.appliedFilters = filters;
      expect(component.filters).toEqual(filters);
      expect(filteredLengthAction).toEqual(
        new FilterEntitiesPipe().transform(component.groups, filters).length
      );
    });
  });

  test('should return track room id', () => {
    expect(component.trackByRoom(0, roomsListMock[0])).toEqual(
      roomsListMock[0].id
    );
  });

  test('should return track action id', () => {
    expect(component.trackByAction(0, actionsListMock[0])).toEqual(
      actionsListMock[0].id
    );
  });
});
