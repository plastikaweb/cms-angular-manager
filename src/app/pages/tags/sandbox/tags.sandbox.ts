import { Injectable } from '@angular/core';
import { SetPendingEntity } from '@app/entities/global';
import {
    ChangePaginationFilterTags, CreateTag, getFilteredTagsLoaded, getSelectedTag,
    getSelectedTagFamily, getTagsAll, getTagsBatchSize, getTagsLoaded, getTagsLoading,
    getTagsPageNumber, getTagsTotalTags, getTagsVisibleLength, UpdateTag
} from '@app/entities/tags';
import { PagesState } from '@app/pages/store/reducers';
import { PageFactoryService } from '@app/root/services/page/page-factory.service';
import { Go } from '@app/root/store';
import { select, Store } from '@ngrx/store';
import { Tag, TagApiParams } from '@shared/models';
import { BaseSandbox } from '@shared/services/sandbox/base.sandbox';

@Injectable({
  providedIn: 'root',
})
export class TagsSandbox extends BaseSandbox {
  tags$ = this.store.pipe(select(getTagsAll));
  selectedTag$ = this.store.pipe(select(getSelectedTag));
  selectedTagFamily$ = this.store.pipe(select(getSelectedTagFamily));
  tagActivity$ = this.store.pipe(select(getTagsLoading));
  totalTags$ = this.store.pipe(select(getTagsTotalTags));
  visibleTagsLength$ = this.store.pipe(select(getTagsVisibleLength));
  batchSize$ = this.store.pipe(select(getTagsBatchSize));
  pageNumber$ = this.store.pipe(select(getTagsPageNumber));
  tagsLoaded$ = this.store.pipe(select(getTagsLoaded));
  filteredTagsLoaded$ = this.store.pipe(select(getFilteredTagsLoaded));

  constructor(
    private store: Store<PagesState>,
    protected pageService: PageFactoryService
  ) {
    super(pageService);
  }

  sendHasChanged(changed: boolean) {
    this.store.dispatch(new SetPendingEntity(changed));
  }

  getTags(params: TagApiParams, matchesCount: number) {
    this.store.dispatch(
      new ChangePaginationFilterTags({ params, matchesCount })
    );
  }

  updateTag(tag: Partial<Tag>) {
    const { id, ...changes } = tag;
    this.store.dispatch(new UpdateTag({ id, changes }));
  }

  createTag(tag: Partial<Tag>) {
    this.store.dispatch(new CreateTag(tag));
  }
}
