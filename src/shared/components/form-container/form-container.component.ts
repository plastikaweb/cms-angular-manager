import {
    ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2,
    ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonsGroupConfig } from '@shared/models';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContainerComponent {
  form = new FormGroup({});
  @Input() options: FormlyFormOptions = {};
  @Input() activity: boolean;
  @Input() model: Partial<any> = {};
  @Input() buttonsConfig: ButtonsGroupConfig;
  @Input()
  fields: Array<FormlyFieldConfig> = [];
  @Input() set focusOnFirstInput(focus: boolean) {
    if (focus && this.fields && this.fields[0].fieldGroup[0].focus) {
      const { type } = this.fields[0].fieldGroup[0];
      const firstInput = this.elRef.nativeElement.querySelector(
        `.autofocus ${type}`
      );
      if (firstInput && this.renderer.selectRootElement(firstInput)) {
        this.renderer.selectRootElement(firstInput).focus();
      }
    }
  }
  @Output() emitSend: EventEmitter<Partial<any>> = new EventEmitter();
  @Output() emitChanged: EventEmitter<Partial<any>> = new EventEmitter();
  @ViewChild('input:first', { static: false }) input: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  modelChange(newModel) {
    this.model = newModel;
    this.emitChanged.emit(this.model);
  }

  submit() {
    if (this.form.valid) {
      this.form.markAsPristine();
      this.emitSend.emit(this.model);
    }
  }
}
