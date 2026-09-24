# Router Link Button

## Image

![Router link button preview](/doc/button-arrow-component.png)

## Description

The `Router Link Button` component wraps a Vue Router link around a reusable `Button` component. It provides a simple way to create a navigation button with a route path and visible text while keeping the button styling centralized in the shared button component.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `to` | `String` | Yes | — | Any valid Vue Router route path | Target route for navigation. |
| `text` | `String` | Yes | — | Any visible label | Text shown inside the wrapped button. |
