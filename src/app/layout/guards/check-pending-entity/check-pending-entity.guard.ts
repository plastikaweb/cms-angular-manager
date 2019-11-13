import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { SetPendingEntity } from '@app/entities/global/store/actions/global-entities.actions';
import {
    getEntitiesPendingEdition
} from '@app/entities/global/store/selectors/global-entities.selectors';
import { Go, HideConfirmationModal, RootState, ShowConfirmationModal } from '@app/root/store';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ChecPendingEntityGuard implements CanActivateChild {
  constructor(private store: Store<RootState>) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const newPath: Array<string> = state.url.split('/');

    return this.store.pipe(
      select(getEntitiesPendingEdition),
      map(pending => {
        if (pending) {
          this.cancelNewRoom([...newPath.slice(2)]);
          return false;
        }
        return true;
      })
    );
  }

  cancelNewRoom(newPath: Array<string>) {
    this.store.dispatch(
      new ShowConfirmationModal({
        visible: true,
        title: `Tienes cambios no guardados`,
        body: `¿Realmente quieres abandonar esta página?`,
        action: () => {
          this.store.dispatch(new SetPendingEntity(false));
          this.store.dispatch(new HideConfirmationModal());
          this.store.dispatch(new Go({ path: newPath }));
        },
      })
    );
  }
}
