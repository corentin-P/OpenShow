# Button

## Image

![Button component preview](/doc/button-component.png)

## Description

The `Button` component renders a styled link that behaves like a button. It is a lightweight reusable element used for navigation or call-to-action actions across the application. The component supports a custom text label, an optional CSS variant (button arrow), and a destination URL.
If you need to do a link to another page in this website, consider using the [router link component](../router_link/README.md)

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `text` | `String` | Yes | — | | Label displayed inside the button. |
| `type` | `String` | No | `''` | `'button-arrow'`, or other CSS modifier classes | Optional style modifier applied to the button. |
| `href` | `String` | No | `''` | Any valid URL or route path | Destination URL used by the anchor element. |
