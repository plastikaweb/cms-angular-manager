import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Room } from '@shared/models';

@Component({
  selector: 'app-accordion-group-header',
  templateUrl: './accordion-group-header.component.html',
  styleUrls: ['./accordion-group-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionGroupHeaderComponent {
  @Input() group: Room;
  @Input() draggableHandler = true;
}
