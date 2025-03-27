---
id: code
title: Code
sidebar_position: 1
---

The boilerplate code is written in [TypeScript](https://www.typescriptlang.org/) and uses the [Express.js](https://expressjs.com/) framework. Some of the source code goal is to provide a basic structure for the code, with packages that provide features that gives a good starting point for a new project. The business logic itself resides in the in resource directories under the `src/` directory. In the boilerplate, the resources are `resourceName` and `anotherResource`, but you can rename them to match your project.

## index

The entry point of the application is the `src/index.ts` file. This file is responsible for starting the server and initializing the application. It imports the necessary modules and starts the server on the specified port.

The file also handles the error handling of critical errors (e.g. not errors that are part of a request).

### healthcheck

The application healthcheck are configured in the `src/healthcheck.ts` file. This file is responsible for checking the health of the application and returning a response to the client. The healthcheck is configured to return a 200 OK response if the application is healthy, otherwise the application is unhealthy.

You should customize the healthcheck to match your application needs. The default implementation is just a stub.

The healthchecks are implemented using the [`@godaddy/terminus`](https://github.com/godaddy/terminus) package.

## server builder

The `src/serverBuilder.ts` file is responsible for creating the Express.js server and configuring it with the necessary middleware and routes.

### openapi viewer

The OpenAPI viewer is configured and enables to view the OpenAPI documentation in the browser. By default, the OpenAPI viewer is configured to serve the OpenAPI documentation at the `/docs/api` endpoint. You can customize the endpoint by changing the configuration.

For more information on how to use the OpenAPI viewer, check the [openapi-express-viewer documentation](../packages/openapi-express-viewer/README.md).

### routers

The routers are configured in the `src/serverBuilder.ts` file. The routers are responsible for handling the requests and returning the responses. The routers are organized by resource, with each resource having its own router.

When adding a new resource, you should create a new router and add it to the `src/serverBuilder.ts` file. The router should be imported from the resource directory.

### metrics middleware

The metrics middleware exposes NodeJS, express and custom metrics to [Prometheus](https://prometheus.io/). The metrics are exposed at the `/metrics` endpoint.

For more information check the [MapColonies Telemetry package](../packages/telemetry/README.md).

### http logger

The HTTP logger middleware is responsible for logging the requests and responses. The logger is configured to use the application logger to log those requests.

For more information check the [express-access-log-middleware package](../packages/express-access-log-middleware/README.md).

### openapi validator

The boilerplate validates all the requests using the [express-openapi-validator package](https://cdimascio.github.io/express-openapi-validator-documentation/). The package uses the OpenAPI schema to validate the requests.

### error handler

The error handler is responsible for handling the errors that occur in the application. The error handler is configured to return a JSON response with the error message and the status code.

For more information check the [error-express-handler package](../packages/error-express-handler/README.md).

## Container Config

The container config file is responsible for configuring the dependency injection container. The container is used to manage the dependencies of the application and to inject them into the classes that need them.
The container is configured using the `tsyringe` package. The package is used to create the container and to register the dependencies.

For more information check the [`tsyringe` package documentation](https://github.com/microsoft/tsyringe).

## config

## telemetry

### logger

### metrics

### tracing

#### init before app startup

## openapi

generate + use function

## typescript paths

## common

## Structure

### model

### controller

### routes
