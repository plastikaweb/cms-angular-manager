import {
    GlobalEntitiesActions, GlobalEntitiesActionTypes
} from '@app/entities/global/store/actions/global-entities.actions';

export interface GlobalEntityState {
  pendingEdition: boolean;
}

export const initialState: GlobalEntityState = {
  pendingEdition: false,
};

export function reducer(
  state = initialState,
  action: GlobalEntitiesActions
): GlobalEntityState {
  switch (action.type) {
    case GlobalEntitiesActionTypes.SetPendingEntity: {
      return {
        ...state,
        pendingEdition: action.payload,
      };
    }
  }
  return state;
}

export const getEntitiesPendingEditionState = (state: GlobalEntityState) =>
  state && state.pendingEdition;
