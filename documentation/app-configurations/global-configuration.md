# Global configuration

- [Global configuration](#global-configuration)
  - [Introduction](#introduction)
  - [MainConfig interface](#mainconfig-interface)
    - [Description](#description)
  - [APP_INITIALIZER](#appinitializer)
  - [ConfigService](#configservice)
  - [Links](#links)

## Introduction

The Angular CLI uses environments.
The environment.ts and environment.prod.ts files were never meant for configuration information other than to tell the run-time you are running a production version of the code instead of developing the code locally.
We need a solution where we can isolate the configuration from the build process and load before the application startup, so we are loading this global configuration from a config.json file via HTTP.

## MainConfig interface

The config.json file lives inside `app/assets/config` and implements the `MainConfig` interface:

```typescript
export interface ClientState {
  title: string;
  slug: string;
  theme: string;
  imageRoute: string;
}

export interface Culture {
  code: string;
  name: string;
  icon: string;
  default?: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapse';
  icon?: string;
  children?: Array<NavigationItem>;
  route?: Array<string>;
  routerLinkActiveOptions?: { exact: boolean };
}

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
```

### Description

- **clients**: list of all clients for the app (OptRetina, Baviera...) and their basic configuration.
- **cultures**: list of available languages for the app and their basic configuration.
- **pages**: list of main web pages available and their basic configuration.
- **navigation**: structure of the main navigation.
- **externalUrl**: redirection url loaded when trying to access a non valid client from url.

## APP_INITIALIZER

APP_INITIALIZER is a multi provider type that lets you specify a factory that returns a promise. When the promise completes, the application will continue on. So when you get to the place in your code where you need the configuration information, you can be sure it has been loaded.

We use `ConfigService` as dependency to load the json data.

```typescript
// app.module.ts

import { APP_INITIALIZER } from '@angular/core';

export function initializeApp(appConfigService: ConfigService) {
  return () => appConfigService.load();
}

@NgModule({
    ...
    providers: [
        ...
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [ConfigService],
            multi: true
        }
    ]
)
```

## ConfigService

Located at `app/root/services/config.service.ts`.

It loads before the app via `APP_INITIALIZER`, and sets the full configuration to a static property called `settings` for internal use.

```typescript
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  static settings: MainConfig;

  constructor(private http: HttpClient) {}
  load() {
    const jsonFile = `${environment.assetsUrl}/assets/config/config.json`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return new Promise<void>((resolve, reject) => {
      this.http
        .get<MainConfig>(jsonFile, httpOptions)
        .toPromise()
        .then((response: MainConfig) => {
          ConfigService.settings = response as MainConfig;
          resolve();
        })
        .catch((response: any) => {
          reject(`Failed to load the config file`);
        });
    });
  }
}
```

## Links

- [Where to store Angular Configurations](https://davembush.github.io/where-to-store-angular-configurations/)
- [Compile-time vs. Runtime configuration of your Angular App](https://juristr.com/blog/2018/01/ng-app-runtime-config/)
- [Angular How to use APP_INITIALIZER](https://www.tektutorialshub.com/angular/angular-how-to-use-app-initializer/)
