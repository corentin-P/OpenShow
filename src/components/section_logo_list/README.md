# Logo List Section

## Image

![logos-list-component](/doc/logos-list-component.png)

## Description

The `Logo List Section` component displays a row of logo images used for brand, partner, or technology showcases. It is a lightweight presentation component for stacked iconography and does not require additional behavior beyond image rendering.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `content` | `Object` | Yes | — | Object containing an array of logo objects | A list of image entries, each with an image path and alternate text. |

### Example structure

```ts
{
  logos: [
    { img: '/logos/vue.svg', alt: 'Vue logo' },
    { img: '/logos/ts.svg', alt: 'TypeScript logo' }
  ]
}
```
