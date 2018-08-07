---
category: "user-guide"
layout: "docs"
originalFile: "docs/user-guide/further-configuration/hintrc-formats.md"
permalink: "docs/user-guide/further-configuration/hintrc-formats/index.html"
title: ".hintrc formats"
tocTitle: "further configuration"
contentType: "details"
---
# .hintrc formats

The `.hintrc` file supports the different file formats:

```json
{
    "connector": {
        "name": "connectorName"
    },
    "formatters": ["formatterName"],
    "hints": {
        "hint1": "error",
        "hint2": "warning",
        "hint3": "off"
    },
    "hintsTimeout": 120000
}
```
