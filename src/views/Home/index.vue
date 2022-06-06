<template> 
  <div class="home">
    
    <div class="banner">
    
      <BannerHome></BannerHome>
    </div>
      {{111111}}
    <div class="left bg-red">
        {{111112}}
    </div>
      {{111113}}
    <div class="content_box">
  {{111114}}
    </div>
    
    <!-- {{$filters.format("00000")}} -->
      {{Test.current}}{{Test.name}}
     <el-button @click="changePiniaOne">changePiniaOne</el-button>
       <!-- {{abx.a}}aaa -->
    <el-button @click="showLoading">1111</el-button>
    {{Test.user}}
    {{Test.userChange}}
    "Test.newName"{{Test.newName}}
    <el-button @click="changePiniaUser">changePiniaUser</el-button>
    <div class="borderBox">

    </div>
    12321
  </div>
</template>

<script setup lang="ts">
import BannerHome from './components/banner/index.vue'
import {  getCurrentInstance,ComponentInternalInstance} from 'vue'//引入定义的插件
import {useTestStore} from '../../store/index'
// import {useTestStore} from 'store/index'
// import {abx} from '@utils'
import { storeToRefs } from 'pinia';

const {appContext}=getCurrentInstance() as ComponentInternalInstance 
const Test=useTestStore()
const showLoading=()=>{
    appContext.config.globalProperties.$loadingShow();
    setTimeout(() => {
       appContext.config.globalProperties.$unLoadingShow();
    }, 5000);
}
// Focus 解构出来的值不是响应式数据
// const {current,name}=Test
// 包裹storeToRefs 使值具有响应式
//  const {current,name}=storeToRefs(Test)
// Focus  修改state中的值时  触发 $subscribe
Test.$subscribe((args: any,state: any)=>{
console.log(args,state,"----------");

})
// Focus  调用actions的方法触发 
Test.$onAction((args:any)=>{
    console.log(args);
    args.after(()=>{
      console.log("1111");
      
    })
})
const changePiniaOne=()=>{
   /* 1.
    Test.current++;
    Test.name+="!@" */
    /* 2.
    Test.$patch({
      current:990,
      name:"sbwq"
    }) */
    /* 3.
    Test.$patch((state: { current: number; name: string; })=>{
          state.current=2229;
          state.name="sbwq!!~~~"
    }) */
    /* 4.必须修改对象的所有属性
     Test.$state={
      current:222,
      name:"uifhsai "
    } */
    Test.setCurrent("aaa~~") //调用actions的方法 
}
const changePiniaUser=()=>{
  Test.setUser()
  Test.changeUsers()
}

</script>

<style scoped lang="scss">
// $borderColor:#bf3;
.home{
  min-width: 1024px;
  height: auto;
  // height: 1000PX;
  // .banner{
  //     height: 500px;
  // }
}



   .left {
    width: 10px;
    height: 10px;
    border-top: 50px solid transparent;
    border-left: 50px solid rgba(255, 255, 255, 0.9);
    border-bottom: 50px solid transparent;
    border-right: 50px solid transparent;
    background: transparent;
    border-radius: 0;
    left: 0;
  }
  .content_box{
    padding: 50px;
    background-color: #BF3;
  }
  .borderBox{
    margin: 10px auto;
    height: 200px;
    width: 300px;
     position: relative;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        opacity: 0;
         transition: all 1s ease;
    }
    
    &::before {
        top: -5px;
        left: -5px;
        border-top: 1px solid $bc-peonyPink;
        border-left: 1px solid $bc-peonyPink;
    }
    
    &::after {
        
        right: -5px;
        bottom: -5px;
        border-bottom: 1px solid $bc-peonyPink;
        border-right: 1px solid $bc-peonyPink;
    }
    
    &:hover::before,
    &:hover::after {
        opacity: 1;
        width: calc(100% + 9px);
        height: calc(100% + 9px);
    }
  }
</style>