# Gallery Section

## Image

![gallery-component](/doc/gallery-component.png)
![gallery-component](/doc/modal-gallery-component.png)

## Description

The `Gallery Section` component renders a list of cards representing items in a gallery. Each card displays an image, title, summary, and tags. Clicking a card opens a modal with a richer version of the same content.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `items` | `Array` | Yes | — | Array of gallery item objects | Each object contains an image, alt text, title, summary, and tags. |

### Example structure

```ts
[
  {
    img: '/path/to/image.jpg',
    alt: 'Project preview',
    title: 'Name of the project',
    sum_up: 'Short summary',
    tags: ['Tech::Vue', 'Design']
  },
  ...
]
```
