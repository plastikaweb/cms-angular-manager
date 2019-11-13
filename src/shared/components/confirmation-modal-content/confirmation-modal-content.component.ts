import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationModalConfig } from '@shared/models';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirmation-modal-content',
  templateUrl: './confirmation-modal-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationModalContentComponent {
  @Input() config: ConfirmationModalConfig;
  @Output() emitClose: EventEmitter<void> = new EventEmitter();
  @Output() emitAction: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  doAction() {
    this.emitAction.emit(this.config.data);
  }

  closeModal() {
    this.emitClose.emit();
  }
}
