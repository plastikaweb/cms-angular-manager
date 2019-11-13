import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TagFamiliesSandbox } from '@app/pages/tag-families/sandbox/tag-families.sandbox';
import { CustomTreeMove, TagFamily, TreeListFilter } from '@shared/models';

import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-tag-families-list',
  templateUrl: './tag-families-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagFamiliesListComponent implements OnInit {
  tagFamilies$ = this.sandbox.tagFamilies$;
  lastNode$ = this.sandbox.tagFamiliesLastNodeEdition$;
  pageConfig$ = this.sandbox.pageConfig$;
  private isTreeCollapsed = new BehaviorSubject(true);
  isTreeCollapsed$ = this.isTreeCollapsed.asObservable();
  filterValue = new Subject<{ name: string; pending: boolean }>();
  filterValue$: Observable<Array<TreeListFilter>>;
  filters = { name: '', pending: false };

  constructor(private sandbox: TagFamiliesSandbox) {}

  ngOnInit() {
    this.filterValue$ = combineLatest([
      this.pageConfig$,
      this.filterValue.asObservable(),
    ]).pipe(
      debounceTime(200),
      map(([config, filters]) => {
        return config.filter.map(filterItem => {
          return {
            field: filterItem.field,
            value: filters[filterItem.field],
            inputType: filterItem.inputType,
            evaluate: filterItem.evaluate || null,
          };
        });
      }),
      shareReplay(1)
    );
  }
  setTagFamiliesOrder(newOrder: CustomTreeMove<TagFamily>) {
    this.sandbox.setTagFamiliesOrder(newOrder);
  }

  addNewTagFamily(family: Partial<TagFamily>) {
    this.sandbox.addNewTagFamily(family);
  }

  editTagFamily(family: Partial<TagFamily>) {
    this.sandbox.editTagFamily(family);
  }

  goToEditTag(tagId: number) {
    this.sandbox.goToEditTag(tagId);
  }

  goToNewTag(familyId: number) {
    this.sandbox.goToNewTag(familyId);
  }

  toggleTree(collapse: boolean) {
    this.isTreeCollapsed.next(collapse);
  }

  doFilter(value: { name: string; pending: boolean }) {
    this.filters = {
      ...this.filters,
      ...value,
    };

    this.filterValue.next(this.filters);
  }
}
