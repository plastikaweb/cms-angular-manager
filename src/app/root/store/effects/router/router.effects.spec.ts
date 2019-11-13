import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterEffects } from '@app/root/store/effects/router/router.effects';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { Observable, of } from 'rxjs';

describe('Router Effects', () => {
  const actions: Observable<any> = of({});
  let effects: RouterEffects;
  let metadata: EffectsMetadata<RouterEffects>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
      ],
      providers: [
        provideMockActions(() => actions),
        RouterEffects,
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    });
    effects = TestBed.get(RouterEffects);
    metadata = getEffectsMetadata(effects);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('go action', () => {
    test('should register navigate$ that dispatches no action', () => {
      expect(metadata.navigate$).toEqual({
        dispatch: false,
        resubscribeOnError: true,
      });
    });
  });

  describe('back action', () => {
    test('should register navigateBack$ that dispatches no action', () => {
      expect(metadata.navigateBack$).toEqual({
        dispatch: false,
        resubscribeOnError: true,
      });
    });
  });

  describe('forward action', () => {
    test('should register navigateForward$ that dispatches no action', () => {
      expect(metadata.navigateForward$).toEqual({
        dispatch: false,
        resubscribeOnError: true,
      });
    });
  });

  describe('router navigated action', () => {
    test('should register updateTitle$ that dispatches no action', () => {
      expect(metadata.updateTitle$).toEqual({
        dispatch: false,
        resubscribeOnError: true,
      });
    });
  });
});
