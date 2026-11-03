import { readFile, writeFile } from 'node:fs/promises';

const sources = [
  'assets/js/plugins/jquery.greedy-navigation.js',
  'assets/js/_main.js',
  'assets/js/theme.js',
];
const contents = await Promise.all(sources.map(path => readFile(path, 'utf8')));
await writeFile('assets/js/main.min.js', '// Academic Pages scripts, bundled from the upstream sources.\n' + contents.join('\n'));
