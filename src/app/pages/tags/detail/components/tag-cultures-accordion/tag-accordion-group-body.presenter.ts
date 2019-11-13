import { Injectable } from '@angular/core';
import { EntityPresenter, Tag, TagTranslationFields } from '@shared/models';

import { isEmpty } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class TagAccordionGroupBodyPresenter
  implements EntityPresenter<Tag, TagTranslationFields> {
  getCleanedModel(tag: Tag): TagTranslationFields | object {
    if (tag && !isEmpty(tag)) {
      const key = Object.keys(tag && tag.cultures)[0];
      return tag && tag.cultures[key];
    }
    return {};
  }

  sendCleanedModel(model: TagTranslationFields, group: Tag): Partial<Tag> {
    const { id } = group;
    const key = Object.keys(group && group.cultures)[0];
    return {
      id,
      cultures: {
        [key]: model,
      },
    };
  }
}
