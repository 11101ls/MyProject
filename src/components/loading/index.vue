/* 自定义的全局loading */
<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">
        Loading<span class="dot" >...</span>
        </div>
    </div>
    
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
const isShow = ref(false)//定位loading 的开关
 
const show = () => {
    isShow.value = true
}
const hide = () => {
    isShow.value = false
}
//对外暴露 当前组件的属性和方法
defineExpose({
    isShow,
    show,
    hide
})
</script>
 
 
    
<style scoped lang="scss">
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    &-content {
        font-size: 30px;
        color: #fff;
    }
}
.dot{
  display: inline-block;
  height: 1em;
  line-height: 1;
  vertical-align: -.25em;
  overflow: hidden;
}

.dot::before{
  display: block;
  content: '...\A..\A.';
  white-space: pre-wrap;
  animation: dot 3s infinite step-start both;
}
@keyframes dot {
  33%{
    transform: translateY(-2em);
  }
  66%{
    transform: translateY(-1em);
  }
}
</style>