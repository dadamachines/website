// Dependency-free checks for the redesigned routes. Run after a Jekyll build:
// node scripts/audit-built-site.mjs /path/to/build [--all]
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '_site');
const all = process.argv.includes('--all');
const files = [];
const walk = dir => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) files.push(file);
  }
};
walk(root);
const route = file => '/' + path.relative(root, file).replaceAll(path.sep, '/').replace(/index\.html$/, '');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m => [m[1], m[2] ?? m[3]]));
const cache = new Map();
const document = file => {
  if (!cache.has(file)) {
    const html = fs.readFileSync(file, 'utf8').replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>').replace(/<!--[\s\S]*?-->/g, '');
    const tags = [...html.matchAll(/<([a-z][\w-]*)\b[^>]*>/gi)].map(m => ({ name: m[1].toLowerCase(), attrs: attrs(m[0]) }));
    cache.set(file, { html, tags, ids: tags.map(t => t.attrs.id).filter(Boolean) });
  }
  return cache.get(file);
};
const errors = [];
for (const privatePath of ['docs', 'scripts', 'font-analysis.md', 'README.md', '.env']) {
  if (fs.existsSync(path.join(root, privatePath))) errors.push(`Private/development artifact included in build: ${privatePath}`);
}
let checked = 0;
for (const file of files) {
  const url = route(file);
  if (!all && !(/^\/$|^\/shop\/$|^\/blog\/|^\/products\/|^\/202[45]\//.test(url))) continue;
  checked++;
  const doc = document(file);
  const report = message => errors.push(`${url}: ${message}`);
  if (doc.ids.length !== new Set(doc.ids).size) report('duplicate element IDs');
  const titles = doc.tags.filter(t => t.name === 'h1').length;
  if (titles !== 1) report(`expected one h1, found ${titles}`);
  for (const tag of doc.tags) {
    if (tag.name === 'img' && !Object.hasOwn(tag.attrs, 'alt')) report('image missing alt attribute');
    if (tag.name === 'iframe' && !tag.attrs.title) report('iframe missing title');
    const refs = [];
    if (['a', 'link'].includes(tag.name)) refs.push(tag.attrs.href);
    if (['img', 'script', 'iframe', 'video', 'source'].includes(tag.name)) refs.push(tag.attrs.src);
    if (tag.name === 'video') refs.push(tag.attrs.poster);
    if (tag.attrs['data-video-url']) refs.push(tag.attrs['data-video-url']);
    if (tag.attrs['data-gif-url']) refs.push(tag.attrs['data-gif-url']);
    if (tag.attrs.srcset) refs.push(...tag.attrs.srcset.split(',').map(candidate => candidate.trim().split(/\s+/)[0]));
    for (const rawRef of refs) {
    const ref = rawRef?.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
    if (!ref || /^(?:[a-z][\w+.-]*:|\/\/)/i.test(ref)) continue;
    const target = new URL(ref.replaceAll('&amp;', '&'), `https://audit.invalid${url}`);
    const relative = decodeURIComponent(target.pathname).replace(/^\//, '');
    let destination = path.join(root, relative);
    if (!fs.existsSync(destination) && !path.extname(destination)) destination += '.html';
    if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) destination = path.join(destination, 'index.html');
    if (!fs.existsSync(destination)) { report(`missing local target ${ref}`); continue; }
    if (target.hash && destination.endsWith('.html')) {
      const id = decodeURIComponent(target.hash.slice(1));
      if (id && !document(destination).ids.includes(id)) report(`missing anchor ${ref}`);
    }
    }
  }
}
console.log(`Checked ${checked} pages. ${errors.length} findings.`);
for (const error of errors) console.log(error);
if (errors.length) process.exitCode = 1;
