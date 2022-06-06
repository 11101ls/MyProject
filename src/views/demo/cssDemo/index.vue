<!--
 * @Author: ls
 * @Date: 2022-03-25 15:06:01
 * @LastEditors: ls
 * @LastEditTime: 2022-05-31 16:06:08
 * @Description: 请填写简介
-->
<template>
  <div class="css-demo">
    <el-scrollbar class="list aside" ref="bodyBox" >
      <title-list></title-list>
    </el-scrollbar>
    <el-scrollbar class="list main" ref="bodyBox" >
        <router-view></router-view>
    </el-scrollbar>
   </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref ,defineAsyncComponent} from 'vue';
const TitleList=defineAsyncComponent(()=>import('./title-list/index.vue'))
</script>

<style scoped lang='scss'>
.css-demo {
  min-width: 1024px;
  display: flex;
  min-height: 80vh;
  padding: 20px 0 0 0;
 
  .aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid $br-weak;
  }
  .main {
    min-width: 500px;
    width: 70%;
    // flex: 1;
    margin: 0 auto;
    // ju
    padding: 15px 20px;
  }
}

.list{
   height: 70vh !important;
}
// .book_box {
//   padding: 20px 50%;
//   background-color: rgba($color: #bf3, $alpha: 0.6);
//   &-book {
//     margin-right: 0;
//     background-color: wheat;
//     height: 700px;
//     // perspective: 1000px;
//     width: 450px;
//     &-paper {
//       width: 450px;
//       height: 700px;
//       position: relative;
//       transform-style: preserve-3d;
//       transition: all 1s ease-in-out;
//       transform-origin: left center;
//       .page {
//         position: absolute;
//         left: 0px;
//         right: 0px;
//         bottom: 0px;
//         top: 0px;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         justify-content: center;
//         font-size: 40px;
//         color: #fff;
//         backface-visibility:hidden;
//         display: flex;
//         flex-direction: column;
//       }
//       .page.front {
//         background: rgb(0, 177, 150);
//       }
//       .page.back {
//         background: rgb(154, 155, 154);
//         transform: rotateY(180deg);
//       }
//     }
//     &:hover &-paper {
//       transform: rotateY(-180deg);
//     }
//   }
// }
</style>