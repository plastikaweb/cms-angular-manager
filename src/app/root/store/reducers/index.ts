import { RouterStateSnapshot } from '@angular/router';
import * as fromClient from '@app/root/store/reducers/client/client.reducer';
import * as fromUI from '@app/root/store/reducers/ui/ui.reducer';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RouterUtils } from '@shared/utils';

export interface RouterStateUrl {
  url: string;
  params: { [key: string]: string };
  queryParams: { [key: string]: string };
  paths: string[];
  title: string;
  currentPage: string;
}

export interface RootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  client: fromClient.ClientState;
  ui: fromUI.UiState;
}

export const reducers: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
  client: fromClient.reducer,
  ui: fromUI.reducer,
};

// Feature selectors
export const getRouterFeatureState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const getClientFeatureState = createFeatureSelector<
  fromClient.ClientState
>('client');

export const getUIFeatureState = createFeatureSelector<fromUI.UiState>('ui');

export class CustomRouterSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    return RouterUtils.extractActivatedRouterData(routerState.root);
  }
}
