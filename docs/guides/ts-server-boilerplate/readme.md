---
title: TypeScript Server Boilerplate
---

# Starting a new project using the TypeScript Server Boilerplate

When starting a new project based on the boilerplate, you need to change and rename a few files and directories to match your project's name.

The following steps will guide you through the process of creating a new project based on the boilerplate.

1. Create a new repository in GitHub. Make sure to set the boilerplate as the template repository.
   ![creating new repository](../../knowledge-base/ts-server-boilerplate/img/create-repo-boilerplate-dark.png)
2. Clone the new repository to your local machine.

```bash
git clone https://github.com/MapColonies/my-new-amazing-repo.git
```

&nbsp;&nbsp;&nbsp;&nbsp;or if you prefer using ssh:

```bash ssh
git clone git@github.com:MapColonies/ts-server-boilerplate.git
```

3. Set the name of the project in the `package.json` and `package-lock.json` files. Change the `name` field to match your project's name.

```json
{
  "name": "my-new-amazing-repo",
  ...
}
```

4. Edit the `README.md` file to match your project's name and description. You can also add any additional information that is relevant to your project.

5. Rename any mention of `ts-server-boilerplate` in the codebase to match your project's name. You should use VS Code or any other IDE to search for the term `ts-server-boilerplate` and replace it with your project's name.

6. Rename the `src/resourceName` and `src/anotherResource` directories and change the content of the files inside them to match your project's resources. You can also add any additional resources that are relevant to your project.

7. Change the tests to match your project's resources. You can also add any additional tests that are relevant to your project.

From here on, you can start developing your project using the boilerplate as a starting point. The boilerplate includes many features and packages to make the development process easier and faster and ensure common practices and standards.

Check the [boilerplate documentation](../../knowledge-base/ts-server-boilerplate/readme.md) for more information on the features and packages included in the boilerplate.
