# Modal

## Image

![Modal preview](/doc/modal-gallery-component.png)

## Description

The `Modal` component displays a full-screen pop-up with a focused project or media item. It locks page scroll while open, listens for the `Escape` key to close, and renders a title, image, description, tags, and external links. It is designed to work with project gallery data and is used for richer details than the gallery cards alone provide.

## Inputs

| Name | Type | Required | Default | Possible values | Description |
| --- | --- | --- | --- | --- | --- |
| `modalContent` | `Record<string, any>` | Yes | — | Any object containing `img`, `alt`, `title`, `description`, `tags`, and optional `main_link` / `links` | Content displayed inside the modal. |
| `isModalOpen` | `Boolean` | Yes | `false` | `true`, `false` | Controls whether the modal is visible. When enabled, the page scroll is locked. |
