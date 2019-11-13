import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '@app/../environments/environment';
import { ClientState } from '@app/root/store/reducers/client/client.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() client: ClientState;
  @Input() sidebarVisibility: boolean;
  @Output() emitSidebarVisibility: EventEmitter<void> = new EventEmitter();
  assetsUrl: any = environment.assetsUrl;

  toggleSidebar() {
    this.emitSidebarVisibility.emit();
  }
}
