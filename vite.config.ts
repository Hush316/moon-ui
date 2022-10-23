/// <reference types="vitest">
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' //jsx插件

// 引入Unocss插件
import Unocss from './config/unocss'
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'MoonUI',
      fileName: 'moon-ui',
      // 导出模块格式
      formats: ['es', 'esm', 'umd', 'iife']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
