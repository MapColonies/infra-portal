# TypeScript Server Boilerplate

This is the official MapColonies™ boilerplate for a TypeScript server using Express.js.
The boilerplate includes many features and packages in order to make the development process easier and faster and ensure common practices and standards.

## Where do i find it?

The boilerplate is available in the [MapColonies™ GitHub repository](https://github.com/MapColonies/ts-server-boilerplate)

## How do i create a new project using the boilerplate?

When creating a new project, you can use the boilerplate as a template repository in GitHub.

![create-repo-boilerplate](./img//create-repo-boilerplate-dark.png)

## Deep dive
We can break down the boilerplate into the following sections:
1. Code
2. Tests
3. The repository configuration and validation
4. Deployment

### Code
The code is written in [TypeScript](https://www.typescriptlang.org/) and uses the [Express.js](https://expressjs.com/) framework. The code is organized in a modular way, with each resource having its own directory and files.
The boilerplate provides a basic structure for the code, with packages that provide features that gives a good starting point for a new project.

For more information on the code structure and the packages used, check the [following link](./code.md).

### Tests
The boilerplate includes tests for the code, using the [Jest testing framework](https://jestjs.io/). The tests are organized in a similar way to the code, with each resource having its own test file.
The tests are split into unit tests and integration tests, and provide a good starting point for writing tests for a new project.

For more information on the tests and the packages used, check the [following link](./tests.md).

### The repository configuration and validation
In order to all the features to work there are multitude of packages and configurations that are already set up in the boilerplate.
They handle stuff like linting, formatting, testing, and more. Without all those files, maintaining standard and quality code would be a nightmare.

For more information on the repository configuration and validation, check the [following link](./repo.md).

### Deployment
What's the point of having a project if nobody can use it? The boilerplate includes a Dockerfile and a helm chart that can be used to deploy the project to a Kubernetes cluster.
