<template>
  <div class="header">
    <div class="header-logo">
      <router-link :to=" { name: 'home' } " class="logo">
        <span title="点击返回主页">返回</span>
      </router-link>
    </div>
    <div class="header-navbutton">
      <ul class="header-navbutton-barlist">
        <li
          v-for="(  item, index  ) in   routerLinkList  "
          :key=" index "
          :class=" { 'li-actived': activedIndex === index } "
          @click=" toRouter( item.pathName, item.index, item.isList ) "
        >
          <DropDown
            v-if=" item.isList "
            :title=" item.title "
            :list=" item.list "
            @ghIndex=" ghIndex "
          />
          <span v-else>{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { ref,reactive,watch } from 'vue'
import { useRouter,onBeforeRouteUpdate, useRoute } from 'vue-router';
import DropDown from './components/DropDown.vue'
const router=useRouter()
const useRouterCurrent=reactive(useRoute())
let id=ref(123)
let activedIndex=ref(0)
let routerLinkList=reactive( [
        {
          index: 0,
          pathName: 'home',
          title: '首页',
          isList: false
        },
        { index: 1, pathName: "about", title: "iii", isList: false },
        {
          index: 2,
          pathName: "colorCollection",
          title: "阿巴巴color",
          isList: false,
        },
        {
          index: 3,
          pathName: "resource",
          title: "资源",
          isList: true,
          list: [
            {
              index: 1,
              pathName: "addReimbursement",
              title: "学习",
            },
            {
              index: 2,
              pathName: "picture",
              title: "图片",
            },
          ],
        },
        {
          index: 4,
          pathName: "",
          title: "Demo",
          isList: true,
           list: [
            {
              index: 1,
              pathName: "demo-cssDemo",
              title: "css",
            },
            {
              index: 2,
              pathName: "demo-canvas",
              title: "canvas",
            },
          ],
        },
        {
          index: 5,
          pathName: "threejs",
          title: "w'w'w'w'w",
          isList: false,
        },
      ])
const emit=defineEmits<{(e:"scrollTop"):void}>()
function toRouter ( name: string, index: number, bom: boolean ) {
      // console.log( name, "name" );
      activedIndex.value = index
      if ( !bom ) {
        router.push( { name } )
      }
    }
function ghIndex () {
      // alert("-------dsjoadijs ")
    }
watch(useRouterCurrent,to=>{
    // console.log(to.meta,"================");
    activedIndex.value=<number>to.meta.index 
    emit("scrollTop")
})
</script>

<style lang="scss">

.header {
  min-width: 1024px;
  height: 70px;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  z-index: 700;
  background-color:rgba($color: #fff, $alpha: .6);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  // margin-bottom: 20px;
  &-navbutton {
    display: grid;
    text-align: center;
    // grid-template-columns: repeat(6,1fr)
    &-barlist {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      align-content: center;
      cursor: pointer;
      & > li:hover {
        color: $nadeshiko-pink !important;
      }
      // &_el-dropdown {
      //   color: inherit !important;
      //   font-size: inherit !important;
      //   &:hover {
      //     color: $color-purple !important;
      //   }
      // }
    }
  }
  &-logo {
    display: grid;
    align-content: center;
    justify-content: center;
    .router-link {
      color: inherit;
    }
  }
  .li-actived {
    color: $nadeshiko-pink !important;
  //  .el-dropdown-link {
  //     color: $color-purple !important;
  //   }
  }
   
}
</style>