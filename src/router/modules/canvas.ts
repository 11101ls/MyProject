import { RouteRecordRaw } from 'vue-router';
const canvasRouter: Array<RouteRecordRaw> = [{
  path: '/demo/canvas',
  name: 'demo-canvas',
  meta: {
    title: 'canvas',
    index: 4
  },
  // redirect: '/demo/cssDemo/introduction',
  component: () => import('@/views/demo/canvas/index.vue'),
  // children: [
  //   {
  //     name: 'css-introduction',
  //     path: '/demo/cssDemo/introduction',
  //     component: () => import('@/views/demo/cssDemo/components/introduction/index.md'),
  //   }, {
  //     name: 'css-translucent-borders',
  //     path: '/demo/cssDemo/translucent-borders',
  //     component: () => import('@/views/demo/cssDemo/packages/translucent-borders/docs/README.md'),
  //   }],


}];
export default canvasRouter;