/*
 * @Author: ls
 * @Date: 2022-03-24 21:22:11
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 13:37:41
 * @Description: 请填写简介
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
