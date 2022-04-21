import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
const _resolve = (dir) => path.join(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
})
