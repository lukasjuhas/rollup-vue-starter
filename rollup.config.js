import path from 'path';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';
import { uglify } from 'rollup-plugin-uglify';
import builtins from 'rollup-plugin-node-builtins';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const plugins = [
  alias({
    vue: 'node_modules/vue/dist/vue.esm.js',
    vue$: 'vue/dist/vue.common.js',
    '@': path.resolve('./src/'),
    resolve: ['.js', '.vue'],
  }),
  vue({
    // css: './dist/assets/css/app.css',
  }),
  nodeResolve({
    browser: true,
    main: true,
    jsnext: true,
  }),
  commonjs({
    include: [
      'node_modules/**',
      './src/**',
    ],
  }),
  json(),
  replace({
    // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VUE_ENV': JSON.stringify('browser'),
  }),
  babel({
    presets: [
      [
        'env', {
          modules: false,
        },
      ],
    ],
    plugins: [
      'external-helpers',
    ],
    comments: false,
    babelrc: false,
    exclude: 'node_modules/**',
  }),
  globals(),
  builtins(),
];

const config = {
  input: 'src/app.js',
  output: {
    file: 'public/assets/js/app.js',
    format: 'iife',
    strict: true,
    sourcemap: true,
  },
  plugins,
};

if (process.env.NODE_ENV === 'production') {
  config.output.sourcemap = false;
  config.plugins.push(uglify());
}

if (process.env.NODE_ENV === 'development') {
  config.plugins.push(livereload());
  config.plugins.push(serve({
    contentBase: './public',
    port: 8080,
    open: true,
  }));
}

export default config;
