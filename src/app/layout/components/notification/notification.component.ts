import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild
} from '@angular/core';
import { NotificationConfig, NotificationTypes } from '@shared/models';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

import { isNil } from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  template: `
    <div toastContainer></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit, OnDestroy {
  @ViewChild(ToastContainerDirective, { static: false })
  toastContainer: ToastContainerDirective;
  @Input() showNotification$: Observable<NotificationConfig>;
  @Output() emitCloseNotification: EventEmitter<void> = new EventEmitter();
  subscription: Subscription;

  constructor(private toastrService: ToastrService) {}

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
    this.setNotification();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setNotification() {
    this.subscription = this.showNotification$
      .pipe(
        map(notification => {
          if (notification) {
            const { title, message, type, config } = notification;
            switch (type) {
              case NotificationTypes.error:
                return this.toastrService.error(message, title, config);
              case NotificationTypes.info:
                return this.toastrService.info(message, title, config);
              case NotificationTypes.success:
                return this.toastrService.success(message, title, config);
              case NotificationTypes.warning:
                return this.toastrService.warning(message, title, config);
            }
          }
          return null;
        }),
        filter(notification => !isNil(notification)),
        switchMap(notification => notification && notification.onHidden)
      )
      .subscribe(() => {
        this.emitCloseNotification.emit();
        return true;
      });
  }
}
