import { ClientState } from '@app/root/store/reducers/client/client.reducer';
import { Culture, NavigationItem } from '@shared/models';

export interface MainConfig {
  clients: {
    [client: string]: ClientState;
  };
  cultures: {
    [code: string]: Culture;
  };
  pages: {
    [name: string]: {
      segment: string;
    };
  };
  navigation: Array<NavigationItem>;
  externalUrl: string;
}
