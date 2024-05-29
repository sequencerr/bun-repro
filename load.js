import { readdirSync } from 'fs';
import { join, resolve } from 'path';
import { pathToFileURL } from 'url';

const root = resolve(process.cwd(), 'root')
const tasks = [];
for (const f of readdirSync(root))
    tasks.push(import(pathToFileURL(join(root, f))));
await Promise.all(tasks);
