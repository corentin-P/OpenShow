# Logos Description Section

## Image

![Logos-description-component](/doc/logos-description-component.png)

## Description

The `Logos Description Section` component shows a list of company or technology entries with an associated icon and textual description. Each item can include plain paragraphs or links, making it useful for presenting partners, skills, or tools with supporting references.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `content` | `Array` | Yes | — | Array of logo/skill entries | Each entry includes an image, alt text, name, and description array. |

### Example structure

```ts
[
  {
    img: '/path/to/logo.png',
    alt: 'Logo alt',
    name: 'Vue',
    description: ['Modern frontend framework', { text: 'Official docs', link: 'https://vuejs.org' }]
  }
]
```
