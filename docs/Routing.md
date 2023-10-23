# Routing

Docit uses file-based routing.

For example:

```
├── docs (docRoot)
│   ├── CHANGELOG.md
│   ├── components
│   │   ├── button.mdx
│   │   ├── radio.mdx
│   │   ├── display
│   │   │   ├── text.mdx
│   │   │   ├── image.mdx
│   │   └── index.md
│   │   ├── checkbox.mdx
│   │   └── select.md
│   └── index.md
```

The above file structure will generate as:

```
index.md                      ---> /
CHANGELOG.md                  ---> /changelog
components/index.md           ---> /components/
components/button.mdx         ---> /components/button
components/radio.mdx          ---> /components/radio
components/checkbox.md        ---> /components/checkbox
components/select.md          ---> /components/select
components/display/image.mdx  ---> /components/display/image
components/display/text.mdx   ---> /components/display/text
```

## docRoot

docRoot can be configured in the config file.
docRoot is the starting point of all the docs, Docit will crawl all `.md` or `.mdx` file inside docRoot
