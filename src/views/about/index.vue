<template>
  <div>about</div>
</template>

<script setup lang='ts'>
import { reactive, toRefs,ref} from 'ue'
import {getData,login} from '@/api/modules/test1.ts'

console.log(import.meta.env,"00");
getData().then((result) => {
  console.log(result.data,"res");
  
}).catch((err) => {
  
})
login().then((result) => {
  console.log(result,"loagin");
  
}).catch((err) => {
  
});


</script>

<style scoped lang='scss'>
</style>