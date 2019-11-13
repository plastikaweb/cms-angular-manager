import {
    getTagFamiliesLastNodeEditionState, getTagFamiliesLoadedState, getTagFamiliesLoadingState,
    selectAll, selectEntities, selectIds, selectTotal
} from '@app/entities/tag-families/store/reducers/tag-families.reducer';
import { getTagFamiliesState } from '@app/pages/store/reducers';
import { createSelector } from '@ngrx/store';
import { TagFamily } from '@shared/models';
import { ArrayUtils } from '@shared/utils';

export const getTagFamiliesIds = createSelector(
  getTagFamiliesState,
  selectIds
);

export const getTagFamiliesEntities = createSelector(
  getTagFamiliesState,
  selectEntities
);

export const getTagFamiliesAll = createSelector(
  getTagFamiliesState,
  selectAll
);

export const getTagFamiliesTotal = createSelector(
  getTagFamiliesState,
  selectTotal
);

export const getTagFamiliesLoading = createSelector(
  getTagFamiliesState,
  getTagFamiliesLoadingState
);

export const getTagFamiliesLoaded = createSelector(
  getTagFamiliesState,
  getTagFamiliesLoadedState
);

export const getTagFamiliesLastNodeEdition = createSelector(
  getTagFamiliesState,
  getTagFamiliesLastNodeEditionState
);

export const getTagFamiliesEntity = createSelector(
  getTagFamiliesAll,
  (entities, idValue) => {
    const result = ArrayUtils.findHierarchyForNode<TagFamily>(
      Number(idValue),
      'id',
      entities
    );

    return !result.length
      ? null
      : {
          id: result[result.length - 1].id,
          name: result.map(node => node.name).join(' - '),
        };
  }
);
