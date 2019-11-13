import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutSandbox } from '@app/layout/sandbox/layout.sandbox';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  client$ = this.sandbox.client$;
  theme$ = this.sandbox.theme$;
  sidebarVisibility$ = this.sandbox.sidebarVisibility$;
  isLoading$ = this.sandbox.isLoading$;
  confirmModalConfig$ = this.sandbox.confirmModalConfig$;
  showNotification$ = this.sandbox.showNotification$;
  navigation = this.sandbox.navigation;

  constructor(private sandbox: LayoutSandbox) {}

  toggleSidebar() {
    this.sandbox.toggleSidebar();
  }

  onCloseNotification() {
    this.sandbox.onCloseNotification();
  }

  closeModal() {
    this.sandbox.closeModal();
  }
}
