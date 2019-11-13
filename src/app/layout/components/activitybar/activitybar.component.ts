import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-activitybar',
  template: `
    <ng-progress id="progress" [spinner]="spinner"></ng-progress>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitybarComponent implements OnInit {
  @Input() isLoading$: Observable<boolean>;
  @Input() spinner = false;
  progressRef: NgProgressRef;
  constructor(private progress: NgProgress) {}

  ngOnInit() {
    this.progressRef = this.progress.ref('progress');
    this.observeLoading();
  }

  observeLoading() {
    this.isLoading$.subscribe(loading => {
      if (!this.progressRef.isStarted && loading) {
        this.progressRef.start();
      } else if (!loading) {
        this.progressRef.complete();
      }
    });
  }
}
