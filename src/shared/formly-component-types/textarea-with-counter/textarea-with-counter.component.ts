import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'textarea-with-counter',
  templateUrl: './textarea-with-counter.component.html',
  styleUrls: ['./textarea-with-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaWithCounterComponent extends FieldType implements OnInit {
  countedChars: number;

  ngOnInit() {
    this.count();
  }

  count() {
    this.countedChars =
      (this.formControl &&
        this.formControl.value &&
        this.formControl.value.length) ||
      0;
  }
}
