import {
    ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { ConfirmationModalConfig } from '@shared/models';

import { BsModalService, ModalDirective } from 'ngx-bootstrap';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('template', { static: true }) template: ModalDirective;
  @Input() config$: Observable<ConfirmationModalConfig>;
  configSubscription: Subscription;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.configSubscription = this.config$.subscribe(config => {
      if (!!config && config.visible) {
        this.modalService.show(this.template);
      } else {
        this.modalService.hide(1);
      }
    });
  }

  ngOnDestroy() {
    this.destroySubscriptions();
  }

  destroySubscriptions() {
    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
  }
}
