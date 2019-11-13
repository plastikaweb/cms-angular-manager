import { Injectable } from '@angular/core';
import {
    CreateTagFamily, getTagFamiliesAll, getTagFamiliesLastNodeEdition, ReorderTagFamilies,
    UpdateTagFamily
} from '@app/entities/tag-families';
import { PageFactoryService } from '@app/root/services/page/page-factory.service';
import { Go, RootState } from '@app/root/store';
import { select, Store } from '@ngrx/store';
import { CustomTreeMove, TagFamily } from '@shared/models';
import { BaseSandbox } from '@shared/services/sandbox/base.sandbox';

@Injectable({
  providedIn: 'root',
})
export class TagFamiliesSandbox extends BaseSandbox {
  tagFamilies$ = this.store.pipe(select(getTagFamiliesAll));
  tagFamiliesLastNodeEdition$ = this.store.pipe(
    select(getTagFamiliesLastNodeEdition)
  );

  constructor(
    private store: Store<RootState>,
    protected pageService: PageFactoryService
  ) {
    super(pageService);
  }

  setTagFamiliesOrder({ parent, node }: CustomTreeMove<TagFamily>) {
    const { id, hasParent, currentPosition: from, newPosition: to } = node;

    this.store.dispatch(
      new ReorderTagFamilies({
        id,
        parentId: hasParent ? parent.id : null,
        from,
        to,
      })
    );
  }

  addNewTagFamily(data: Partial<TagFamily>) {
    this.store.dispatch(new CreateTagFamily(data));
  }

  editTagFamily(data: Partial<TagFamily>) {
    this.store.dispatch(new UpdateTagFamily(data));
  }

  goToEditTag(tagId: number) {
    this.store.dispatch(new Go({ path: ['tags', tagId] }));
  }

  goToNewTag(familyId: number) {
    this.store.dispatch(new Go({ path: ['tags', 'new', familyId] }));
  }
}
