# Experience Section

## Image

![experience-section-component](/doc/experience-section-component.png)

## Description

The `Experience Section` component displays a single professional or educational experience item. It renders the date, an icon, a title, and a list of descriptive paragraphs. It is used inside larger text sections to present structured experience entries.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `content` | `ExperienceSectionModel` | Yes | — | A map of experiences item object | A map experiences item containing a date, image, image description, title, and description list. See [ExperienceSectionModel.ts](./ExperienceSectionModel.ts) |

### Example structure

```ts
{
  "exp1": {
    date: '2023',
    img: '/path/to/icon.png',
    'img-description': 'Experience icon',
    title: 'Project Manager',
    description: ['First paragraph', 'Second paragraph']
  },
  ...
}
```
