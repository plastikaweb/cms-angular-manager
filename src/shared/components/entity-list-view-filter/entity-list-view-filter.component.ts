import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output
} from '@angular/core';
import { EntityListViewFilter, EntityListViewFilterApplied } from '@shared/models';

import { EntityListViewFilterPresenter } from './entity-list-view-filter.presenter';

import { asyncScheduler, of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-entity-list-view-filter',
  templateUrl: './entity-list-view-filter.component.html',
  styleUrls: ['./entity-list-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EntityListViewFilterPresenter],
})
export class EntityListViewFilterComponent implements OnInit, OnDestroy {
  @Input() filters: Array<EntityListViewFilter> = [];
  @Input() debouncetime = 0;
  @Output() readonly applyFilter = new EventEmitter<
    EntityListViewFilterApplied
  >();
  clicks: Subject<{
    field: EntityListViewFilter;
    value: string | Array<any>;
  }> = new Subject();
  subscription: Subscription;

  constructor(private presenter: EntityListViewFilterPresenter) {}

  ngOnInit() {
    this.subscription = this.clicks
      .pipe(
        debounceTime(this.debouncetime),
        switchMap(({ field, value }) =>
          this.presenter.updateFilters(field, value)
        )
      )
      .subscribe(filters => this.applyFilter.emit(filters));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateFilters(field: EntityListViewFilter, value: string | Array<any>): void {
    this.clicks.next({ field, value });
  }

  trackByFilter(index: number, filter: EntityListViewFilter): string {
    return filter.field;
  }
}
