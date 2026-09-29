# Profile Image

## Image

![Profile image component preview](/doc/REPLACE_WITH_PROFILE_IMAGE_COMPONENT_IMAGE.png)

## Description

The `ProfileImage` component displays a circular profile image. The image source and alternative text are provided through the `content` prop.

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `content` | `Object` | Yes | — | Object containing the image source and its alternative text. |

### Example structure

```ts
{
	src: '/images/profile.jpg',
	alt: 'Portrait of the site owner'
}
```
