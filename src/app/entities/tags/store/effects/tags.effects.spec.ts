import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoadTagFamily } from '@app/entities/tag-families';
import { TagsService } from '@app/entities/tags/services/tags.service';
import { Go } from '@app/root/store';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import {
    tagApiResponseMock, tagsApiResponseMock, tagUpdateApiResponseMock, updateTagPayload
} from '@shared/mocks';

import {
    CreateTag, CreateTagFail, CreateTagSuccess, LoadTag, LoadTagFail, LoadTags, LoadTagsFail,
    LoadTagsSuccess, LoadTagSuccess, UpdateTag, UpdateTagFail, UpdateTagSuccess
} from '../actions/tags.actions';
import { TagsEffects } from './tags.effects';

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
    return of({ id: 1, name: 'tag family name' });
  }
  dispatch(action: any) {}
}

describe('Tags Effects', () => {
  let effects: TagsEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<TagsEffects>;
  let tagsService: TagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      providers: [
        TagsEffects,
        provideMockActions(() => actions),
        {
          provide: TagsService,
          useValue: {
            list: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            detail: jest.fn(),
          },
        },
        { provide: Store, useClass: TestStore },
      ],
    });

    effects = TestBed.get(TagsEffects);
    metadata = getEffectsMetadata(effects);
    tagsService = TestBed.get(TagsService);
  });

  test('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('should pass through changePageFilterTags', () => {
    test('should register changePageFilterTags$ that dispatches an action', () => {
      expect(metadata.changePageFilterTags$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through loadTags', () => {
    const action = new LoadTags({ number: 1 });
    test('should return success action', () => {
      const outcome = new LoadTagsSuccess(tagsApiResponseMock.payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagsApiResponseMock });
      tagsService.list = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadTags$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new LoadTagsFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagsService.list = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.loadTags$).toBeObservable(expected);
    });

    test('should register loadTags$ that dispatches an action', () => {
      expect(metadata.loadTags$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through loadTag', () => {
    const action = new LoadTag(1);
    test('should return success action', () => {
      const outcome = new LoadTagSuccess(tagApiResponseMock.payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagApiResponseMock });
      tagsService.detail = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadTag$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new LoadTagFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagsService.detail = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.loadTag$).toBeObservable(expected);
    });

    test('should register loadTag$ that dispatches an action', () => {
      expect(metadata.loadTag$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('load tag fail', () => {
    test('should return Go action', () => {
      const action = new LoadTagFail('Error!!');
      const outcome = new Go({ path: ['tags'] });

      actions = hot('-a', { a: action });
      const expected = cold('-b', { b: outcome });

      expect(effects.loadTagFail$).toBeObservable(expected);
    });

    test('should register loadTagFail$ that dispatches an action', () => {
      expect(metadata.loadTagFail$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through updateTag', () => {
    const { id, ...updates } = updateTagPayload;
    const action = new UpdateTag({ id, changes: updates });

    test('should return success action', () => {
      const { id: ID, ...changes } = tagUpdateApiResponseMock.payload;
      const payload = { id, changes };
      const outcome = new UpdateTagSuccess(payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagUpdateApiResponseMock });
      tagsService.update = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.updateTag$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new UpdateTagFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagsService.update = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.updateTag$).toBeObservable(expected);
    });

    test('should register updateTag$ that dispatches an action', () => {
      expect(metadata.updateTag$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('should pass through createTag', () => {
    const { id, ...creates } = updateTagPayload;
    const action = new CreateTag(creates);

    test('should return success action', () => {
      const outcome = new CreateTagSuccess(tagUpdateApiResponseMock.payload);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tagUpdateApiResponseMock });
      tagsService.create = jest.fn(() => response);
      const expected = cold('--b', { b: outcome });

      expect(effects.createTag$).toBeObservable(expected);
    });

    test('should return fail action', () => {
      const errorMessage = 'Backend returned code 404';
      const outcome = new CreateTagFail(errorMessage);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, errorMessage);
      tagsService.create = jest.fn(() => response);
      const expected = cold('--(b|)', { b: outcome });

      expect(effects.createTag$).toBeObservable(expected);
    });

    test('should register createTag$ that dispatches an action', () => {
      expect(metadata.createTag$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });

  describe('create tag success', () => {
    test('should return Go and LoadTagFamily actions', () => {
      const action = new CreateTagSuccess(tagUpdateApiResponseMock.payload);
      const outcomeLoadTagFamily = new LoadTagFamily(1);
      const outcomeGo = new Go({
        path: ['tags', tagUpdateApiResponseMock.payload.id],
      });

      actions = hot('-a', { a: action });
      const expected = cold('-(bc)', { b: outcomeLoadTagFamily, c: outcomeGo });
      expect(effects.createTagSuccess$).toBeObservable(expected);
    });

    test('should register createTagSuccess$ that dispatches an action', () => {
      expect(metadata.createTagSuccess$).toEqual({
        dispatch: true,
        resubscribeOnError: true,
      });
    });
  });
});
