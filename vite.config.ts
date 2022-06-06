/*
 * @Author: ls
 * @Date: 2022-03-24 21:22:11
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 13:42:14
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md';
const path = require('path');
const _resolve = (dir) => path.join(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }),
  Markdown(),],
  resolve: {
    alias: {

      '@': _resolve('src'),
      '@assets': _resolve('src/assets'),
      '@components': _resolve('src/components'),
      '@utils': _resolve('src/utils'),
      '@router': _resolve('src/router'),
      '@store': _resolve('src/store'),
      '@views': _resolve('src/views'),
      '@hooks':_resolve("src/hooks"),
      'vue': 'vue/dist/vue.esm-bundler.js' 
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/variables.scss";'
      }
    }
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-admin-web/' : '/' publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vue-admin-web/'
  //   : '/'
})
