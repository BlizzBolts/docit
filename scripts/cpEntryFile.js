import fsx from 'fs-extra';
import path from 'path';

const from = path.resolve(process.cwd(), './src/client/index.html');
const to = path.resolve(process.cwd(), './build/client/index.html');

const str = fsx.readFileSync(from, {
  encoding: 'utf-8',
});

fsx.ensureFileSync(to);
fsx.writeFileSync(
  to,
  str.replace(
    `<script type="module" src="/index.tsx"></script>`,
    `<script type="module" src="/index.js"></script>`
  )
);
