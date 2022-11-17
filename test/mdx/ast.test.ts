import { describe, it, expect } from "vitest";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import stringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

describe("mdxToTree", () => {
  it("markdownToAst", async (done) => {
    const ast = unified().use(remarkParse).parse("# Hi\n\n*Hello*, world!");
    expect(ast).matchSnapshot();
    done();
  });

  it("mdxToAst", async (done) => {
    const ast = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .parse('import a from "b"\n\na <b /> c {1 + 1} d');
    expect(ast).matchSnapshot();
    done();
  });

  it("astToMdx", async (done) => {
    const complexString = `
      ## hello

      ## Table

      | a | b  |  c |  d  |
      | - | :- | -: | :-: |

      import { Button } from 'button'

      <Button con={1}/>
    `;
    const ast = unified().use(remarkParse).use(remarkMdx).parse(complexString);

    const result = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(stringify)
      .use(remarkGfm)
      .stringify(ast);
    console.log(result);
    done();
  });
  it("mdxToAstWithGFM", async (done) => {
    const sample = `
    
    # GFM

    ## Autolink literals

    www.example.com, https://example.com, and contact@example.com.

    ## Footnote

    A note[^1]

    [^1]: Big note.

    ## Strikethrough

    ~one~ or ~~two~~ tildes.

    ## Table

    | a | b  |  c |  d  |
    | - | :- | -: | :-: |

    ## Tasklist

    * [ ] to do
    * [x] done
    `;

    const file = await unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(sample);
    expect(String(file)).matchSnapshot();
    done();
  });
});
