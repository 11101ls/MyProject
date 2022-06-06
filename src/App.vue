<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TabBar from "@components/TabBar/index.vue";

import type { ElScrollbar } from "element-plus";
import { ref, reactive, provide, toRaw } from "vue";

const bodyBox = ref<InstanceType<typeof ElScrollbar>>();
let isShowPicView = ref(false);
let isShowPicViewIndex = ref(0);
let isShowPicViewList: string[] = [];
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
function logScr() {}

function scrollTop() {
  bodyBox.value!.setScrollTop(0);
}
// 瀑布流
function getViewList(allList: any, index: any) {
  let arr = toRaw(allList);
  arr.map((item: { url: string }) => {
    isShowPicViewList.push(item.url);
  });
  isShowPicViewIndex.value = index - 1;
  isShowPicView.value = true;
  arr = [];
}

function closeViewer() {
  isShowPicView.value = false;
  isShowPicViewList = [];
}
provide("getViewList", getViewList);
</script>

<template>
  <el-scrollbar class="list"
                ref="bodyBox">

    <TabBar class="animated fadeIn animate__slower"
            @scrollTop=" scrollTop "></TabBar>
    <router-view v-slot="{ Component }">
      <transition enter-active-class="animated fadeIn animate__slower">
        <component :is="Component" />
      </transition>
    </router-view>
    <div class="animated fadeIn animate__slower">
      <el-image-viewer v-if="isShowPicView"
                       :initial-index="isShowPicViewIndex"
                       @close="closeViewer"
                       :url-list="isShowPicViewList"
                       :zIndex="2000"
                       :teleported="true" />
    </div>

    <!-- ref="docbox" -->
    <!--  -->
    <!-- <TabBar class="animated fadeIn" @scrollTop=" scrollTop "></TabBar> -->

    <!-- <router-view class="animated fadeIn" /> -->
    <!-- tr
    <component :is=" Component " ></component>-->
    <!-- </router-view> -->

    <!-- <div class="mask fadeOut"></div> -->
    <!-- v-show="!isShow" -->
    <!--  -->
    <!-- <el-button @click="showLoading">11111</el-button> -->
    <!-- {{$filters.format("1111")}}
    {{$env}} -->
  </el-scrollbar>
</template>

<style lang="scss">
#app {
  height: calc(100vh) !important;
  overflow: hidden;
}
/*展示列表的区域，超过200px出现滚动条*/

.mask {
  position: absolute;
  height: calc(100vh - 50px);
  background: #fff;
}
// 滚动条高度
.list {
  height: 100vh !important;
}
.el-image-viewer__next {
  width: 0 !important;
  height: 0 !important;
  border-style: solid;
  border-width: 80px 80px 80px 0;
  border-color: transparent rgba(255, 255, 255, 0.7) transparent transparent !important;
  background: transparent !important;
  border-radius: 0 !important;
  .el-icon {
    opacity: 0;
  }
}
.el-image-viewer__prev {
  width: 0 !important;
  height: 0 !important;
  border-style: solid;
  border-width: 80px 0 80px 80px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.7) !important;
  background: transparent !important;
  border-radius: 0 !important;
  .el-icon {
    opacity: 0;
  }
}
</style>
