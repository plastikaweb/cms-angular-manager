import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TagsSandbox } from '@app/pages/tags/sandbox/tags.sandbox';
import { EntityListViewFilterApplied, TagApiParams } from '@shared/models';

import { isNil } from 'lodash';
import { combineLatest, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-tags',
  templateUrl: './tags-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsListComponent implements OnInit, OnDestroy {
  tags$ = this.sandbox.tags$;
  totalTags$ = this.sandbox.totalTags$;
  batchSize$ = this.sandbox.batchSize$;
  pageNumber$ = this.sandbox.pageNumber$;
  tagsLoaded$ = this.sandbox.tagsLoaded$;
  filteredTagsLoaded$ = this.sandbox.filteredTagsLoaded$;
  visibleTagsLength$ = this.sandbox.visibleTagsLength$;
  pageConfig$ = this.sandbox.pageConfig$;
  cultures = this.sandbox.getCultures();
  itemSize = 51.5;
  sendFilterSubject$ = new Subject<EntityListViewFilterApplied>();
  listLengthSubject$ = new Subject<number>();
  appliedFilters: EntityListViewFilterApplied;
  filterSubscription: Subscription;

  constructor(private sandbox: TagsSandbox) {}

  ngOnInit() {
    this.filterSubscription = combineLatest([
      this.sendFilterSubject$,
      this.batchSize$,
    ])
      .pipe(
        tap(([appliedFilters]) => (this.appliedFilters = appliedFilters)),
        switchMap(([, batchSize]) =>
          this.listLengthSubject$.pipe(withLatestFrom([batchSize]))
        ),
        filter(([listLength]) => !isNil(listLength)),
        distinctUntilChanged()
      )
      .subscribe(([listLength, batchSize]) => {
        const pageNumber = Math.round(listLength / batchSize) || 1;
        this.getTags(pageNumber, listLength);
      });
  }

  ngOnDestroy() {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  getTags(pageNumber: number, listLength?: number) {
    let params: TagApiParams = { number: pageNumber };
    if (this.appliedFilters && this.appliedFilters.name) {
      params = {
        ...params,
        name: this.appliedFilters.name.value,
      };
    }
    this.sandbox.getTags(params, listLength);
  }

  getListLength(length: number) {
    this.listLengthSubject$.next(length);
  }

  filter(appliedFilters: EntityListViewFilterApplied) {
    this.sendFilterSubject$.next(appliedFilters);
  }
}
