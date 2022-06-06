<script setup>
import demo from './demo.vue'
import MultipleBorders from './MultipleBorders.vue'
</script>


# 半透明边框
  默认情况下，背景的颜色会延伸至边框下层，这意味设置的透明边框效果会被覆盖掉，在css3中,可以通过设置<span class="primary-text">background-clip:padding-box</span>
  来改变背景的默认行为，达到想要的效果。
<Preview comp-name="translucent-borders" demo-name="demo">
  <demo />
</Preview>


# 多重边框
  <span class="primary-text"> box-show</span> 除了可以添加阴影效果外，可以接收第四个参数作为扩张半径，
  <span class="primary-text"> box-show</span>只能模拟实现边框效果，类似虚线效果时，可以通过<span class="primary-text"> outline-offset</span>来实现
 
  <Preview comp-name="translucent-borders" demo-name="MultipleBorders">
  <MultipleBorders />
</Preview>