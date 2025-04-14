---
id: code
title: Code
sidebar_position: 1
---

The boilerplate code is written in [TypeScript](https://www.typescriptlang.org/) and uses the [Express.js](https://expressjs.com/) framework. Some of the source code goal is to provide a basic structure for the code, with packages that provide features that give a good starting point for a new project. The business logic itself resides in the resource directories under the `src/` directory. In the boilerplate, the resources are `resourceName` and `anotherResource`, but you can rename them to match your project.

## index

The entry point of the application is the `src/index.ts` file. This file is responsible for starting the server and initializing the application. It imports the necessary modules and starts the server on the specified port.

The file also handles the error handling of critical errors (e.g. not errors that are part of a request).

### Healthcheck

The application healthcheck are configured in the `src/healthcheck.ts` file. This file is responsible for checking the health of the application and returning a response to the client. The healthcheck is configured to return a 200 OK response if the application is healthy, otherwise the application is unhealthy.

You should customize the healthcheck to match your application needs. The default implementation is just a stub.

The healthchecks are implemented using the [`@godaddy/terminus`](https://github.com/godaddy/terminus) package.

## Server Builder

The `src/serverBuilder.ts` file is responsible for creating the Express.js server and configuring it with the necessary middleware and routes.

### Openapi viewer

The OpenAPI viewer is configured and enables to view the OpenAPI documentation in the browser. By default, the OpenAPI viewer is configured to serve the OpenAPI documentation at the `/docs/api` endpoint. You can customize the endpoint by changing the configuration.

For more information on how to use the OpenAPI viewer, check the [openapi-express-viewer documentation](../packages/openapi-express-viewer/README.md).

### Routers

The routers are configured in the `src/serverBuilder.ts` file. The routers are responsible for handling the requests and returning the responses. The routers are organized by resource, with each resource having its own router.

When adding a new resource, you should create a new router and add it to the `src/serverBuilder.ts` file. The router should be imported from the resource directory.

### Metrics middleware

The metrics middleware exposes NodeJS, express and custom metrics to [Prometheus](https://prometheus.io/). The metrics are exposed at the `/metrics` endpoint.

For more information check the [MapColonies Telemetry package](../packages/telemetry/README.md).

### HTTP logger

The HTTP logger middleware is responsible for logging the requests and responses. The logger is configured to use the application logger to log those requests.

For more information check the [express-access-log-middleware package](../packages/express-access-log-middleware/README.md).

### OpenAPI validator

The boilerplate validates all the requests using the [express-openapi-validator package](https://cdimascio.github.io/express-openapi-validator-documentation/). The package uses the OpenAPI schema to validate the requests.

### Error handler

The error handler is responsible for handling the errors that occur in the application. It is configured to return a `JSON` response with the error message and the status code.

For more information check the [error-express-handler package](../packages/error-express-handler/README.md).

## Container Config

The container config file is responsible for configuring the dependency injection container. The container is used to manage the dependencies of the application and to inject them into the classes that need them.
The container is configured using the `tsyringe` package. The package is used to create the container and to register the dependencies.

The boilerplate comes with a few default dependencies that are registered in the container. If the registered object is not a class, you can use the interface `SERVICES` under `src/common/constants.ts` to make it easier to find and share the registered object.

For more information check the [`tsyringe` package documentation](https://github.com/microsoft/tsyringe).

## Config

The boilerplate is configured to use the MapColonies configuration package. The package is used to manage the configuration of the application and to load it from a central server or environment variables.

The config is defined under `src/common/config.ts` file and uses the schema defined for the boilerplate in the MapColonies [`schemas` package](https://github.com/MapColonies/schemas). As you implement your own service, you should create a new schema that matches your service configuration and extends the boilerplate's one.

Check the following resources for more information:

- [Config management docs](../config-management/README.mdx)
- [Config getting started guide](../../guides/config-management/zero-to-hero.mdx)
- [MapColonies config package](../packages/config/README.md)

## Telemetry

The boilerplate comes with multiple options to monitor and observe your application. For best results, you should use all of them and tailor them to your needs.

### Logger

The logger used by the boilerplate is MapColonies [`js-logger`](../packages/js-logger/README.md). The logger is available for usage by injecting it into your class using the `@inject` decorator.

The logger is also configured to log the requests and responses using the `express-access-log-middleware` package as explained [here](#http-logger).

### Metrics

Metrics are handled by the [`prom-client`](https://github.com/siimon/prom-client) package. The metrics are exposed at the `/metrics` endpoint and are collected by Prometheus. The metrics are configured to collect NodeJS, express and custom metrics.

Information about the metrics middleware is also available [here](#metrics-middleware).

### Tracing

The boilerplate is instrumented using [OpenTelemetry](https://opentelemetry.io/). To ease with the implementation of tracing, the package uses the [Telemetry package](../packages/telemetry/README.md) that handles the initialization and configuration of the OpenTelemetry SDK. In addition the package also exposes helpers which you can use to instrument your code.
The tracing is defined in the `src/common/tracing.ts` file and loaded in the `src/instrumentation.mts` file.

:::warning

The `instrumentation.mts` file must be loaded before the application loads. This can be done by using NodeJS `--import` flag. The NPM scripts and dockerfile are already configured to do so. If you are using a different way to load the application, make sure to load the `instrumentation.mts` file before the application loads.

:::

## openapi

The boilerplate is a design first project. You should first design your API using the OpenAPI schema and then implement the code. The OpenAPI schema is located in the `openapi` directory. The OpenAPI schema is used to generate the types for the project.

For your convenience you can use the `openapi-helpers` package to type the request handlers in your controllers. For more information check the [`openapi-helpers`](../packages/openapi-helpers/README.md) package.

## TypeScript paths

The boilerplate supports the use of TypeScript [`paths feature`](https://www.typescriptlang.org/tsconfig/#paths). You can add your own paths by adding a new one to the `tsconfig.json` file. The paths are defined under the `compilerOptions.paths` property.

The aliases are resolved to relative path after compilation using the [`tsc-alias`](https://github.com/justkey007/tsc-alias) package. For the tests, the aliases are resolved by mapping the paths using jest.

## Common Folder

The `src/common` directory contains common code that is used by the application. It contains constants, interfaces, and types that are used by the application. You can extends the common code to add your own custom code.

## Resource Structure

Each resource in the project is a directory under the `src/` directory. The resource directory is separated into the following directories:

- Model - Contains your model, types and business logic.

- Controller - Contains the request handlers for the resource. Anything HTTP related should be in this directory.

- Routes - Contains the routes that map the request handlers to the endpoints. The routes are defined using the OpenAPI schema. The routes should be added to the router in the `src/serverBuilder.ts` file.
