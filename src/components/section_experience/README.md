# Experience Section

## Image

![experience-section-component](/doc/experience-section-component.png)

## Description

The `Experience Section` component displays a single professional or educational experience item. It renders the date, an icon, a title, and a list of descriptive paragraphs. It is used inside larger text sections to present structured experience entries.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `experience` | `Object` | Yes | — | A single experience item object | A single experience item containing a date, image, image description, title, and description list. |

### Example structure

```ts
{
  date: '2023',
  img: '/path/to/icon.png',
  'img-description': 'Experience icon',
  title: 'Project Manager',
  description: ['First paragraph', 'Second paragraph']
}
```
