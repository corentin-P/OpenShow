# Sections

## Description

The `Sections` component acts as a dispatcher for the website's content blocks. It receives a `sections` configuration object and renders the correct child section based on the section type. Supported types include text-based sections, experience lists, logo lists, logo descriptions, project blocks, and gallery blocks.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `sections` | `Object` | Yes | — | Section map | A configuration object keyed by section name. Each entry defines the rendered content and section type. |

### Sections object

The sections object is a map with one or multiple keys , each representing one section (block) of your page. Each section will have the following structure :

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `type` | `String` | Yes | — | `experience`, `logos-list`, `logos-description`, `projects`, `gallery` | Type of the block. |
| `title` | `String` | No | — | Anything you want | Title of the block. |
| `titleInBox` | `Boolean` | No | false | `true` or `false` | Either the title must be in the div or not. |
| `sumup` | `List` | No | — | Any list of string | Sum up of the section. Placed at the top as a paragraph per item of the list. |
| `content` | `String` | No | — | Depending of the type of the block | Content of the block depending of its type. |


### Example structure

```ts
{
  about: {
    title: 'About',
    type: 'experience',
    sumup: [ "This project is awesome !", "I really need to use it !"],
    content: {}
  },
  it_skills: {
    type: 'logos-list',
    content: {/* logos-list items */}
  }
}
```

### Section types

#### Experience section 

![experience-section-component](/doc/experience-section-component.png)

See the [experience section readme](/src/components/section_experience/README.md) for more information.

#### Logo list section

![logo-list-component](/doc/logos-list-component.png)

See the [logo list section readme](/src/components/section_logo_list/README.md) for more information.

#### Logo description section

![Logo-description-component](/doc/logos-description-component.png)

See the [logo description section readme](/src/components/section_logo_description/README.md) for more information.

#### Project section

![projects-component](/doc/project-section-component.png)

See the [project section readme](/src/components/section_project/README.md) for more information.

#### Gallery section

![gallery-component](/doc/gallery-component.png)

See the [gallery section readme](/src/components/section_gallery/README.md) for more information.
