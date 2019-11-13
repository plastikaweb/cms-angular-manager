import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() actions = [];
  @Output() emitAction: EventEmitter<string> = new EventEmitter();

  dispatchAction(event: string) {
    this.emitAction.emit(event);
  }
}
