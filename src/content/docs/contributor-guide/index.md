---
category: "contributor-guide"
description: "Learn about the different pieces that build webhint and what each one of them does"
layout: "docs"
originalFile: "docs/contributor-guide/index.md"
permalink: "docs/contributor-guide/index.html"
title: "Contributor guide"
contentType: "index"
---
# Contributor guide

## Getting started

This section contains the basics to start hacking `webhint`:

* [Architecture](./getting-started/architecture.md): The internals of the
  project and how things communicate with each other (spoiler: using `event`s).
* [Development environment](./getting-started/development-environment.md): How
  to set up your machine to start writing code.
* [Pull requests](./getting-started/pull-requests.md): If you want to
  contribute back to the project, make sure to read this section first.
* [Events](./getting-started/events.md): List of events used internally.

## How to

The ins and outs of the different parts that make `webhint` plus some common scenarios:

* [Develop a connector](./how-to/connector.md)
* [Develop a formatter](./how-to/formatter.md)
* [Develop a parser](./how-to/parser.md)
* [Develop a hint](./how-to/hint.md)
* [Implement common hint scenarios](./how-to/common-hint-scenarios.md)

## Guides

* [Create a custom hint step by step](./guides/create-custom-hint.md)
