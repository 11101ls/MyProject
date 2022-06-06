<!--
 * @Author: ls
 * @Date: 2022-05-26 16:59:50
 * @LastEditors: ls
 * @LastEditTime: 2022-05-30 18:04:14
 * @Description: markdown 文档样式
-->
<template>
  <div class="mykit-preview">
    <section>
      <slot></slot>
    </section>

    <div class="source-code">
      <pre class="language-html"><el-button link @click="copyCode" class="copy-code" type="primary">复制代码</el-button><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>

  </div>
</template>

<script setup lang='ts'>
import Prism from 'prismjs';
import { ref,computed,onMounted,nextTick} from 'vue'
import useClipboard from "vue-clipboard3";
import { ElMessage } from 'element-plus'
interface Props{
   /** 组件名称 */
  compName:string,
    /** 要显示代码的组件 */
  demoName:string
}
const isDev = import.meta.env.MODE === 'development';
const props=withDefaults(defineProps<Props>(),{
    compName:'',
    demoName:''
})
let sourceCode=ref('');

const previewSourceCode=computed(()=>sourceCode.value.replace(/'\.\.\/\.\.\/index'/g, `'@tencent/my-kit'`))
onMounted(async ()=>{
   if (props.compName && props.demoName) {
      if (isDev) {
        let url=props.compName=='introduction'?`../../views/demo/cssDemo/components/introduction/components/IntroductionPage.vue?raw`:`../../views/demo/cssDemo/packages/${props.compName}/docs/${props.demoName}.vue?raw`;
        sourceCode.value = (
          await import(/* @vite-ignore */ `${url}`)).default;
      } else {
        sourceCode.value = await fetch(`../../views/demo/cssDemo`).then((res) => res.text());
      }
    }
    await nextTick();
    Prism.highlightAll();

})
const {toClipboard}=useClipboard()
const copyCode=async ()=>{
    try {
      
      await toClipboard(sourceCode.value)
      ElMessage.success('复制成功');
      
    } catch (error) {
      console.log(error);
    }
}
 
</script>

<style lang="scss">

pre {
  line-height: 0;
}
.mykit-preview {
  
  border: 4px;
  border: 1px dashed #e7e7e7;
  padding: 20px;
  border-bottom: 1px dashed #e7e7e7;
  section {
    margin: 10px 20px;
    background: rgba($color:$pink-avenderr, $alpha:.2)
  }
}
.source-code {
  padding: 20px;
.language-html {
  margin: 0;
  padding: 0;
  position: relative;

.copy-code{
  position: absolute;
  right: 20px;

}}
}
.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
}
</style>