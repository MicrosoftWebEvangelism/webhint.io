---
category: "user-guide"
layout: "docs"
originalFile: "docs/user-guide/concepts/formatters.md"
permalink: "docs/user-guide/concepts/formatters/index.html"
title: "Formatters"
tocTitle: "concepts"
contentType: "details"
---
# Formatters

A `formatter` takes the results of executing the configured hints and
transforms them to be consumed by the user. A `formatter` can output
the results via the `console` in different formats, a `JSON` file,
`XML`, etc.

You can specify one or more `formatter`s as the output. E.g.: You want
a summary in the screen as well as a text report. You need to add the
name inside the property `formatters`:

```json
{
    "formatters": "formatter1"
}
```

or

```json
{
    "formatters": [
        "formatter1",
        "formatter2"
    ]
}
```

## List of official `formatter`s

The officially supported `formatter`s that can be installed via `npm` are:

* [`@hint/formatter-json`][formatter-json] does a `JSON.stringify()` of
  the results. Output is not user friendly:

![Example output for the json formatter](/static/images/json-output-6f15a72cc8.png)

* [`@hint/formatter-stylish`][formatter-stylish] prints the results in
  table format indicating the resource, line, and column:

![Example output for the stylish formatter](/static/images/stylish-output-c0333ea990.png)

* [`@hint/formatter-codeframe`][formatter-codeframe] shows also the code
  where the error was found if applicable:

![Example output for the codeframe formatter](/static/images/codeframe-315a10f36b.png)

* [`@hint/formatter-summary`][formatter-summary] shows a summary
  of all the warnings and errors found for all the resources:

![Example output for the summary formatter](/static/images/summary-output-3e8d086067.png)

* [`@hint/formatter-excel`][formatter-excel] creates an Excel spreadsheet
  with a sheet with the results per resource:

![Example output for the summary sheet of the excel formatter](/static/images/excel-summary-6f023bede4.png)

![Example output for one of the details sheet of the excel formatter](/static/images/excel-details-396322510d.png)

If you want to implement your own `formatter`, visit the [contributor
guide][contributor guide]

<!-- Link labels: -->

[contributor guide]: ../../../contributor-guide/formatters/
[formatter-json]: https://npmjs.com/package/@hint/formatter-json
[formatter-stylish]: https://npmjs.com/package/@hint/formatter-stylish
[formatter-codeframe]: https://npmjs.com/package/@hint/formatter-codeframe
[formatter-summary]: https://npmjs.com/package/@hint/formatter-summary
[formatter-excel]: https://npmjs.com/package/@hint/formatter-excel