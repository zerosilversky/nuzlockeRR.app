// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';

import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [visualizer(), sveltekit()],
  resolve: {
    alias: {
      $c: path.resolve('./src/lib/components'),
      $utils: path.resolve('./src/lib/utils'),
      $data: path.resolve('./src/lib/data'),
      $store: path.resolve('./src/lib/store.js'),
      $icons: path.resolve('./src/lib/components/icons/IconSet.ts')
    }
  },

  build: {
    sourcemap: true,
    target: ['es2020']
  },
  prerender: {
    entries: ['/guides']
  }
};

export default config;
