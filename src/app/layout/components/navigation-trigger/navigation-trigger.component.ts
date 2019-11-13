import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-trigger',
  templateUrl: './navigation-trigger.component.html',
  styleUrls: ['./navigation-trigger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTriggerComponent {
  @Input() sidebarVisibility: boolean;
  @Output() emitSidebarVisibility: EventEmitter<void> = new EventEmitter();

  toggleSidebar() {
    this.emitSidebarVisibility.emit();
  }
}
