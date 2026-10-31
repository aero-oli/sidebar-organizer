import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const chrome = process.env.CHROME_BIN || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome');
const temp = await mkdtemp(path.join(tmpdir(), 'sidebar-organizer-browser-'));
const production = process.argv.includes('--production');
let server;
try {
  const bundle = await rollup({
    input: path.join(root, 'tests/browser/fixture.ts'),
    plugins: [
      {
        name: 'fixture-typescript',
        resolveId(source) {
          if (source === 'fixture-runtime-helpers') return '\0fixture-runtime-helpers';
          const relative = source === '@types' ? 'types' : source === '@constants' ? 'constants'
            : source.startsWith('@utilities/') ? source.replace('@utilities/', 'utilities/')
            : /^(components|constants)\//.test(source) ? source : null;
          if (!relative) return null;
          for (const suffix of ['.ts', '/index.ts']) {
            const candidate = path.join(root, 'src', relative.replace(/\.js$/, '') + suffix);
            if (existsSync(candidate)) return candidate;
          }
          return null;
        },
        load(id) {
          if (id !== '\0fixture-runtime-helpers') return null;
          const filename = path.join(root, 'src/sidebar-organizer.ts');
          const source = ts.createSourceFile(filename, readFileSync(filename, 'utf8'), ts.ScriptTarget.Latest, true);
          const owner = source.statements.find(node => ts.isClassDeclaration(node) && node.name.text === 'SidebarOrganizer');
          const arrow = owner.members.find(node => node.name?.getText(source) === '_createDividerWithGroup').initializer;
          const fn = ts.factory.createFunctionExpression(undefined, undefined, undefined, undefined, arrow.parameters, arrow.type, arrow.body);
          const text = ts.createPrinter().printNode(ts.EmitHint.Expression, fn, source);
          return ts.transpileModule(`import { ATTRIBUTE, CLASS, SELECTOR } from '@constants'; export const createRuntimeGroupDivider = ${text};`, {
            compilerOptions: { target: ts.ScriptTarget.ES2021, module: ts.ModuleKind.ESNext },
          }).outputText;
        },
        transform(code, id) {
          if (!id.endsWith('.ts')) return null;
          return ts.transpileModule(code, { compilerOptions: {
            target: ts.ScriptTarget.ES2021, module: ts.ModuleKind.ESNext,
            experimentalDecorators: true, useDefineForClassFields: false, importHelpers: true,
          }, fileName: id }).outputText;
        },
      },
      replace({ preventAssignment: true, __DEBUG__: 'false', 'process.env.DEBUG': 'false' }),
      nodeResolve({ browser: true, preferBuiltins: false, extensions: ['.mjs', '.js', '.json', '.ts'] }), commonjs(), json(),
    ],
    onwarn(warning, warn) {
      if (!['CIRCULAR_DEPENDENCY', 'THIS_IS_UNDEFINED'].includes(warning.code)) warn(warning);
    },
  });
  await bundle.write({ dir: temp, format: 'es', entryFileNames: 'fixture.js' });
  await bundle.close();
  server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      if (url.pathname === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<!doctype html><html><head><meta charset="utf-8"></head><body><pre id="results">pending</pre><script type="module" src="/fixture.js"></script></body></html>');
      } else if (url.pathname === '/production') {
        const manifest = JSON.parse(await readFile(path.join(root, 'custom_components/sidebar_organizer/frontend/asset-manifest.json'), 'utf8'));
        const dialogChunk = Object.keys(manifest.chunks).find(name => name.startsWith('sidebar-organizer-dialog-'));
        res.setHeader('Content-Type', 'text/html');
        res.end(`<!doctype html><html><body><pre id="results">pending</pre><script type="module">
          const result = { passed: [], failed: [], errors: [] };
          const check = (name, condition) => (condition ? result.passed : result.failed).push(name);
          const output = document.getElementById('results');
          const show = () => output.textContent = JSON.stringify(result);
          addEventListener('error', event => { result.errors.push(event.message); show(); });
          addEventListener('unhandledrejection', event => { result.errors.push(String(event.reason)); show(); });
          try {
            window.SidebarOrganizer = {};
            await import('/assets/sidebar-organizer.js?v=fixture-current');
            for (let attempt = 0; attempt < 100 && !customElements.get('so-group-divider'); attempt++) {
              await new Promise(resolve => setTimeout(resolve, 10));
            }
            check('production entry loads the runtime', Boolean(customElements.get('so-group-divider')));
            check('editor is absent before opening', !customElements.get('sidebar-organizer-config-dialog') && !customElements.get('sidebar-workbench-yaml-editor'));
            check('startup does not fetch editor chunks', !performance.getEntriesByType('resource').some(entry => /sidebar-dialog-|sidebar-organizer-dialog[-_]/.test(entry.name)));
            await import('/assets/' + ${JSON.stringify(dialogChunk)});
            check('lazy production dialog registers', Boolean(customElements.get('sidebar-organizer-dialog')));
            check('lazy production editor registers', Boolean(customElements.get('sidebar-organizer-config-dialog')));
            check('lazy CodeMirror element registers', Boolean(customElements.get('sidebar-workbench-yaml-editor')));
          } catch (error) { result.errors.push(String(error.stack || error)); }
          show();
        </script></body></html>`);
      } else if (url.pathname.startsWith('/assets/')) {
        res.setHeader('Content-Type', 'text/javascript');
        if (url.pathname === '/assets/sidebar-organizer.js' && !url.search) {
          // Simulate a previously cached entry whose exports belong to an old
          // build. Current hashed modules must never depend on this URL.
          res.end('throw new Error("Unversioned cached entry was loaded");');
        } else {
          res.end(await readFile(path.join(root, 'custom_components/sidebar_organizer/frontend', path.basename(url.pathname))));
        }
      } else {
        res.setHeader('Content-Type', 'text/javascript');
        res.end(await readFile(path.join(temp, path.basename(url.pathname))));
      }
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/`;
  const scenarios = [{ width: 1100, page: '/' }, { width: 1700, page: '/' }];
  if (production) scenarios.push({ width: 1100, page: '/production' });
  for (const { width, page } of scenarios) {
    const args = ['--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
      `--user-data-dir=${path.join(temp, `profile-${width}-${page === '/' ? 'source' : 'production'}`)}`, `--window-size=${width},1000`,
      '--virtual-time-budget=15000', '--dump-dom', new URL(page, url).href];
    const child = spawn(chrome, args);
    let stdout = '', stderr = '';
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => { stderr += chunk; });
    const timer = setTimeout(() => child.kill('SIGKILL'), 45000);
    const code = await new Promise((resolve, reject) => {
      child.once('error', reject); child.once('exit', resolve);
    });
    clearTimeout(timer);
    const match = stdout.match(/<pre id="results"[^>]*>(.*?)<\/pre>/s);
    const result = match?.[1].replaceAll('&quot;', '"').replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
    if (code !== 0 || !result || result === 'pending') throw new Error(`Chrome fixture failed (${code}): ${result || stdout.slice(-1500)}\n${stderr.slice(-1500)}`);
    const data = JSON.parse(result);
    console.log(`${width}px ${page}: ${data.passed.length} passed, ${data.failed.length} failed, ${data.errors.length} errors`);
    if (data.failed.length || data.errors.length) console.error(JSON.stringify(data));
    if (data.errors.length || data.failed.length) process.exitCode = 1;
  }
} finally {
  if (server) await new Promise(resolve => server.close(resolve));
  await rm(temp, { recursive: true, force: true });
}
