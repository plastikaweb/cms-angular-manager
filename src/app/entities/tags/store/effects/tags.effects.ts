import { Injectable } from '@angular/core';
import { LoadTagFamily, TagFamiliesState } from '@app/entities/tag-families';
import { TagsService } from '@app/entities/tags/services/tags.service';
import {
    ChangePaginationFilterTags, CreateTag, CreateTagFail, CreateTagSuccess, LoadTag, LoadTagFail,
    LoadTags, LoadTagsFail, LoadTagsSuccess, LoadTagSuccess, TagsActionTypes, UpdateTag,
    UpdateTagFail, UpdateTagSuccess
} from '@app/entities/tags/store/actions/tags.actions';
import { Go } from '@app/root/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { OptApiResponse, Tag, TagApiParams, TagsApiResponse } from '@shared/models';

import {
    getSelectedTagFamily, getTagsBatchSize, getTagsLoaded, getTagsPageNumber
} from '../selectors/tags.selectors';

import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class TagsEffects {
  @Effect()
  loadTags$ = this.actions$.pipe(
    ofType(TagsActionTypes.LoadTags),
    map((action: LoadTags) => action.payload),
    withLatestFrom(this.store.pipe(select(getTagsBatchSize))),
    exhaustMap(([params, size]) =>
      this.tagsService.list<TagApiParams>({ ...params, size })
    ),
    map(
      (response: OptApiResponse<TagsApiResponse>) =>
        new LoadTagsSuccess(response.payload)
    ),
    catchError(error => of(new LoadTagsFail(error)))
  );

  @Effect()
  changePageFilterTags$ = this.actions$.pipe(
    ofType(TagsActionTypes.ChangePaginationFilterTags),
    map((action: ChangePaginationFilterTags) => action.payload),
    withLatestFrom(
      this.store.pipe(select(getTagsLoaded)),
      this.store.pipe(select(getTagsPageNumber))
    ),
    filter(([{ params }, tagsLoaded, tagsPage]) => {
      const { name, number: pageNumber } = params;
      return (
        (!tagsLoaded && (pageNumber > tagsPage && !name)) ||
        (!tagsLoaded && !!name)
      );
    }),
    map(([{ params }]) => new LoadTags(params))
  );

  @Effect()
  loadTag$ = this.actions$.pipe(
    ofType(TagsActionTypes.LoadTag),
    map((action: LoadTag) => action.payload),
    exhaustMap(tagId => this.tagsService.detail(tagId)),
    map(
      (response: OptApiResponse<Tag>) => new LoadTagSuccess(response.payload)
    ),
    catchError(error => of(new LoadTagFail(error)))
  );

  @Effect()
  loadTagFail$ = this.actions$.pipe(
    ofType(TagsActionTypes.LoadTagFail),
    map(() => new Go({ path: ['tags'] }))
  );

  @Effect()
  updateTag$ = this.actions$.pipe(
    ofType(TagsActionTypes.UpdateTag),
    map((action: UpdateTag) => action.payload),
    exhaustMap(({ id, changes }) => this.tagsService.update(id, changes)),
    map((response: OptApiResponse<Tag>) => {
      const { id, ...changes } = response.payload;
      return new UpdateTagSuccess({ id, changes });
    }),
    catchError(error => of(new UpdateTagFail(error)))
  );

  @Effect()
  createTag$ = this.actions$.pipe(
    ofType(TagsActionTypes.CreateTag),
    map((action: CreateTag) => action.payload),
    withLatestFrom(this.store.pipe(select(getSelectedTagFamily))),
    exhaustMap(([tag, family]) =>
      this.tagsService.create({
        ...tag,
        tagFamilyId: family.id,
      })
    ),
    map(
      (response: OptApiResponse<Tag>) => new CreateTagSuccess(response.payload)
    ),
    catchError(error => of(new CreateTagFail(error)))
  );

  @Effect()
  createTagSuccess$ = this.actions$.pipe(
    ofType(TagsActionTypes.CreateTagSuccess),
    map((action: CreateTagSuccess) => action.payload),
    withLatestFrom(this.store.pipe(select(getSelectedTagFamily))),
    exhaustMap(([tag, family]) => [
      new LoadTagFamily(family.id),
      new Go({ path: ['tags', tag.id] }),
    ])
  );

  constructor(
    private actions$: Actions,
    private tagsService: TagsService,
    private store: Store<TagFamiliesState>
  ) {}
}
