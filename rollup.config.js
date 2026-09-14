import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/chrono-map-card.js',
    format: 'cjs'
  },
  plugins: [nodeResolve(), commonjs(), json()]
};