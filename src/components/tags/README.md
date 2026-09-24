# Tags

## Image

![Tags preview](/doc/tags-component.png)

## Description

The `Tags` component renders a list of small badges used to highlight technologies, skills, or categories. It supports both simple tags and split tags using the `key::value` format, which are displayed as a two-part pill with a distinct left and right section.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `tags` | `Array` | Yes | — | Array of strings such as `'Vue'` or `'Frontend::JavaScript'` | A list of tag strings. Each item may be a plain string or a split value using `prefix::suffix`. |

### Example structure

```ts
['Vue', 'Frontend::JavaScript', 'Design']
```
