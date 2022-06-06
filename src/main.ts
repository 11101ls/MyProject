import { createApp,toRaw } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/styles/index.scss';
import router from './router/index';
//页面加载进度条
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; //这个样式必须引入
import { createPinia, PiniaPluginContext } from 'pinia';
// 注册插件
import Loading from './components/loading';
// 注册组件 preview
import Preview from './components/preview/index.vue'
//使用
const app = createApp(App);
const store=createPinia()

// 定义全局变量
// 声明文件
type Filter={
  format:<T>(str:T)=>string
}
type loading={
  show: () => void
}
type unLoading = {
  hide: () => void;
};
type Options={
  key?:string
}
declare module '@vue/runtime-core'{
  export interface ComponentCustomProperties{
    $filters:Filter 
    $env:string
    $loadingShow: loading,
    $unLoadingShow:unLoading

  }
} 

app.config.globalProperties.$filters={
  format<T>(str:T){
    return `真!~~${str}`
  }
}
// 定义全局变量
app.config.globalProperties.$env='dev'
NProgress.configure({
  showSpinner: false,
  minimum: 0.3,
  // trickleRate: 1,
  trickleSpeed: 800,
  speed: 500,
});
// 使用localStorage
const setStorage=(key:string,value:any)=>{
  localStorage.setItem(key, JSON.stringify(value))
}
// 定义pinia插件
const __piniaKey__:string="piniaStr"
const piniaPlugin=(options:Options)=>{

 
  return (context: PiniaPluginContext)=>{
    const { store } = context;
    // 发生变化 存值
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })

  }
    
}
store.use(piniaPlugin({
  key:"pinia"
}))
// 全局组件preview
app.component('Preview', Preview);
app.use(Loading);
app.use(store);
app.use(ElementPlus);
app.use(router)
// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$
app.mount('#app');

