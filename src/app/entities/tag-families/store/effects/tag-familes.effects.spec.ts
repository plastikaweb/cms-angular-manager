import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TagFamiliesService } from '@app/entities/tag-families/services/tag-families.service';
import { TagFamiliesEffects } from '@app/entities/tag-families/store/effects/tag-families.effects';
import { Go } from '@app/root/store';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import {
    createTagFamilyMock, tagFamiliesApiResponseMock, tagFamilyCreateApiResponseMock,
    updateTagFirstLevelFamilyMock
} from '@shared/mocks';

import {
    CreateTagFamily, CreateTagFamilyFail, CreateTagFamilySuccess, LoadTagFamilies,
    LoadTagFamiliesFail, LoadTagFamiliesSuccess, LoadTagFamily, LoadTagFamilyFail,
    LoadTagFamilySuccess, ReorderTagFamilies, ReorderTagFamiliesFail, ReorderTagFamiliesSuccess,
    UpdateTagFamily, UpdateTagFamilyFail, UpdateTagFamilySuccess
} from '../actions/tag-families.actions';

import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

describe('Tag Families Effects', () => {
  let effects: TagFamiliesEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<TagFamiliesEffects>;
  let tagFamiliesService: TagFamiliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        TagFamiliesEffects,
        provideMockActions(() => actions),
        {
          provide: TagFamiliesService,
          useValue: {
            list: jest.fn(),
            detail: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            updatePositions: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.get(TagFamiliesEffects);
    metadata = getEffectsMetadata(effects);
    tagFamiliesService = TestBed.get(TagFamiliesService);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('should pass through loadTagFamilies', () => {
    const action = new LoadTagFamilies();
    test('should return success action', () => {
      const outcome = new LoadTagFamiliesSuccess(
        tagFamiliesApiResponseMock.payload
      );

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagFamiliesApiResponseMock });
      tagFamiliesService.list = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadTagFamilies$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new LoadTagFamiliesFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagFamiliesService.list = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.loadTagFamilies$).toBeObservable(expected);
    });

    test('should register loadTagFamilies$ that dispatches an action', () => {
      expect(metadata.loadTagFamilies$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through loadTagFamily', () => {
    const action = new LoadTagFamily(1);
    test('should return success action', () => {
      const outcome = new LoadTagFamilySuccess(
        tagFamilyCreateApiResponseMock.payload
      );

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagFamilyCreateApiResponseMock });
      tagFamiliesService.detail = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadTagFamily$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new LoadTagFamilyFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagFamiliesService.detail = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.loadTagFamily$).toBeObservable(expected);
    });

    test('should register loadTagFamily$ that dispatches an action', () => {
      expect(metadata.loadTagFamily$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through loadTagFamilyFail', () => {
    test('should return Go action', () => {
      const action = new LoadTagFamilyFail('Error!!!');
      const outcome = new Go({ path: ['tag-families'] });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.loadTagFamilyFail$).toBeObservable(expected);
    });

    test('should register loadTagFamilyFail$ that dispatches an action', () => {
      expect(metadata.loadTagFamilyFail$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through createTagFamily', () => {
    const action = new CreateTagFamily(createTagFamilyMock);
    test('should return success action', () => {
      const outcome = new CreateTagFamilySuccess(
        tagFamilyCreateApiResponseMock.payload
      );

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagFamilyCreateApiResponseMock });
      tagFamiliesService.create = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.createTagFamily$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new CreateTagFamilyFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagFamiliesService.create = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.createTagFamily$).toBeObservable(expected);
    });

    test('should register createTagFamily$ that dispatches an action', () => {
      expect(metadata.createTagFamily$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through updateTagFamily', () => {
    test('should return success action', () => {
      const action = new UpdateTagFamily(updateTagFirstLevelFamilyMock);
      const outcome = new UpdateTagFamilySuccess(
        tagFamilyCreateApiResponseMock.payload
      );

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagFamilyCreateApiResponseMock });
      tagFamiliesService.update = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.updateTagFamily$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const action = new UpdateTagFamily(createTagFamilyMock);
      const outcome = new UpdateTagFamilyFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagFamiliesService.update = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.updateTagFamily$).toBeObservable(expected);
    });

    test('should register updateTagFamily$ that dispatches an action', () => {
      expect(metadata.updateTagFamily$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through updateTagFamiliesOrdering', () => {
    const action = new ReorderTagFamilies({
      id: 1,
      parentId: 2,
      to: 2,
      from: 0,
    });
    test('should return success action', () => {
      const outcome = new ReorderTagFamiliesSuccess();

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: null });
      tagFamiliesService.updatePositions = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.updateTagFamiliesOrdering$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new ReorderTagFamiliesFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagFamiliesService.updatePositions = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.updateTagFamiliesOrdering$).toBeObservable(expected);
    });
    test('should register updateTagFamiliesOrdering$ that dispatches an action', () => {
      expect(metadata.updateTagFamiliesOrdering$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });
});
