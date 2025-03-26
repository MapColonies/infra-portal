---
id: tests
title: Tests
sidebar_position: 2
---
The tests for the boilerplate are written using [Jest](https://jestjs.io/). The tests are located in the `tests` directory and are divided into two main categories:
- Unit tests
- Integration tests

For more information on how to write tests using Jest, check the [official Jest documentation](https://jestjs.io/docs/getting-started).
For JavaScript testing best practices check this guide by [Yoni Goldberg](https://github.com/goldbergyoni/javascript-testing-best-practices).

## Running the tests
To run the tests, use the following command:
```bash
npm run test
```
It will run both the unit tests and the integration tests.

## Features
### Typescript and swc
The tests are written in TypeScript and compiled using [swc](https://swc.rs/). Before running the tests, we type check the code using the TypeScript compiler.
By using swc, we can compile the TypeScript code to JavaScript faster than using the TypeScript compiler. For path alias support, we use the mapper provided by the `ts-jest` package.

:::note

If you need to change swc settings, it can be done by edition the `.swcrc` file.

:::

### Configuration files
The configuration files for Jest are located in the `tests` directory:
- `configuration/unit/jest.config.js`: Configuration file for the unit tests.
- `configuration/integration/jest.config.js`: Configuration file for the integration tests.

Those files contain the configuration for Jest, including the setup files, the test environment, and the test matchers.
For more information on Jest configuration, check the [official Jest documentation](https://jestjs.io/docs/configuration).


### jest-openapi
The boilerplate includes the [`jest-openapi`](https://www.npmjs.com/package/jest-openapi) package to test the API endpoints against an OpenAPI schema.

To run the tests, add the following matcher to your test
```typescript
expect(response).toSatisfyApiSpec();
```

:::warning

If you don't assert on the status code, the check might pass even if the response doesn't match the schema, as it compares to all possible responses.

:::

### openapi-helpers
To ease the integration testings of your service, the boilerplate includes the `openapi-helpers` package.
The package provides a set of functions and types based on your OpenAPI schema to help you write integration tests.
When initialized, a "request sender" is created, which is a function that sends requests to your service based on the OpenAPI schema.

For complete documentation, check the [package page](../packages/openapi-helpers/README.md).

### ESLint
Linting for the tests is done using `ESLint`, the MapColonies™ ESLint configuration, and the `eslint-plugin-jest` package.
Check [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) for all available rules, and [MapColonies ESLint configuration](../packages/eslint-config/README.md) for the rules that are enabled.

### Coverage
The tests are configured with coverage requirements to ensure that the code is well tested. The coverage threshold can be changed in the tests configuration files.

You can see the coverage report in the CLI after running the tests. The coverage report is also saved in the `coverage` directory.

### Reporters
The tests are configured to output an HTML report in addition to the default Jest output. The HTML report is saved in the `reports` directory.
