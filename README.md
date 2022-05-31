<!--
 * @Author: ls
 * @Date: 2022-05-31 14:44:48
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 14:58:28
 * @Description: 请填写简介
-->
# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
___
# 使用插件
 ## 使用"vite-plugin-md"将markdown文档转换为组件使用

    Install
    npm i vite-plugin-md -D # yarn add vite-plugin-md -D
  ### TypeScript Shim
    where needed
    declare module '*.vue' {
      import type { ComponentOptions } from 'vue'
      const Component: ComponentOptions
      export default Component
    }

    declare module '*.md' {
      import type { ComponentOptions } from 'vue'
      const Component: ComponentOptions
      export default Component
    }
  ### then add the following to vite.config.js
    import Vue from '@vitejs/plugin-vue'
    import Markdown from 'vite-plugin-md'

    export default {
      plugins: [
        Vue({
          include: [/\.vue$/, /\.md$/], // <--
        }),
        Markdown(),
      ],
    }


 ## 使用prism.js 来修饰markdown代码块