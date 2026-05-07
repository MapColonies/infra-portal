---
title: Default configs
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# ⚙️ Default Configs

## 🤔 What are default configs?
Default configs are base configurations we define right alongside our schema. When the config-server spins up for the first time, these defaults are automatically deployed! 

This makes managing configurations incredibly organized and turns service deployments into an absolute breeze. 🌬️

*Pro Tip:* Default configs support [references](./references.mdx) to other default configs, allowing you to easily reuse configurations across multiple places!

## 🛠️ How do I define a default config?
It's simple! You create a file right next to your schema, perfectly matching its version. 

For example, if your schema lives at `schemas/my-schema/v1.schema.json`, your default config belongs in `config/my-schema/v1.configs.json`.

You can cram as many configs as you want into a single file, as long as **every config name is completely unique** across the entire schemas repository.

The file strictly follows this JSON schema (and validates your `value` against your actual config schema!):
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