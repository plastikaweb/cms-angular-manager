import { Injectable } from '@angular/core';
import { TagFamiliesService } from '@app/entities/tag-families/services/tag-families.service';
import {
    CreateTagFamily, CreateTagFamilyFail, CreateTagFamilySuccess, LoadTagFamiliesFail,
    LoadTagFamiliesSuccess, LoadTagFamily, LoadTagFamilyFail, LoadTagFamilySuccess,
    ReorderTagFamilies, ReorderTagFamiliesFail, ReorderTagFamiliesSuccess, TagFamiliesActionTypes,
    UpdateTagFamily, UpdateTagFamilyFail, UpdateTagFamilySuccess
} from '@app/entities/tag-families/store/actions/tag-families.actions';
import { Go } from '@app/root/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChangeOrderFamilyTagBody, OptApiResponse, TagFamily } from '@shared/models';

import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class TagFamiliesEffects {
  @Effect()
  loadTagFamilies$ = this.actions$.pipe(
    ofType(TagFamiliesActionTypes.LoadTagFamilies),
    exhaustMap(() => this.tagFamiliesService.list()),
    map(
      (response: OptApiResponse<Array<TagFamily>>) =>
        new LoadTagFamiliesSuccess(response.payload)
    ),
    catchError(error => of(new LoadTagFamiliesFail(error)))
  );

  @Effect()
  loadTagFamily$ = this.actions$.pipe(
    ofType(TagFamiliesActionTypes.LoadTagFamily),
    map((action: LoadTagFamily) => action.payload),
    exhaustMap(tagFamilyId => this.tagFamiliesService.detail(tagFamilyId)),
    map(
      (response: OptApiResponse<TagFamily>) =>
        new LoadTagFamilySuccess(response.payload)
    ),
    catchError(error => of(new LoadTagFamilyFail(error)))
  );

  @Effect()
  loadTagFamilyFail$ = this.actions$.pipe(
    ofType(TagFamiliesActionTypes.LoadTagFamilyFail),
    map(() => new Go({ path: ['tag-families'] }))
  );

  @Effect()
  createTagFamily$ = this.actions$.pipe(
    ofType(TagFamiliesActionTypes.CreateTagFamily),
    map((action: CreateTagFamily) => action.payload),
    exhaustMap((tagFamily: Partial<TagFamily>) =>
      this.tagFamiliesService.create(tagFamily)
    ),
    map(
      (response: OptApiResponse<TagFamily>) =>
        new CreateTagFamilySuccess(response.payload)
    ),
    catchError(error => of(new CreateTagFamilyFail(error)))
  );

  @Effect()
  updateTagFamily$ = this.actions$.pipe(
    ofType(TagFamiliesActionTypes.UpdateTagFamily),
    map((action: UpdateTagFamily) => action.payload),
    exhaustMap(({ id, ...changes }: Partial<TagFamily>) =>
      this.tagFamiliesService.update(id, changes)
    ),
    map(
      (response: OptApiResponse<TagFamily>) =>
        new UpdateTagFamilySuccess(response.payload)
    ),
    catchError(error => of(new UpdateTagFamilyFail(error)))
  );

  @Effect()
  updateTagFamiliesOrdering$ = this.actions$.pipe(
    ofType(TagFamiliesActionTypes.ReorderTagFamilies),
    map((action: ReorderTagFamilies) => action.payload),
    exhaustMap(({ id, parentId, to }) =>
      this.tagFamiliesService.updatePositions<ChangeOrderFamilyTagBody>({
        id,
        parentId,
        to,
      })
    ),
    map(() => new ReorderTagFamiliesSuccess()),
    catchError(error => of(new ReorderTagFamiliesFail(error)))
  );

  constructor(
    private actions$: Actions,
    private tagFamiliesService: TagFamiliesService
  ) {}
}
