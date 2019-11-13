import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoadActions, LoadActionsFail, LoadActionsSuccess } from '@app/entities/actions';
import { ActionsService } from '@app/entities/actions/services/actions.service';
import { ActionsEffects } from '@app/entities/actions/store/effects/actions.effects';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { actionsApiResponseMock } from '@shared/mocks';

import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

describe('Actions Effects', () => {
  let effects: ActionsEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<ActionsEffects>;
  let actionsService: ActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ActionsEffects,
        provideMockActions(() => actions),
        {
          provide: ActionsService,
          useValue: {
            list: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.get(ActionsEffects);
    metadata = getEffectsMetadata(effects);
    actionsService = TestBed.get(ActionsService);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });
  describe('should pass through loadActions', () => {
    const action = new LoadActions();
    test('should return success action', () => {
      const outcome = new LoadActionsSuccess(actionsApiResponseMock.payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: actionsApiResponseMock });
      actionsService.list = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadActions$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new LoadActionsFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      actionsService.list = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.loadActions$).toBeObservable(expected);
    });

    test('should register loadActions$ that dispatches an action', () => {
      expect(metadata.loadActions$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });
});
