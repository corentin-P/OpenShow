# Text

## Image

![Text component preview](/doc/REPLACE_WITH_TEXT_COMPONENT_IMAGE.png)

## Description

The `Text` component displays a list of paragraphs and a list of links styled as buttons. Both are provided through the `content` prop.

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `content` | `Object` | Yes | — | Object containing paragraph strings and link entries. |

### Example structure

```ts
{
	text: [
		'First paragraph of text.',
		'Second paragraph of text.'
	],
	links: [
		{ url: '/resume.pdf', text: 'View my resume' }
	]
}
```
