# Coding Standards

- [Coding Standards](#coding-standards)
  - [Style Guide](#style-guide)
  - [Visual Studio Code](#visual-studio-code)
    - [Mandatory extensions](#mandatory-extensions)
    - [Suggested extensions](#suggested-extensions)
    - [Minimal configuration settings](#minimal-configuration-settings)
  - [Links](#links)

## Style Guide

All code must follow the styles dictated by the official [Angular Style Guide](https://angular.io/styleguide).  As long as you use Angular CLI and don't skip the git hooks, we shouldn't need to worry about missing something.
Angular projects created using Angular CLI (like this) include [Codelyzer](https://github.com/mgechev/codelyzer) as a dependency. `Codelyzer` will check your code against the Angular tslint rules every time you run `ng lint` or commit your changes.

## Visual Studio Code

### Mandatory extensions

- **TSLint** (ms-vscode.vscode-typescript-tslint-plugin): TSLint support for Visual Studio Code.
- **Prettier - Code formatter** (esbenp.prettier-vscode): VS Code plugin for prettier/prettier.
- **ESLint** (dbaeumer.vscode-eslint): Integrates ESLint JavaScript into VS Code.
- **markdownlint** (davidanson.vscode-markdownlint): Markdown linting and style checking for Visual Studio Code.
- **TypeScript Import Sorter** (mike-co.import-sorter): Extension sorts TypeScript imports according to the configuration provided. The configuration defaults follow ESLint sort-imports rule.

### Suggested extensions

- **Angular Language Service** (angular.ng-template): Editor services for Angular templates.
- **Angular v7 Snippets** (johnpapa.angular2): Angular v7 snippets by John Papa.
- **Auto Close Tag** (formulahendry.auto-close-tag): Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text.
- **Auto Rename Tag** (formulahendry.auto-rename-tag): Auto rename paired HTML/XML tag.
- **SCSS IntelliSense** (mrmlnc.vscode-scss): Advanced autocompletion and refactoring support for SCSS.
- **Markdown All in One** (yzhang.markdown-all-in-one): All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more).
- **Markdown Shortcuts** (mdickin.markdown-shortcuts): Shortcuts for Markdown editing.
- **Docker** (peterjausovec.vscode-docker): Adds syntax highlighting, commands, hover tips, and linting for Dockerfile and docker-compose files.
- **Git Extension Pack** (donjayamanne.git-extension-pack): Popular Visual Studio Code extensions for Git.

### Minimal configuration settings

For an integrated and aligned developer experience and code formatting, we must add the following settings to our vscode settings.js file.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.minimap.enabled": false,
  "editor.multiCursorModifier": "alt",
  "editor.tabSize": 2,
  "eslint.autoFixOnSave": true,
  "eslint.packageManager": "yarn",
  "eslint.validate": [
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "files.trimTrailingWhitespace": true,
  "[markdown]": {
    "files.trimTrailingWhitespace": false
  },
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/.js": {
      "when": "$(basename).ts"
    },
    "**/.js.map": {
      "when": "$(basename)"
    }
  },
  "javascript.implicitProjectConfig.checkJs": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "prettier.arrowParens": "avoid",
  "prettier.bracketSpacing": true,
  "prettier.disableLanguages": [],
  "prettier.eslintIntegration": true,
  "prettier.printWidth": 80,
  "prettier.proseWrap": "preserve",
  "prettier.semi": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.tslintIntegration": true,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "window.zoomLevel": 0,
  "importSorter.generalConfiguration.sortOnBeforeSave": true,
  "importSorter.importStringConfiguration.numberOfEmptyLinesAfterAllImports": 1,
  "importSorter.sortConfiguration.customOrderingRules.defaultOrderLevel": 50,
  "importSorter.sortConfiguration.customOrderingRules.rules": [
    {
      "type": "importMember",
      "regex": "^$",
      "orderLevel": 30,
      "disableSort": false
    },
    {
      "regex": "ngx",
      "orderLevel": 20
    },
    {
      "regex": "^[@]",
      "orderLevel": 10
    },
    {
      "regex": "^[.]",
      "orderLevel": 40
    }
  ]
}
```

## Links

- [Angular Style Guide](https://angular.io/guide/styleguide/)
- [Codelyzer](https://github.com/mgechev/codelyzer)
- [ng lint](https://github.com/angular/angular-cli/wiki/lint)
