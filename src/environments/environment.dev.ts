import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  apiUrl: 'http://local.optretina.com/platform',
  assetsUrl: 'http://local.optretina.com/platform/angular-client/dist/',
  imports: [
    StoreDevtoolsModule.instrument({
      name: 'Marco Polo',
      maxAge: 25, //  Retains last 25 states
    }),
  ],
};
