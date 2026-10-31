import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import { version } from './package.json';
import { logCardInfo, defaultPlugins } from './rollup.config.helper.mjs';
import { frontendBundlePlugin } from './scripts/frontend_bundle_plugin.mjs';

const dev = process.env.ROLLUP_WATCH;
const port = process.env.PORT || 8235;
const debug = process.env.DEBUG || dev;

const currentVersion = dev ? 'DEVELOPMENT' : `v${version}`;
const custombanner = logCardInfo(currentVersion);
const outputDirectory = dev ? 'dist' : 'build';

const serveopts = {
  contentBase: ['./dist'],
  port,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};
const terserOpt = {
  module: true,
  compress: {
    drop_console: ['log', 'debug', 'table', 'groupCollapsed', 'groupEnd'],
    module: false,
  },
};
const replaceOpts = {
  preventAssignment: true,
  'process.env.DEBUG': JSON.stringify(debug),
  __DEBUG__: debug || false,
};

const plugins = [dev && serve(serveopts), !dev && terser(terserOpt)];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: outputDirectory,
        entryFileNames: 'sidebar-organizer.js',
        chunkFileNames: '[name]-[hash].js',
        format: 'es',
        inlineDynamicImports: Boolean(dev),
        sourcemap: dev ? true : false,
        banner: (chunk) => (chunk.isEntry ? custombanner : undefined),
        sourcemapIgnoreList: (relativeSourcePath, sourcemapPath) => {
          // will ignore-list all files with node_modules in their paths
          return relativeSourcePath.includes('node_modules');
        },
      },
    ],
    plugins: [
      !dev && frontendBundlePlugin(outputDirectory),
      replace(replaceOpts),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: dev ? './dist' : './build',
      }),
      ...defaultPlugins,
      ...plugins,
    ],
    moduleContext: (id) => {
      const thisAsWindowForModules = [
        'node_modules/@formatjs/intl-utils/lib/src/diff.js',
        'node_modules/@formatjs/intl-utils/lib/src/resolve-locale.js',
      ];
      if (thisAsWindowForModules.some((id_) => id.trimRight().endsWith(id_))) {
        return 'window';
      }
    },
    watch: {
      exclude: 'node_modules/**',
    },
  },
];
