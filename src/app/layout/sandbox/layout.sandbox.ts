import { Injectable } from '@angular/core';
import { ConfigService } from '@app/root/services/config/config.service';
import * as fromRoot from '@app/root/store';
import { select, Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class LayoutSandbox {
  client$ = this.store.pipe(select(fromRoot.getClientFeatureState));
  theme$ = this.store.pipe(select(fromRoot.getClientTheme));
  sidebarVisibility$ = this.store.pipe(select(fromRoot.getUISidebarVisibility));
  isLoading$ = this.store.pipe(select(fromRoot.getActivity));
  showNotification$ = this.store.pipe(select(fromRoot.getUINotification));
  confirmModalConfig$ = this.store.pipe(
    select(fromRoot.getUIConfirmationModal)
  );
  navigation = ConfigService.settings && ConfigService.settings.navigation;

  constructor(private store: Store<fromRoot.RootState>) {}

  toggleSidebar() {
    this.store.dispatch(new fromRoot.ToggleSideBarVisibility());
  }

  onCloseNotification() {
    this.store.dispatch(new fromRoot.ResetNotification());
  }

  closeModal() {
    this.store.dispatch(new fromRoot.HideConfirmationModal());
  }
}
