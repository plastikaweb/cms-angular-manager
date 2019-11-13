import { TestBed } from '@angular/core/testing';
import { SetPendingEntity } from '@app/entities/global/store/actions/global-entities.actions';
import { GlobalEntitiesEffects } from '@app/entities/global/store/effects/global-entities.effects';
import { CreateRoomSuccess, RemoveRoomSuccess, UpdateRoomSuccess } from '@app/entities/rooms';
import { CreateTagSuccess, UpdateTagSuccess } from '@app/entities/tags';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

describe('GlobalEntities Effects', () => {
  let effects: GlobalEntitiesEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<GlobalEntitiesEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [GlobalEntitiesEffects, provideMockActions(() => actions)],
    });

    effects = TestBed.get(GlobalEntitiesEffects);
    metadata = getEffectsMetadata(effects);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('should set Pending Entity edition to false', () => {
    test('on CreateRoomSuccess', () => {
      const action = new CreateRoomSuccess(null);
      const outcome = new SetPendingEntity(false);

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.crudEntity$).toBeObservable(expected);
    });

    test('on UpdateRoomSuccess', () => {
      const action = new UpdateRoomSuccess(null);
      const outcome = new SetPendingEntity(false);

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.crudEntity$).toBeObservable(expected);
    });

    test('on RemoveRoomSuccess', () => {
      const action = new RemoveRoomSuccess(null);
      const outcome = new SetPendingEntity(false);

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.crudEntity$).toBeObservable(expected);
    });

    test('on CreateTagSuccess', () => {
      const action = new CreateTagSuccess(null);
      const outcome = new SetPendingEntity(false);

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.crudEntity$).toBeObservable(expected);
    });

    test('on UpdateTagSuccess', () => {
      const action = new UpdateTagSuccess(null);
      const outcome = new SetPendingEntity(false);

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.crudEntity$).toBeObservable(expected);
    });

    test('should register crudEntity$ that dispatches an action', () => {
      expect(metadata.crudEntity$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });
});
