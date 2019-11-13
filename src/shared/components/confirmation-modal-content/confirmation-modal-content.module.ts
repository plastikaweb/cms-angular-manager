import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';

import { ConfirmationModalContentComponent } from './confirmation-modal-content.component';

@NgModule({
  declarations: [ConfirmationModalContentComponent],
  imports: [CommonModule, ModalModule.forRoot()],
  exports: [ConfirmationModalContentComponent],
})
export class ConfirmationModalContentModule {}
