# MDX

MDX is a syntax that enable writing JSX and JavaScript expressions in your Markdown files.


## Syntax

```md
# Title 1

## Title 2

{ console.log({str: 'hello world!'})}

export const MyComponent = () => <strong>Coffee Time</strong>

<MyComponent />
```

Check out [MDX](https://mdxjs.com/docs/what-is-mdx/) for more.


## Usage

Docit support normal `.md` files by default.

To render components in Markdown file, please use `.mdx` as file extension.

You can mix and layout your files as you want.

For Example

```md
|- docs
  |- get-started
    |- introduction.md
    |- features.md
  |- components
    |- Button.mdx
    |- Sidebar.mdx
|- package.json
```