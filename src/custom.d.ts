declare module 'prismjs';
type ComponentSize = any;
declare module 'lodash-es';
declare module 'store/index.ts' {
  const content: any;
  export default content;
}
// 处理打包时 json文件导入报错
declare module "*.json" {
  const content: any;
  export default content;
}