import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationItem } from '@shared/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() sidebarVisibility: boolean;
  @Input() navigation: Array<NavigationItem>;

  trackByItem(index: number, item: NavigationItem): string {
    return item.id;
  }
}
