# Configuration and translations

This directory contains the website's shared configuration and one YAML file per language. The files are loaded by [`importLangs.ts`](./importLangs.ts).

## Files

```text
src/lang/
|- importLangs.ts
|- config.yaml       # Shared links, images, and options
|- en.yaml           # English translations
`- fr.yaml           # French translations
```

`config.yaml` contains values shared by all languages, such as URLs, images, and section types. Each language file contains only the text displayed to users. Keys from `config.yaml` and the translation files are merged recursively.

## YAML format

The files use two-space indentation. Lists are introduced with `-`, and keys containing spaces or hyphens are valid without quotes:

```yaml
welcome:
  title: Hey ! I'm <name>.
  projects: My projects

about:
  sumup:
    text:
      - First line
      - Second line
```

Keep the same keys in every language file. Values can be strings, lists, or nested objects. Quote a value if it starts with a character that has a special meaning in YAML (`#`, `-`, `:`, etc.), or if it must always remain a string.

## Adding a language

1. Copy `en.yaml` to a new file, for example `de.yaml`, and translate only the text values.
2. In [`importLangs.ts`](./importLangs.ts), import the file as raw text:

   ```ts
   import messagesDeYaml from './de.yaml?raw'
   ```

3. Parse the file and merge it with the shared configuration:

   ```ts
   const messages_de = parse(messagesDeYaml)
   const de = deepmerge(config, messages_de)
   ```

4. Add `de` to the locale type and to `messages`:

   ```ts
   createI18n<[Schema], 'en' | 'fr' | 'de'>({
     messages: { en, fr, de }
   })
   ```

5. Add `de` to the available languages if it should be displayed in the language selector.

## Data structure

Each language file contains one object per page, as well as a `main` object for shared data such as the navigation bar.

Sections use the following fields in particular:

- `type`: section type (`experience`, `logos-list`, `logos-description`, `projects`, or `gallery`)
- `title`: translated section title
- `content`: section content
- `description` and `sumup`: text displayed as a list
- `imgs` and `links`: project images and links

The structure of `config.yaml` must remain compatible with the language files. Configuration values such as `img`, `file`, `url`, and `link` stay in `config.yaml`, while visible values such as `title`, `text`, `alt`, and `description` are translated in `en.yaml` and `fr.yaml`.
