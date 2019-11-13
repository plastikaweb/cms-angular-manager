import {
    ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, OnInit, Output
} from '@angular/core';
import { ButtonsGroupConfig } from '@shared/models';

import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-accordion-group-body',
  templateUrl: './accordion-group-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionGroupBodyComponent implements OnInit {
  @Input() fields: Array<FormlyFieldConfig>;
  @Input() buttonsConfig: ButtonsGroupConfig;
  @Input() activity: boolean;
  @Input() showRemoveBtn = true;
  @Input() injectedPresenter;
  @Input() isSelected = false;
  @Input() group;
  @Output() emitRemove: EventEmitter<Partial<any>> = new EventEmitter();
  @Output() emitHasChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() emitChange: EventEmitter<Partial<any>> = new EventEmitter();
  model: Partial<any> = {};
  hasChanged = false;
  presenter: any;

  constructor(private injector: Injector) {}

  ngOnInit() {
    if (this.injectedPresenter) {
      this.presenter = this.injector.get<any>(this.injectedPresenter);
      this.model = this.presenter.getCleanedModel({ ...this.group });
    } else {
      this.model = { ...this.group };
    }
  }

  getName() {
    return this.model.name || this.model.title;
  }

  sendHasChanged() {
    if (!this.hasChanged) {
      this.hasChanged = true;
      this.emitHasChanged.emit(this.hasChanged);
    }
  }

  submit(model) {
    this.emitChange.emit(
      this.presenter && this.presenter.sendCleanedModel
        ? this.presenter.sendCleanedModel(model, this.group)
        : model
    );
  }

  remove() {
    const { id, name } = this.model;
    this.emitRemove.emit({ id, name });
  }
}
