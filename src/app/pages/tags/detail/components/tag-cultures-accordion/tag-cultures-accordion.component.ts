import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonsGroupConfig, Culture, Tag } from '@shared/models';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { TagAccordionGroupBodyPresenter } from './tag-accordion-group-body.presenter';

@Component({
  selector: 'app-tag-cultures-accordion',
  templateUrl: './tag-cultures-accordion.component.html',
  styleUrls: ['./tag-cultures-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagCulturesAccordionComponent {
  @Input() cultures: Array<Culture> = [];
  @Input() fields: Array<FormlyFieldConfig> = [];
  @Input() tag: Tag;
  @Input() draggableHandler = false;
  @Input() activity = false;
  @Input() buttonsConfig: ButtonsGroupConfig;
  @Output() emitTagUpdate: EventEmitter<Partial<Tag>> = new EventEmitter();
  @Output() emitTagCreate: EventEmitter<Partial<Tag>> = new EventEmitter();
  @Output() emitTagChanged: EventEmitter<boolean> = new EventEmitter();

  presenter = TagAccordionGroupBodyPresenter;
  selectedCulture: string;

  hasChanged(changed: boolean) {
    this.emitTagChanged.emit(changed);
  }

  sendTag(tag: Partial<Tag>) {
    if (this.tag) {
      this.emitTagUpdate.emit(tag);
    } else {
      this.emitTagCreate.emit(tag);
    }
  }

  getModel(cultureCode: string) {
    if (this.tag) {
      const { id, cultures } = { ...this.tag };
      return {
        id,
        cultures: {
          [cultureCode]: cultures[cultureCode],
        },
      };
    }
    return {
      cultures: {
        [cultureCode]: {},
      },
    };
  }

  cultureDone(cultureCode: string) {
    return this.tag && this.tag.cultures && this.tag.cultures[cultureCode];
  }

  clickGroup(code: string) {
    this.selectedCulture = code;
  }

  trackByCulture(index: number, culture: Culture): string {
    return culture.code;
  }
}
