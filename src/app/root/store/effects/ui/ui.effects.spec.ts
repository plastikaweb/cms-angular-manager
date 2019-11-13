import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoadActionsFail } from '@app/entities/actions';
import {
    CreateRoomFail, CreateRoomSuccess, LoadRoomsFail, RemoveRoomFail, RemoveRoomSuccess,
    ReorderRoomsFail, ReorderRoomsSuccess, UpdateRoomFail, UpdateRoomSuccess
} from '@app/entities/rooms';
import {
    CreateTagFamilyFail, CreateTagFamilySuccess, LoadTagFamiliesFail, LoadTagFamilyFail,
    ReorderTagFamiliesFail, ReorderTagFamiliesSuccess, UpdateTagFamilyFail, UpdateTagFamilySuccess
} from '@app/entities/tag-families';
import {
    CreateTagFail, CreateTagSuccess, LoadTagFail, LoadTagsFail, UpdateTagFail, UpdateTagSuccess
} from '@app/entities/tags';
import {
    SetRouterActivityOff, SetRouterActivityOn, ShowNotificacion, ToggleSideBarVisibility
} from '@app/root/store/actions';
import { UIEffects } from '@app/root/store/effects/ui/ui.effects';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATED, ROUTER_REQUEST } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { roomsListMock, tagUpdateApiResponseMock } from '@shared/mocks';
import { NotificationTypes } from '@shared/models';

import { cold, hot } from 'jasmine-marbles';
import { Observable, of, Subject } from 'rxjs';

class TestStore<T> {
  private state: Subject<T> = new Subject();
  setState(data: T) {
    this.state.next(data);
  }
  pipe() {
    return this.select();
  }
  select(selector?: any): Observable<any> {
    return of(true);
  }
  dispatch(action: any) {}
}

describe('UI Effects', () => {
  let effects: UIEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<UIEffects>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [
        provideMockActions(() => actions),
        UIEffects,
        { provide: Store, useClass: TestStore },
      ],
    });
    effects = TestBed.get(UIEffects);
    metadata = getEffectsMetadata(effects);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('set router activity', () => {
    test('should return true on RouterRequest', () => {
      const outcome = new SetRouterActivityOn();

      actions = hot('-a', { a: { type: ROUTER_REQUEST } });
      const expected = cold('-b', { b: outcome });

      expect(effects.routerRequest$).toBeObservable(expected);
    });

    test('should register routerRequest$ that dispatches an action', () => {
      expect(metadata.routerRequest$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });

    test('should return false on RouterError', () => {
      const outcome = new SetRouterActivityOff();

      actions = hot('-a', { a: { type: ROUTER_ERROR } });
      const expected = cold('-b', { b: outcome });

      expect(effects.routerEnd$).toBeObservable(expected);
    });

    test('should return false on RouterCancel', () => {
      const outcome = new SetRouterActivityOff();

      actions = hot('-a', { a: { type: ROUTER_CANCEL } });
      const expected = cold('-b', { b: outcome });

      expect(effects.routerEnd$).toBeObservable(expected);
    });

    test('should return false on RouterNavigated', () => {
      const outcome = new SetRouterActivityOff();

      actions = hot('-a', { a: { type: ROUTER_NAVIGATED } });
      const expected = cold('-b', { b: outcome });

      expect(effects.routerEnd$).toBeObservable(expected);
    });

    test('should register routerEnd$ that dispatches an action', () => {
      expect(metadata.routerEnd$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });

    test('should dispatch SidebarVisibility toggle if sidenav is visible', () => {
      const outcome = new ToggleSideBarVisibility();

      actions = hot('-a', { a: { type: ROUTER_NAVIGATED } });
      const expected = cold('-b', { b: outcome });

      expect(effects.routerNavigated$).toBeObservable(expected);
    });

    test('should register routerNavigated$ that dispatches an action', () => {
      expect(metadata.routerNavigated$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('show Notification', () => {
    test('should return Load Rooms Fail notification action', () => {
      const message = 'Error!!!';
      const action = new LoadRoomsFail(message);
      const outcome = new ShowNotificacion({
        title: 'Listado de salas.',
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Create Room Fail notification action', () => {
      const message = 'Error!!!';
      const action = new CreateRoomFail(message);
      const outcome = new ShowNotificacion({
        title: `Crear sala.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Update Room Fail notification action', () => {
      const message = 'Error!!!';
      const action = new UpdateRoomFail(message);
      const outcome = new ShowNotificacion({
        title: `Actualizar sala.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Reorder Rooms Fail notification action', () => {
      const message = 'Error!!!';
      const action = new ReorderRoomsFail(message);
      const outcome = new ShowNotificacion({
        title: `Reordenar salas.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Remove Room Fail notification action', () => {
      const message = 'Error!!!';
      const action = new RemoveRoomFail(message);
      const outcome = new ShowNotificacion({
        title: `Eliminar sala.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Load Actions Fail notification action', () => {
      const message = 'Error!!!';
      const action = new LoadActionsFail(message);
      const outcome = new ShowNotificacion({
        title: `Listado de acciones.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Load Tag Families Fail notification action', () => {
      const message = 'Error!!!';
      const action = new LoadTagFamiliesFail(message);
      const outcome = new ShowNotificacion({
        title: `Listado de familias de etiquetas.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Load Tag Family Fail notification action', () => {
      const message = 'Error!!!';
      const action = new LoadTagFamilyFail(message);
      const outcome = new ShowNotificacion({
        title: `Detalle de familia de etiquetas.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Create Tag Family Fail notification action', () => {
      const message = 'Error!!!';
      const action = new CreateTagFamilyFail(message);
      const outcome = new ShowNotificacion({
        title: `Crear familia de etiquetas.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Update Tag Family Fail notification action', () => {
      const message = 'Error!!!';
      const action = new UpdateTagFamilyFail(message);
      const outcome = new ShowNotificacion({
        title: `Actualizar familia de etiquetas.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Reorder Tag Families Fail notification action', () => {
      const message = 'Error!!!';
      const action = new ReorderTagFamiliesFail(message);
      const outcome = new ShowNotificacion({
        title: `Reordenar familia de etiquetas.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Load Tags Fail notification action', () => {
      const message = 'Error!!!';
      const action = new LoadTagsFail(message);
      const outcome = new ShowNotificacion({
        title: 'Listado de etiquetas.',
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Load Tag Fail notification action', () => {
      const message = 'Error!!!';
      const action = new LoadTagFail(message);
      const outcome = new ShowNotificacion({
        title: 'Detalle de etiqueta.',
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Update Tag Fail notification action', () => {
      const message = 'Error!!!';
      const action = new UpdateTagFail(message);
      const outcome = new ShowNotificacion({
        title: 'Actualizar etiqueta.',
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Create Tag Fail notification action', () => {
      const message = 'Error!!!';
      const action = new CreateTagFail(message);
      const outcome = new ShowNotificacion({
        title: `Crear etiqueta.`,
        type: NotificationTypes.error,
        config: { timeOut: 10000 },
        message,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Create Room Success notification action', () => {
      const action = new CreateRoomSuccess(roomsListMock[0]);
      const outcome = new ShowNotificacion({
        title: `Crear ${roomsListMock[0].name}.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Update Room Success notification action', () => {
      const { id, ...changes } = roomsListMock[0];
      const payload = {
        id,
        changes,
      };
      const action = new UpdateRoomSuccess(payload);
      const outcome = new ShowNotificacion({
        title: `Actualizar ${payload.changes.name}.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Reorder Rooms Success notification action', () => {
      const action = new ReorderRoomsSuccess();
      const outcome = new ShowNotificacion({
        title: `Actualizar ordenación de las salas.`,
        type: NotificationTypes.success,
        config: { timeOut: 1500, closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Remove Room Success notification action', () => {
      const action = new RemoveRoomSuccess({ id: 1, name: 'sala A' });
      const outcome = new ShowNotificacion({
        title: `Eliminar sala A.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Create Tag Family Success notification action', () => {
      const action = new CreateTagFamilySuccess({
        id: 1,
        parentId: null,
        name: 'new tag',
        tagId: null,
        children: null,
      });
      const outcome = new ShowNotificacion({
        title: `Crear new tag.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Update Tag Family Success notification action', () => {
      const action = new UpdateTagFamilySuccess({
        id: 41,
        parentId: 32,
        name: 'edit tag',
        tagId: null,
        children: null,
      });
      const outcome = new ShowNotificacion({
        title: `Actualizar edit tag.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Reorder Tag Families Success notification action', () => {
      const action = new ReorderTagFamiliesSuccess();
      const outcome = new ShowNotificacion({
        title: `Reordenar familia de etiquetas.`,
        type: NotificationTypes.success,
        config: { timeOut: 1500, closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Update Tag Success notification action', () => {
      const { id, ...changes } = tagUpdateApiResponseMock.payload;
      const action = new UpdateTagSuccess({ id, changes });
      const outcome = new ShowNotificacion({
        title: `Actualizar ${changes.name}.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should return Create Tag Success notification action', () => {
      const payload = tagUpdateApiResponseMock.payload;
      const action = new CreateTagSuccess(payload);
      const outcome = new ShowNotificacion({
        title: `Crear ${payload.name}.`,
        type: NotificationTypes.success,
        config: { closeButton: false },
        message: `Acción completada con éxito.`,
      });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.showNotification$).toBeObservable(expected);
    });

    test('should register showNotification$ that dispatches an action', () => {
      expect(metadata.showNotification$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });
});
