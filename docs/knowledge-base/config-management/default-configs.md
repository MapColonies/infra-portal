---
title: Default configs
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---
## What are default configs?
default configs are configs we define when creating our schema that will be deployed to the config-server when the server is started for the first time. This is useful as it makes it easier to manage configurations in a more organized way and make the deployment a breeze.

Default configs support [references](./references.mdx) to other default configs, so you can reuse configurations in multiple places.

## How do I define a default config?
To define a default config, you need to create a file in the same folder as the schema, with the same version as the schema. For example if the schema is in `schemas/my-schema/v1.schema.json`, the default config should be in `config/my-schema/v1.configs.json`.

Each file supports multiple configs, as long as their name is unique across all the configs in the schemas repo.

The file is enforced with the following schema, with the value enforced by the schema of the config:
```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "value": {}
    },
    "required": ["name", "value"]
  },
  "minItems": 1
}
```
