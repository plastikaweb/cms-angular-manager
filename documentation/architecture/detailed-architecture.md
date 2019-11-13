# Detailed architecture

- [Detailed architecture](#detailed-architecture)
  - [Module structure](#module-structure)
  - [Directory general structure](#directory-general-structure)
  - [Links](#links)

## Module structure

The organization in modules will take into account the description of functionalities in each case. Thus we can have two main types of modules, according to presentation or shared functionalities.

- Presentation functionalities (feature / presentation modules): logical units that represent isolated and reusable code, normally responsible for a specific task.
- Shared functionalities: shared logic throughout the application, used in several modules.
- Other functionalities (utility shared modules): another type of modules, which can be shared and have an internal logic and its own status control.
- The Featured Modules must be organized in directories with reasonable and descriptive names.

The structure in directories should be as flat as possible.

More information on conventions in terms of names and structuring of projects in [Angular Style Guide](https://angular.io/guide/styleguide)

## Directory general structure

```bash
|- @shared/ # models, shared containers, components, styles, utilities, pipes, directives, services, etc
     |-- components/ # shared components
     |-- directives/ # shared directives
     |-- pipes/ # shared pipes
     |-- services/ # shared or abstract services
     |-- models/ # all the models
     |-- mocks/ # mocked objects used on unit testing
     |-- utils/ # utilities for Array, Object, String, etc
     |-- formly-component-types/ # formly custom components

|- assets/ # images and other static stuff
     |-- config/config.json # base config file
     |-- scss/ # partial styles
     |-- fonts/ # app fonts
     |-- images/ # app images

|- config/ # features internal configuration
     |-- pages/ # feature page configurations
     |-- form-builders/ # formly configurations by feature

|- environments/ # different environment configuration files

|- app/
    |-- root/ # main module (it should have a similar structure as a feature)

    |-- entities/ # collection of api entities code to retrieve and do CRUD (store & services mainly)
        |-- entity-A # f.e: actions, rooms...
             |-- store/
                  |-- actions/
                  |-- effects/
                  |-- reducers/
                  |-- selectors/
             |-- services/
                  |-- service-x.service.ts

    |-- pages/feature/ # feature page module. P.e: rooms page
        |-- feature.module.ts
        |-- feature.routing.module.ts

        |-- store/ # optional store segment related to the feature UI page
             |-- actions/
             |-- effects/
             |-- reducers/
             |-- selectors/

        |-- sandbox/ # abstraction layer for @ngrx and services logic
             |-- feature.sandbox.ts

        |-- guards/  # optional route guards
             |-- guard-x.guard.ts

        |-- services/  # optional services (just related to the present module)
             |-- service-x.service.ts

        |-- feature.component.ts # module main component container(s)

        |-- components/ # dumb/presentational component(s)
              |-- component-a/
                    |-- component-a.component.ts
                    |-- component-a.component.presenter.ts # optional service to avoid complexity on presentational component

```

## Links

- [Angular architecture patterns – Detailed project architecture](https://netmedia.io/dev/angular-architecture-patterns-detailed-project-architecture_5619)
- [Angular architecture patterns – Additional application features](https://netmedia.io/dev/angular-architecture-patterns-additional-application-features_5670)
- [Model-View-Presenter with Angular](https://blog.angularindepth.com/model-view-presenter-with-angular-3a4dbffe49bb)
