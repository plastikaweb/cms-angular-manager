# Git commit conventions

We use [commitizen](https://commitizen.github.io/cz-cli/) to apply some simple formatting rules for our commit messages.

The main types of commitizen available are those corresponding to the [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) adapter.

```bash
feat(header): add Notifications button

Allow users to toggle particular notifications by app section. Sets user
properties to identify whether to send notifications and reminders to particular
user, and enables (un)targeting via Audience settings.

Closes: #155
```

## Commit execution

```bash
git cz
// Not recommended:
// add --no-verify flag to skip any hook before the commit resolution
```

### Commitizen steps

#### 1. Type and description

The type is the main category of your change.

Default list:

- feat: A new feature.
- fix: A bug fix.
- docs: Documentation only changes.
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- refactor: A code change that neither fixes a bug nor adds a feature.
- perf: A code change that improves performance.
- test: Adding missing tests or correcting existing tests.
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
- chore: Other changes that don't modify src or test files.
- revert: Reverts a previous commit.

#### 2. Scope (optional)

It describes the module, package, component, etc. to which your change belongs.
We can choose one of the predetermined scopes for the specific group if they exist, leave it blank or enter a new one.

#### 3. Description (header)

- Brief description of the meaning and intention of the change, not the technical content.
- Written in imperative (`Imperative mood` in English).
- Do not capitalize on the first character.
- Do not put a final point.
- Maximum 72 characters.
- Do not repeat information already inferred in the steps of the group and scope.

#### 4. Longer description (optional)

- Must be separated by a subject line.
- Any information that the subject may complement should go here.
- We can write in multi-line.
- Adjust each line to 72 characters.
- Explain _what_ and _why_ instead of how.

  ```bash
  Ref #xxx
  ```

#### 5. Footer (optional)

Here we can refer other issues and / or related PRs as well as issues closed for this commit.

#### 6. Final confirmation

Commitizen will show us a summary of the commit message and ask for confirmation to proceed.

#### 7. Checking format with commitlint

[Commitlint](https://github.com/conventional-changelog/commitlint) checks that the message of the commit complies with the default format.

> **Tip:** In the same way any script added to a pre-commit hook or similar (linting, test ...), will be executed at this point.

## Links

- [Commitizen](https://commitizen.github.io/cz-cli/)
- [How to write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [The Perks of commiting with conventions](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [cz-customizable](https://github.com/leonardoanalista/cz-customizable)
