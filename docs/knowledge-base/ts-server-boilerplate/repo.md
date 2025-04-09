---
id: repo
title: Repo configuration and validation
sidebar_position: 3
---

In order to make the boilerplate tick, we have many configuration files and scripts that help us maintain the codebase. This document will guide you through all of them.

## Dependabot

Dependabot is a GitHub app that checks for outdated dependencies in your repository and creates pull requests to update them. The configuration file for Dependabot is located in the `.github` directory.
If you need to change the configuration, you can do so by editing the `.github/dependabot.yml` file.
For reference on how to configure Dependabot, check the [official documentation](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference).

## workflows

The workflows for GitHub Actions are located in the `.github/workflows` directory. The boilerplate includes the following workflows:

- `build-and-push.yaml`: This workflow is triggered when a new version is released. It builds the Docker image and pushes it to the Docker registry.
- `pull_request.yaml`: This workflow is triggered when a pull request is opened. It runs the tests and checks the code style.
- `release-please.yaml` This workflow manages the release of the package using [release-please](https://github.com/googleapis/release-please).

For more information check the [Pipelines docs](../DevOps/pipelines/_category_.json)

## Husky

[Husky](https://typicode.github.io/husky/) is a tool that allows you to run scripts before committing or pushing code to the repository by setting [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). The configuration file for Husky is located in the `.husky` directory.

The boilerplate includes the following hooks:

- `pre-commit`: Runs [pretty-quick](https://www.npmjs.com/package/pretty-quick) to format the staged files.
- `commit-msg`: Runs the commitlint to check if the commit message follows the MapColonies commit specification.

## VSCode settings

### Settings

The `.vscode/settings.json` file contains workspace-specific settings that help maintain consistent code style across the team:

- `typescript.tsdk`: Points to the local TypeScript installation to ensure consistent TypeScript version usage
- `files.eol`: Sets line endings to LF (`\n`)
- `editor.defaultFormatter`: Uses Prettier as the default formatter
- `files.insertFinalNewline`: Ensures all files end with a newline

### Launch options

The `.vscode/launch.json` file contains configurations for debugging the application in VSCode.

### Extensions

The `.vscode/extensions.json` file contains recommended extensions for this project:

- `redhat.vscode-yaml`: YAML language support
- `Redocly.openapi-vs-code`: OpenAPI (Swagger) editor
- `esbenp.prettier-vscode`: Code formatting
- `Tim-Koehler.helm-intellisense`: Helm charts support
- `42Crunch.vscode-openapi`: OpenAPI design and validation
- `dbaeumer.vscode-eslint`: JavaScript/TypeScript linting
- `ms-azuretools.vscode-docker`: Docker support
- `ms-kubernetes-tools.vscode-kubernetes-tools`: Kubernetes support
- `ms-azuretools.vscode-azureresourcegroups`: Azure Resource Groups management
- `ms-azuretools.vscode-azurevirtualmachines`: Azure Virtual Machines management

## EditorConfig

EditorConfig is a tool that helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The configuration file for EditorConfig is located in the `.editorconfig` file.

The `.editorconfig` file contains settings that should be consistent across all of MapColonies™ projects, such as: end-of-line characters, indentation, and charset.

For more information on how to configure EditorConfig, check the [official documentation](https://editorconfig.org/).

## gitignore and gitattributes

The `.gitignore` file contains a list of files and directories that should be ignored by Git.

The `.gitattributes` file contains attributes for paths in the repository. Using this file we make sure each file eol is LF.

For more information on how to configure `.gitignore` and `.gitattributes`, check the [gitignore documentation](https://git-scm.com/docs/gitignore) and [gitattributes documentation](https://git-scm.com/docs/gitattributes) respectively.

## npmrc

We use the npmrc file to make sure npm enforces the engine versions mandated by the dependencies in the package.json file. If needed, you can add more configurations to the `.npmrc` file.

For complete documentation, check the [npmrc documentation](https://docs.npmjs.com/cli/v11/configuring-npm/npmrc).

## nvmrc

[nvm](https://github.com/nvm-sh/nvm), short for Node Version Manager, is a tool that allows you to install and manage multiple versions of Node.js on the same machine. The `.nvmrc` file contains the Node.js version that should be used for this project.

Run the following command in the repository root directory to use the Node.js version specified in the `.nvmrc` file:

```bash
nvm use
```

## prettier

[Prettier](https://prettier.io/docs/) is an opinionated code formatter that enforces a consistent code style across your codebase. The configuration file for Prettier is located in the `.prettierrc` file.

If you need to change the configuration, you can do so by editing the `.prettierrc` file. If you want to ignore some files or directories from being formatted by Prettier, you can add them to the `.prettierignore` file.

The configuration is taken from the [MapColonies™ Prettier configuration](../packages/prettier-config/README.md) package.

To check if the code is formatted correctly, run the following command:

```bash
npm run format
```

To format the code, run the following command:

```bash
npm run format:fix
```

## ESLint

[ESLint](https://eslint.org/docs/user-guide/getting-started) is a tool that helps you find and fix problems in your TypeScript code. The configuration file for ESLint is located in the `eslint.config.mjs` file.

The configuration is taken from the [MapColonies™ ESLint configuration](../packages/eslint-config/README.md) package.

To check if the code is linted correctly, run the following command:

```bash
npm run lint
```

To fix the linting auto fixable issues, run the following command:

```bash
npm run lint:fix
```

## redocly

The `.redocly.yaml` files contains the configuration for the linting of the openapi specification file.
The linting is done using the [@redocly/cli](https://redocly.com/docs/cli) package.

To check if the openapi specification file is linted correctly, run the following command:

```bash
npm run lint:openapi
```

## commitlint

[commitlint](https://commitlint.js.org/) is a tool that checks if your commit messages meet the conventional commit format. The configuration file for commitlint is located in the `commitlint.config.js` file.

The configuration is taken from the [MapColonies™ commitlint configuration](../packages/commitlint-config/README.md) package.

## Release please

[Release please](https://github.com/googleapis/release-please) is a tool that helps you manage the release of your package. The configuration file for release please is located in the `release-please-config.json` and `.release-please-manifest.json` files.

## package.json

The `package.json` file contains the metadata for the project, including the project name, version, and dependencies. It also contains the scripts that can be run using npm.

For more information on how to configure the `package.json` file, check the [official npm documentation](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).

## tsconfig

The `tsconfig.json` file contains the configuration for the TypeScript compiler. The configuration is taken from the [MapColonies™ TypeScript configuration](../packages/tsconfig/README.md) package.

There are two main configurations:

- `tsconfig.json` - The base configuration file, used for the IDE, testing and linting.
- `tsconfig.build.json` - The build configuration file, used for the build process.
