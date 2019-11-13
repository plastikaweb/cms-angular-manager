import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Culture, Tag } from '@shared/models';
import { ObjectUtils } from '@shared/utils';

import { TagsSandbox } from '../sandbox/tags.sandbox';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagDetailComponent {
  selectedTag$ = this.sandbox.selectedTag$;
  selectedTagFamily$ = this.sandbox.selectedTagFamily$;
  pageConfig$ = this.sandbox.pageConfig$;
  activity$ = this.sandbox.tagActivity$;
  cultures = ObjectUtils.objectToArray<Culture>(this.sandbox.getCultures());

  constructor(private sandbox: TagsSandbox) {}

  emitTagHasChanged(changed: boolean) {
    this.sandbox.sendHasChanged(changed);
  }

  updateTag(tag: Partial<Tag>) {
    this.sandbox.updateTag(tag);
  }

  createTag(tag: Partial<Tag>) {
    this.sandbox.createTag(tag);
  }
}
