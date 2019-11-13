import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
    AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, HostListener,
    Input, OnDestroy, Output, TemplateRef, ViewChild
} from '@angular/core';
import { EntityListViewFilterApplied } from '@shared/models';
import { FilterEntitiesPipe } from '@shared/pipes/filter-entities/filter-entities.pipe';

import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollComponent implements AfterViewInit, OnDestroy {
  @Input() set appliedFilters(filters: EntityListViewFilterApplied) {
    this.filters = filters;
    this.emitFilteredItemsLength.emit(
      new FilterEntitiesPipe().transform(this.items, filters).length
    );
  }
  @ContentChild('scrollItem', { static: false }) scrollItem: TemplateRef<any>;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;
  @Input() itemSize: number;
  @Input() items: Array<any> = [];
  @Input() totalItems: number;
  @Input() batchSize: number;
  @Input() pageNumber: number;
  @Input() loaded$: Observable<boolean>;
  @Input() filteredLoaded$: Observable<boolean>;
  @Output() emitNewPage: EventEmitter<number> = new EventEmitter();
  @Output() emitFilteredItemsLength: EventEmitter<number> = new EventEmitter();
  filters: EntityListViewFilterApplied;
  private sizeChanged: Subject<boolean> = new Subject();
  subscriptions: Subscription = new Subscription();
  @HostListener('window:resize')
  onResize() {
    this.sizeChanged.next(true);
  }

  ngAfterViewInit(): void {
    this.resizeViewportSubscription();
    this.batchOnScrollSubscription();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  trackByIdx(index: number): number {
    return index;
  }

  resizeViewportSubscription() {
    const resizeSubscription = this.sizeChanged.asObservable().subscribe(() => {
      this.viewport.checkViewportSize();
    });

    this.subscriptions.add(resizeSubscription);
  }

  batchOnScrollSubscription() {
    const scrollSubscription = combineLatest([
      this.viewport.scrolledIndexChange,
      this.loaded$,
      this.filteredLoaded$,
    ])
      .pipe(
        tap(([, loaded]) => {
          this.viewport.checkViewportSize();
          if (scrollSubscription && loaded) {
            scrollSubscription.unsubscribe();
          }
        }),
        filter(
          ([firstIndex]) =>
            firstIndex >= this.viewport.getDataLength() - this.batchSize + 1 &&
            this.getNextPage() !== this.pageNumber
        ),
        filter(([, , filteredLoaded]) => !filteredLoaded)
      )
      .subscribe(() => this.emitNewPage.emit(this.getNextPage()));

    this.subscriptions.add(scrollSubscription);
  }

  private getNextPage(): number {
    return Math.round(this.viewport.getDataLength() / this.batchSize + 1);
  }
}
