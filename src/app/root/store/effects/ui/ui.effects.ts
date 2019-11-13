import { Injectable } from '@angular/core';
import { ActionsActionTypes } from '@app/entities/actions';
import { RoomsActionTypes } from '@app/entities/rooms/store/actions/rooms.actions';
import { TagFamiliesActionTypes } from '@app/entities/tag-families';
import { TagsActionTypes } from '@app/entities/tags';
import * as fromRoot from '@app/root/store';
import {
    SetRouterActivityOff, SetRouterActivityOn, ShowNotificacion, ToggleSideBarVisibility
} from '@app/root/store/actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATED, ROUTER_REQUEST } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { NotificationConfig, NotificationTypes } from '@shared/models';

import { showNotificationActions, showNotificationTypes } from './show-notification';

import { filter, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class UIEffects {
  @Effect()
  showNotification$ = this.actions$.pipe(
    ofType<showNotificationTypes>(...showNotificationActions),
    map((action: showNotificationTypes) => {
      let payload: NotificationConfig = {
        type: NotificationTypes.error,
        message: `Acción completada con éxito.`,
        config: { timeOut: 10000 },
        title: '',
      };

      switch (action.type) {
        // Error
        case RoomsActionTypes.LoadRoomsFail:
          payload = {
            ...payload,
            message: action.payload,
            title: 'Listado de salas.',
          };
          break;
        case RoomsActionTypes.CreateRoomFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Crear sala.`,
          };
          break;
        case RoomsActionTypes.UpdateRoomFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Actualizar sala.`,
          };
          break;
        case RoomsActionTypes.ReorderRoomsFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Reordenar salas.`,
          };
          break;
        case RoomsActionTypes.RemoveRoomFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Eliminar sala.`,
          };
          break;
        case ActionsActionTypes.LoadActionsFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Listado de acciones.`,
          };
          break;
        case TagFamiliesActionTypes.LoadTagFamiliesFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Listado de familias de etiquetas.`,
          };
          break;
        case TagFamiliesActionTypes.LoadTagFamilyFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Detalle de familia de etiquetas.`,
          };
          break;
        case TagFamiliesActionTypes.ReorderTagFamiliesFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Reordenar familia de etiquetas.`,
          };
          break;
        case TagFamiliesActionTypes.CreateTagFamilyFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Crear familia de etiquetas.`,
          };
          break;
        case TagFamiliesActionTypes.UpdateTagFamilyFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Actualizar familia de etiquetas.`,
          };
          break;
        case TagsActionTypes.LoadTagsFail:
          payload = {
            ...payload,
            message: action.payload,
            title: 'Listado de etiquetas.',
          };
          break;
        case TagsActionTypes.LoadTagFail:
          payload = {
            ...payload,
            message: action.payload,
            title: 'Detalle de etiqueta.',
          };
          break;
        case TagsActionTypes.UpdateTagFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Actualizar etiqueta.`,
          };
          break;
        case TagsActionTypes.CreateTagFail:
          payload = {
            ...payload,
            message: action.payload,
            title: `Crear etiqueta.`,
          };
          break;
        // Success
        case RoomsActionTypes.CreateRoomSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Crear ${action.payload.name}.`,
            config: { closeButton: false },
          };
          break;
        case RoomsActionTypes.UpdateRoomSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Actualizar ${action.payload.changes.name}.`,
            config: { closeButton: false },
          };
          break;
        case RoomsActionTypes.ReorderRoomsSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Actualizar ordenación de las salas.`,
            config: { timeOut: 1500, closeButton: false },
          };
          break;
        case RoomsActionTypes.RemoveRoomSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Eliminar ${action.payload.name}.`,
            config: { closeButton: false },
          };
          break;
        case TagFamiliesActionTypes.CreateTagFamilySuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Crear ${action.payload.name}.`,
            config: { closeButton: false },
          };
          break;
        case TagFamiliesActionTypes.ReorderTagFamiliesSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Reordenar familia de etiquetas.`,
            config: { timeOut: 1500, closeButton: false },
          };
          break;
        case TagFamiliesActionTypes.UpdateTagFamilySuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Actualizar ${action.payload.name}.`,
            config: { closeButton: false },
          };
          break;
        case TagsActionTypes.UpdateTagSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Actualizar ${action.payload.changes.name}.`,
            config: { closeButton: false },
          };
          break;
        case TagsActionTypes.CreateTagSuccess:
          payload = {
            ...payload,
            type: NotificationTypes.success,
            title: `Crear ${action.payload.name}.`,
            config: { closeButton: false },
          };
          break;
      }
      return new ShowNotificacion(payload);
    })
  );

  @Effect()
  routerRequest$ = this.actions$.pipe(
    ofType(ROUTER_REQUEST),
    map(() => new SetRouterActivityOn())
  );

  @Effect()
  routerEnd$ = this.actions$.pipe(
    ofType(ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATED),
    map(() => new SetRouterActivityOff())
  );

  @Effect()
  routerNavigated$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    withLatestFrom(this.store.select(fromRoot.getUISidebarVisibility)),
    filter(([, sideBarVisibility]: [never, boolean]) => sideBarVisibility),
    map(() => new ToggleSideBarVisibility())
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.RootState>
  ) {}
}
