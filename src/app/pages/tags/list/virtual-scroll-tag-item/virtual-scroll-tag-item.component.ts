import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Culture, DynamicScrollItem } from '@shared/models';

@Component({
  selector: 'app-virtual-scroll-tag-item',
  templateUrl: './virtual-scroll-tag-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollTagItemComponent implements DynamicScrollItem {
  @Input() cultures: Array<Culture>;
  @Input() item;

  printFlag(flag: string) {
    return (this.cultures[flag] && this.cultures[flag].icon) || '';
  }

  trackByCulture(index: number, culture: Culture): string {
    return culture.code;
  }
}
