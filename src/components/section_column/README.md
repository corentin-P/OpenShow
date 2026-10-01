# Column Section

## Image

![Column section component preview](/doc/REPLACE_WITH_COLUMN_SECTION_COMPONENT_IMAGE.png)

## Description

The `ColumnSection` component displays a responsive row or column of content components. Each entry selects either the `Text` or `ProfileImage` component and passes it a `content` object. Below 600px, entries stack vertically; at 600px and wider, they are laid out in a row.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `content` | `ColumnSectionModel` | Yes | - | - | Components to render, in display order. Each entry has a `type` and a matching `content` object. See [ColumnSectionModel.ts](./ColumnSectionModel.ts) |

### Example structure

```ts
[
	"Col1" : {
		type: 'ProfileImage',
		content: {
			src: '/images/profile.jpg',
			alt: 'Portrait of the site owner'
		}
	},
	"Col2": {
		type: 'Text',
		content: {
			text: ['A short introduction.'],
			links: [
				{ url: '/resume.pdf', text: 'View my resume' }
			]
		}
	}
]
```
