<template>
  <div class="css-tricks">
        <div class="css-tricks_nav">123</div>
        <div class="css-tricks_content">
123
        </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs,ref} from 'vue'
const titles=reactive([
  {
    
  }
])

</script>

<style scoped lang='scss'>
.css-tricks{
  width: auto;
  display: flex;
  align-items: flex-start;
  .css-tricks_nav{
    width: 300px;
    flex: 0 0 auto;
    background-color: #bf3;

  }
  .css-tricks_content{
    flex: 1;
    background-color: crimson;
  }
}

</style>