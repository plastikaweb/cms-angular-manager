import { ClientActions, ClientActionTypes } from '@app/root/store/actions';

export interface ClientState {
  title: string;
  slug: string;
  theme: string;
  imageRoute: string;
}

export const initialState: ClientState = null;

export function reducer(
  state: ClientState = initialState,
  action: ClientActions
): ClientState {
  switch (action.type) {
    case ClientActionTypes.SetClient: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
}

export const getClientTitleState = (state: ClientState) => state && state.title;
export const getClientSlugState = (state: ClientState) => state && state.slug;
export const getClientThemeState = (state: ClientState) => state && state.theme;
export const getClientImageRouteState = (state: ClientState) =>
  state && state.imageRoute;
