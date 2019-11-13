import {
    TagFamiliesActions, TagFamiliesActionTypes
} from '@app/entities/tag-families/store/actions/tag-families.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { TagFamily } from '@shared/models';

import { TagFamiliesReducerUtils } from './tag-families.reducer.utils';

export interface TagFamiliesState extends EntityState<TagFamily> {
  loading: boolean;
  loaded: boolean;
  dirty: Array<TagFamily>;
  lastNodeEdition: Partial<TagFamily>;
}

export const adapter = createEntityAdapter<TagFamily>();

export const initialState: TagFamiliesState = adapter.getInitialState({
  loading: false,
  loaded: false,
  dirty: null,
  lastNodeEdition: null,
});

export function reducer(
  state = initialState,
  action: TagFamiliesActions
): TagFamiliesState {
  switch (action.type) {
    case TagFamiliesActionTypes.LoadTagFamilies:
    case TagFamiliesActionTypes.LoadTagFamily:
    case TagFamiliesActionTypes.CreateTagFamily: {
      return {
        ...state,
        loading: true,
      };
    }

    case TagFamiliesActionTypes.LoadTagFamiliesSuccess: {
      const successPayload = {
        ...state,
        loading: false,
        loaded: true,
      };
      return adapter.addAll(action.payload, successPayload);
    }

    case TagFamiliesActionTypes.LoadTagFamilySuccess: {
      state = {
        ...state,
        loading: false,
      };

      if (state.loaded) {
        const newEntities = TagFamiliesReducerUtils.dispatchAction(
          [...state.ids],
          state.entities,
          action.payload,
          'update'
        );
        return adapter.addAll(newEntities, state);
      }

      return adapter.addOne(action.payload, state);
    }

    case TagFamiliesActionTypes.LoadTagFamiliesFail:
    case TagFamiliesActionTypes.LoadTagFamilyFail:
    case TagFamiliesActionTypes.CreateTagFamilyFail: {
      return {
        ...state,
        loading: false,
      };
    }

    case TagFamiliesActionTypes.CreateTagFamilySuccess: {
      const { id, parentId } = action.payload;
      state = {
        ...state,
        loading: false,
        lastNodeEdition: { id, parentId },
      };

      const newEntities = TagFamiliesReducerUtils.dispatchAction(
        [...state.ids],
        state.entities,
        action.payload,
        'add'
      );
      return adapter.addAll(newEntities, state);
    }

    case TagFamiliesActionTypes.UpdateTagFamily: {
      const dirty = TagFamiliesReducerUtils.getListArray(
        [...state.ids] as Array<number>,
        state.entities
      );
      state = {
        ...state,
        loading: true,
        dirty,
      };

      const newEntities = TagFamiliesReducerUtils.dispatchAction(
        [...state.ids],
        state.entities,
        action.payload,
        'update'
      );
      return adapter.addAll(newEntities, state);
    }

    case TagFamiliesActionTypes.UpdateTagFamilySuccess: {
      const { id, parentId } = action.payload;
      return {
        ...state,
        loading: false,
        lastNodeEdition: { id, parentId },
        dirty: null,
      };
    }

    case TagFamiliesActionTypes.ReorderTagFamilies: {
      const dirty = TagFamiliesReducerUtils.getListArray(
        [...state.ids] as Array<number>,
        state.entities
      );

      state = {
        ...state,
        loading: true,
        dirty,
      };

      const newEntities = TagFamiliesReducerUtils.reorder(action.payload, [
        ...dirty,
      ]);

      return adapter.addAll(newEntities, state);
    }

    case TagFamiliesActionTypes.ReorderTagFamiliesSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        dirty: null,
      };
    }

    case TagFamiliesActionTypes.ReorderTagFamiliesFail:
    case TagFamiliesActionTypes.UpdateTagFamilyFail: {
      const oldModel = [...state.dirty];
      state = {
        ...state,
        loading: false,
        loaded: false,
        dirty: null,
      };

      return adapter.addAll(oldModel, state);
    }
  }
  return state;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
export const getTagFamiliesLoadingState = (state: TagFamiliesState) =>
  state && state.loading;
export const getTagFamiliesLoadedState = (state: TagFamiliesState) =>
  state && state.loaded;
export const getTagFamiliesLastNodeEditionState = (state: TagFamiliesState) =>
  state && state.lastNodeEdition;
