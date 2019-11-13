import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsModalRef, ModalModule } from 'ngx-bootstrap';

import { ModalWrapperComponent } from './modal-wrapper.component';

@NgModule({
  declarations: [ModalWrapperComponent],
  imports: [CommonModule, ModalModule.forRoot()],
  exports: [ModalWrapperComponent],
  providers: [BsModalRef],
})
export class ModalWrapperModule {}
