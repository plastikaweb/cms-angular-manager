import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '@shared/models';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input() actions = [];
  @Output() emitAction: EventEmitter<string> = new EventEmitter();

  dispatchAction(event: string) {
    this.emitAction.emit(event);
  }

  trackByAction(index: number, action: Action): number {
    return action.id;
  }
}
