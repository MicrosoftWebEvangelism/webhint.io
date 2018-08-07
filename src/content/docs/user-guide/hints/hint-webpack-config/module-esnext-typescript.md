---
category: "user-guide"
layout: "docs"
originalFile: "docs/user-guide/hints/hint-webpack-config/module-esnext-typescript.md"
permalink: "docs/user-guide/hints/hint-webpack-config/module-esnext-typescript/index.html"
title: "Validate `module` property in TypeScript has the appropiate value for webpack"
tocTitle: "hints"
contentType: "details"
---
# Validate `module` property in TypeScript has the appropiate value for webpack (`module-esnext-typescript`)

## Why is this important?

Webpack 2+ supports ES Modules out of the box and therefore
doesn't require you to transpile import/export statements resulting in smaller
builds, and better 🌳 shaking.

## What does the hint check?

This checks that you are using 'module:"esnext"' in your tsconfig when you are
using webpack 2+.

### Example that **trigger** the hint

`typescript-config` parser not added to `.hintrc`.

```json
{
    "connector": {...},
    "formatters": [...],
    "parsers": ["webpack-config"],
    "hints": {
        "webpack-config/module-esnext-typescript": "error",
        ...
    },
    ...
}
```

`typescript-config` configured but `complierOptions.module` has
a value different to `esnext`

```json
{
    "compilerOptions": {
        "module": "commonjs"
    }
}
```

### Examples that **pass** the hint

`typescript-config` configured and `complierOptions.module` has
the value `esnext`

```json
{
    "compilerOptions": {
        "module": "esnext"
    }
}
```

## Further Reading

* [Webpack Documentation][webpack docs]
* [Webpack and TypeScript][typescript docs]

[webpack docs]: https://webpack.js.org/concepts/
[typescript docs]: https://webpack.js.org/guides/typescript/
