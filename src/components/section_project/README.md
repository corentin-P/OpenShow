# Project Section

## Image

![project-section-component](/doc/project-section-component.png)

## Description

The `Project Section` component displays one or more project entries in a structured format. Each project can contain a title, description paragraphs, external links, and images. This component is used to present deliverables, case studies, or project summaries with a clean visual layout.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `projects` | `Array` | Yes | — | Array of project objects | A list of project objects, each with a title, description, optional links, and optional images. |

### Example structure

```ts
[
  {
    title: 'OpenShow',
    description: ['A portfolio application', 'Built with Vue.js'],
    links: [{ text: 'Repository', link: 'https://example.com' }],
    imgs: [{ file: '/img/project.png', alt: 'Project screenshot', link: 'https://example.com' }]
  }
]
```
