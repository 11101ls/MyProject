import { createVNode, render, VNode, App, VNodeProps } from 'vue';
import Loading from './index.vue';

// export default {
//   install(app: App,options: ({ [x: string]: unknown; } & VNodeProps) | null | undefined) {
//     //createVNode vue提供的底层方法 可以给我们组件创建一个虚拟DOM 也就是Vnode
//     const vnode: VNode = createVNode(Loading,options);
//     //render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
//     render(vnode, document.body);
//     // Vue 提供的全局配置 可以自定义
//     app.config.globalProperties.$loading = {
//       show: () => vnode.component?.exposed?.show(),
//       hide: () => vnode.component?.exposed?.hide()
//     };

//   }
// };
const vnode: VNode = createVNode(Loading);
render(vnode, document.body);
// const fn = {
//   ,
//   hide: () => vnode.component?.exposed?.hide(),
//   ssh: () => {
//     console.log("ssh---------------");
//   }
// }
const loading = {
  install(app:App){
    
    //3、定义全局
    app.config.globalProperties.$loadingShow =()=> {
       vnode.component?.exposed?.show()
    }
    app.config.globalProperties.$unLoadingShow=()=>{
       vnode.component?.exposed?.hide()
    }
    

    
      
  }
};

export default loading;
