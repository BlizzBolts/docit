import path from 'path';
import fsx from 'fs-extra';
import grayMatter from 'gray-matter';
import { select } from 'unist-util-select';
import { toRoutePath } from '../utils/index.js';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
class Markdown {
    config;
    relativePath;
    constructor(relativePath, config) {
        this.relativePath = relativePath;
        this.config = config;
    }
    get cwd() {
        return this.config.docs;
    }
    get fileName() {
        return path.parse(this.relativePath).name;
    }
    get fullContent() {
        return fsx.readFileSync(this.fullPath);
    }
    get frontMatter() {
        const { data } = grayMatter(this.fullContent);
        return data;
    }
    get content() {
        const { content } = grayMatter(this.fullContent);
        return content;
    }
    get title() {
        const h1Title = select('heading[depth=1] > text', unified().use(remarkParse).parse(this.content))?.value;
        return this.frontMatter?.title || h1Title || this.fileName;
    }
    get fullPath() {
        return path.resolve(this.config.docs, this.relativePath);
    }
    get routePath() {
        return toRoutePath(this.relativePath);
    }
    get transformedPaths() {
        return this.relativePath.split('/').filter((o) => o !== '');
    }
}
export { Markdown };
//# sourceMappingURL=Markdown.js.map