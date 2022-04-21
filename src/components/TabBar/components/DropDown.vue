<template>
  <el-dropdown class="tabbar_el-dropdown">
      <span class="el-dropdown-link">
      {{ title }}
      
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
    <template #dropdown>
      <el-dropdown-menu>
       <el-dropdown-item
        v-for="(  item, index  ) in   list  "
        :key=" index "
        :class=" { 'li-actived': activedIndex === index } "
        @click=" toRouter( item.pathName, item.index, item.quit ) "
      >
        <span>{{ item.title }}</span>
      </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
import { reactive, toRefs,ref} from 'vue'
import { useRouter } from 'vue-router';
defineProps<{title:string,list:any}>()
const emit=defineEmits<{(e:"ghIndex",index:number,quit:boolean):void}>()
let activedIndex=ref(null)
const router=useRouter()
function toRouter ( name:string, index: any, quit = false ) {
      emit( "ghIndex", index, quit );
      console.log(name,"-----name");
      
      activedIndex = index;
      router.push( { name } );
    }
</script>

<style scoped lang='scss'>
.tabbar_el-dropdown {
  color: inherit !important;
  font: inherit !important;
  .el-dropdown-link{
    display: flex;
  }
  .li-actived {
    color: $color-purple !important;
  }
}
</style>