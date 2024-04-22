# blueshift-ui

blue·shift `/ˈblo͞oˌSHift/`<br>
_noun_<br>
the displacement of the spectrum to shorter wavelengths in the light coming from distant celestial objects moving toward the observer.

---

BlueshiftUI is the foundation of Nerdy UIs. It is a monorepo with packages that define atomic components, hooks, and utilities that enable us to move fast and deliver consistent, first-class user-experiences.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/) v18 via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
   ```sh
   # Install nvm
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   # Install Node
   nvm install 18.13.0
   # Use Node version defined in .nvmrc
   nvm use
   ```
- [Yarn](https://classic.yarnpkg.com/en/docs/install) v1.22
- A Personal Artifactory auth token added to your env/path as `VT_ARTIFACTORY_TOKEN`.
   1. Visit your [Artifactory user profile](https://artifactory.nerdy-core.com/ui/admin/artifactory/user_profile) and generate an API key.
   1. `curl` Arifactory's auth endpoint with your API key to get a token
      ```sh
      curl -u <username>:<api-key> https://artifactory.nerdy-core.com/artifactory/api/npm/auth
      ```
      _Note: Your username is generally your `first_name.last_name`._
   1. Add the token from the `curl` response to your shell initialization script (`.bashrc`, `.zshrc`, etc.)
      ```sh
      export VT_ARTIFACTORY_TOKEN="your-token"
      ```
- A hosts file entry for `www.vt.local` pointing to `localhost`/`127.0.0.1`
   ```sh
   127.0.0.1 localhost
   255.255.255.255 broadcasthost
   ::1 localhost

   127.0.0.1         vt.local www.vt.local
   ```

### Getting started

1. Install dependencies and bootstrap packages
   ```sh
   yarn setup
   ```
1. Run Storybook
   ```sh
   yarn dev
   ```

### Publishing Changes

1. Run the `bump` command on your feature branch:
   ```
   yarn bump [major|minor|patch]
   ```
2. Merge your branch to `master`
3. Publish your updated packages:
   ```
   make publish
   ```

### CLI

#### `yarn` Commands

| Command                                          | Description |
| :----------------------------------------------- | :---------- |
| `yarn bootstrap`                                 | Installs package dependencies, links any cross-package dependencies, and transpiles code where appropriate |
| `yarn build`                                     | Creates builds for app packages |
| `yarn build-storybook`                           | Creates Storybook build |
| `yarn bump [major \| minor \| patch]`            | Update package versions |
| `yarn dev`                                       | Alias for `yarn storybook` |
| `yarn lint`                                      | Runs eslint and prettier |
| `yarn lint-fix`                                  | Runs eslint and prettier in `fix` mode |
| `yarn setup`                                     | Installs root dependencies and bootstraps all packages |
| `yarn storybook`                                 | Starts storybook. See: [`start-storybook` docs](https://storybook.js.org/docs/react/api/cli-options#start-storybook) for more options |
| `yarn test`                                      | Runs lint and unit tests |
| `yarn workspace-add <package>[@version] <scope>` | Adds dependency to matched workspace packages. See: [`lerna add` docs](https://github.com/lerna/lerna/tree/main/commands/add#readme) for more options |

#### `make` Commands

| Command                                       | Description |
| :-------------------------------------------- | :---------- |
| `make publish`                                | Publishes any unpublished packages to our internal Artifactory npm registry |

## Contributing

Everyone is welcome to contribute to this project. To propose a change, please open a [pull request](../../pulls) or start a [discussion](../../discussions).