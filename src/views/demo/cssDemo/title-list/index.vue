
<template>
  <div class="box">
    <h4>引言</h4>
    <div class="title">
      <router-link :to="'introduction'">声明</router-link>
    </div>
  </div>
  <div class="box"
       v-for="(item ,index) in TitleList"
       :key="index">
    <h4>{{item}}</h4>
    <div class="title">
      <router-link v-for="(link,index) in datalist(item)"
                   :to="link.path"
                   :key="index">{{link.name}}</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref, computed } from "vue";
import data from "@views/demo/cssDemo/packages/list.json";
const TitleList = Object.keys(data);

const datalist = (name:string) => {
  return data[name].map((item:any) => ({
    path: `${item.compName}`,
    name: item.compZhName,
  }));
};


</script>

<style scoped lang='scss'>
.box {
  padding: 10px 10px 0 10px;
  .title {
    color: $color-deep;
    display: flex;
    padding: 10px 0 0 30px;
    flex-direction: column;
    & > * {
      margin-bottom: 20px;
    }
    a:hover {
      color: $baby-blue-eyes;
    }
  }
}
</style>