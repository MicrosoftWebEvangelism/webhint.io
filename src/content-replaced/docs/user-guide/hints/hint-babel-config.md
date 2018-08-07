---
category: "user-guide"
description: "babel-config contains hints to check if your Babel configurationhas the most recommended configuration."
layout: "docs"
originalFile: "docs/user-guide/hints/hint-babel-config.md"
permalink: "docs/user-guide/hints/hint-babel-config/index.html"
title: "Babel configuration hint set"
tocTitle: "hints"
contentType: "details"
---
# Babel configuration hint set (`babel-config`)

`babel-config` contains hints to check if your Babel configuration
has the most recommended configuration.

## Why is this important?

Babel needs to be properly configured to reflect user's preference.

## Hints

* [babel-config/is-valid][is-valid]

## How to use this hint?

To use it you will have to install it via `npm`:

```bash
npm install @hint/hint-babel-config
```

Note: You can make `npm` install it as a `devDependency` using the
`--save-dev` parameter, or to install it globally, you can use the
`-g` parameter. For other options see [`npm`'s
documentation](https://docs.npmjs.com/cli/install).

And then activate it via the [`.hintrc`][hintrc] configuration file:

```json
{
    "connector": {...},
    "formatters": [...],
    "hints": {
        "babel-config/is-valid": "error",
        ...
    },
    "parsers": [...],
    ...
}
```

## Further Reading

* [Babel Documentation][babel documentation]

<!-- Link labels: -->

[babel documentation]: https://babeljs.io/docs/usage/babelrc/
[is-valid]: ./docs/is-valid.md
[hintrc]: https://webhint.io/docs/user-guide/further-configuration/hintrc-formats/
