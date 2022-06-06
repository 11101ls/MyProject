import { RouteRecordRaw } from 'vue-router';
const cssRouter: Array<RouteRecordRaw> = [{
  path: '/demo/cssDemo',
  name: 'demo-cssDemo',
  meta: {
    title: 'cssDemo',
    index: 4
  },
  redirect: '/demo/cssDemo/introduction',
  component: () => import('@/views/demo/cssDemo/index.vue'),
  children: [
    {
      name: 'css-introduction',
      path: '/demo/cssDemo/introduction',
      component: () => import('@/views/demo/cssDemo/components/introduction/index.md'),
    }, {
      name: 'css-translucent-borders',
      path: '/demo/cssDemo/translucent-borders',
      component: () => import('@/views/demo/cssDemo/packages/translucent-borders/docs/README.md'),
    }],


}];
export default cssRouter;