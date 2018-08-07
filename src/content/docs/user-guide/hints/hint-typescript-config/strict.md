---
category: "user-guide"
description: "typescript-config/strict checks if the property strictis enabled in your TypeScript configuration file (i.e tsconfig.json)."
layout: "docs"
originalFile: "docs/user-guide/hints/hint-typescript-config/strict.md"
permalink: "docs/user-guide/hints/hint-typescript-config/strict/index.html"
title: "Enable strict option in TypeScript configuration"
tocTitle: "hints"
contentType: "details"
---
# Enable strict option in TypeScript configuration (`strict`)

`typescript-config/strict` checks if the property `strict`
is enabled in your TypeScript configuration file (i.e `tsconfig.json`).

## Why is this important?

By enabling the `strict` compiler option of TyepScript the compiler will
run in the strictest of the modes catching more typing issues before runtime.

## What does the hint check?

This hint checks if the `compilerOptions` property `strict` is enabled.

### Examples that **trigger** the hint

By default TypeScript doesn't enable the strict mode:

```json
{
    "compilerOptions": {
        "target": "es5",
        ...
    },
    ...
}
```

Also setting the value to `false` will fail:

```json
{
    "compilerOptions": {
        "strict": false,
        ...
    },
    ...
}
```

### Examples that **pass** the hint

`strict` value is `true`:

```json
{
    "compilerOptions": {
        "strict": true,
        ...
    },
    ...
}
```

## Further Reading

* [TypeScript Documentation][typescript docs]

[typescript docs]: https://www.typescriptlang.org/docs/home.html
