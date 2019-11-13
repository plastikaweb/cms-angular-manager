import {
    ActionsActions, ActionsActionTypes
} from '@app/entities/actions/store/actions/actions.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@shared/models';

export interface ActionsState extends EntityState<Action> {
  loading: boolean;
  loaded: boolean;
}

export const adapter = createEntityAdapter<Action>();

export const initialState: ActionsState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(
  state = initialState,
  action: ActionsActions
): ActionsState {
  switch (action.type) {
    case ActionsActionTypes.LoadActions: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionsActionTypes.LoadActionsSuccess: {
      const successPayload = {
        ...state,
        loading: false,
        loaded: true,
      };
      return adapter.addAll(action.payload, successPayload);
    }
    case ActionsActionTypes.LoadActionsFail: {
      return {
        ...state,
        loading: false,
      };
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
export const getActionsLoadingState = (state: ActionsState) =>
  state && state.loading;
export const getActionsLoadedState = (state: ActionsState) =>
  state && state.loaded;
