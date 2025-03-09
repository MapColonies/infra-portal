# Infra Portal

This project is a Docusaurus-based documentation site for managing and showcasing various 
infra team responsibilities and best practices.

## Getting Started

You can see all the pages in the [docs](./docs) directory.

The project is building on startup all the READMEs of the MC packages so in order to add a new package you need to add it to `remoteFetch.ts` file


### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
