<template>
  <div class="translucent-borders">
    <input type="checkbox" id="pb" v-model="isBorder" @change="handChange">
     <label for="pb">半透明边框</label>
    <div class="content" :class=" {'is-border': isBoolean}">五彩云间鹊，飞鸣天上来</div>
  </div>
</template>

<script setup lang='ts'>
import { ref,toRefs } from 'vue'
let isBoolean=ref(false) 
let isBorder=isBoolean.value
const handChange=()=>{
    isBoolean.value=!isBoolean.value 
    isBorder=isBoolean.value 
    console.log(isBorder);
    
}


</script>
<style scoped lang='scss'>
.translucent-borders{
  padding: 20px;
  .content{
    padding: 12px;
    margin: 20px auto;
    background: white;
    border: 10px solid hsla(0, 0%, 100%, .5);
  }
  .is-border{
    background-clip: padding-box;
  }
}
</style>
