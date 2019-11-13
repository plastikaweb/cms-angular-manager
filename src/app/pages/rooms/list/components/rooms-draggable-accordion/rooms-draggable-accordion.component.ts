import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
    AccordionGroup, Action, ButtonsGroupConfig, EntityListViewFilterApplied, Room
} from '@shared/models';
import { FilterEntitiesPipe } from '@shared/pipes/filter-entities/filter-entities.pipe';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { RoomAccordionGroupBodyPresenter } from './room-accordion-group-body.presenter';

@Component({
  selector: 'app-rooms-draggable-accordion',
  templateUrl: './rooms-draggable-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsDraggableAccordionComponent {
  @Input() groups: Array<Room> = [];
  @Input() fields: Array<FormlyFieldConfig> = [];
  @Input() selectedGroupId: number;
  @Input() draggableHandler = true;
  @Input() activity = false;
  @Input() buttonsConfig: ButtonsGroupConfig;
  @Input() set appliedFilters(filters: EntityListViewFilterApplied) {
    this.filters = filters;
    this.emitFilteredItemsLength.emit(
      new FilterEntitiesPipe().transform(this.groups, filters).length
    );
  }
  @Output() emitRoomUpdate: EventEmitter<Partial<Room>> = new EventEmitter();
  @Output() emitRoomChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() emitRoomRemove: EventEmitter<Partial<Room>> = new EventEmitter();
  @Output() emitGroupClick: EventEmitter<AccordionGroup> = new EventEmitter();
  @Output() emitListReorder: EventEmitter<Array<number>> = new EventEmitter();
  @Output() emitFilteredItemsLength: EventEmitter<number> = new EventEmitter();
  presenter = RoomAccordionGroupBodyPresenter;
  filters: EntityListViewFilterApplied;

  reorderRooms(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    const newOrder = this.groups.map(room => room.id);
    this.emitListReorder.emit(newOrder);
  }

  updateRoom(room: Partial<Room>) {
    this.emitRoomUpdate.emit(room);
  }

  sendHasChanged(changed: boolean) {
    this.emitRoomChanged.emit(changed);
  }

  removeRoom(room: Partial<Room>) {
    this.emitRoomRemove.emit(room);
  }

  clickGroup(isOpened: boolean, id: number) {
    if (!isOpened || this.selectedGroupId !== id) {
      this.emitGroupClick.emit({ isOpened, id });
    }
  }

  trackByRoom(index: number, room: Room): number {
    return room.id;
  }

  trackByAction(index: number, action: Action): number {
    return action.id;
  }
}
