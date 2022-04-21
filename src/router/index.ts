import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; //这个样式必须引入
const routes=[
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      index: 0,
    },
    component: () => import('@views/Home/index.vue'),

  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
      index: 1
    },
    component: () => import('@/views/About/index.vue'),
    // import('@/views/About.vue'),

    // children: [
    //   {
    //     path: '/about/demo/edit/:id?',
    //     name: 'about-edit',
    //     component: () => import(/* webpackChunkName: "about" */ '@/views/demo/edit.vue'),
    //   }],
  },
  {
    path: '/threejs',
    name: 'threejs',
    meta: {
      title: 'thressJS',
      index: 5,
    },
    component: () => import('@views/threejs/index.vue'),
  },
  {
    path: '/colorCollection',
    name: 'colorCollection',
    meta: {
      title: '颜色集',
      index: 2
    },
    component: () => import('@views/colorCollection/index.vue'),

  },
  // {
  //   path: '/resource',
  //   name: 'resource',
  //   meta: {
  //     title: 'resource',
  //     index: 3
  //   },
  //   component: () => import('@views/resource/index.vue'),
  // },
  {
    
    path: '/picture',
    name: 'picture',
    meta: {
      title: 'picture',
      index: 3,
    },
    component: () => import('@views/resource/picture-resources/index.vue'),
    // component: () => import('@views/addReimbursement/index.vue'),


  },
  {
    path: '/demo/edit',
    name: 'edit',
    meta: {
      title: 'demo-edit',
      index: 3,
    },
    component: () => import('@views/demo/edit.vue'),

  },
  {
    path: '/addReimbursement',
    name: 'addReimbursement', 
    meta: {
      index: 3
    },
    component: () => import( '@views/addReimbursement/index.vue'),

  },
  {
    path: '/cssDemo',
    name: 'cssDemo',
    meta: {
      title: 'cssDemo',
      index: 4
    },
    component: () => import('@/views/cssDemo/index.vue'),
  },
]
const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
  // linkActiveClass: 'router-link', // 统一修改active-class

});
router.beforeEach((to,from,next)=>{
  NProgress.start();
  document.title = to.matched[0].meta.title as string;
  // console.log(document,"document");
  
  next();
})
router.afterEach((to, from) => {
  // window.scrollTo(0,0)
  // console.log(window.screenTop,"screenTop");
  // router.go(0)
  NProgress.done();
  // to and from are both route objects.
});

export default router;