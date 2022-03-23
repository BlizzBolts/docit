import { globby } from 'globby';
import path from 'path';
import { MD_PATTERN } from '../constants.js';
import { Markdown } from './Markdown.js';
class MarkdownCache {
    markdowns;
    config;
    constructor(config) {
        this.config = config;
    }
    async scan() {
        const patterns = await globby(MD_PATTERN, {
            cwd: this.config.docs,
        });
        this.markdowns = patterns.map((o) => {
            return new Markdown(o, this.config);
        });
    }
    getMarkdowns() {
        return this.markdowns;
    }
    async prepare() {
        await this.scan();
    }
    add(fullPath) {
        const relativePath = path.relative(this.config.docs, fullPath);
        this.markdowns.push(new Markdown(relativePath, this.config));
    }
    async remove() {
        await this.scan();
    }
    async update() {
        await this.scan();
    }
}
export { MarkdownCache };
//# sourceMappingURL=MarkdownCache.js.map