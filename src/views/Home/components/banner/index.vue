<template>
    <div class="carousel">
      <el-carousel trigger="click" height="500px"  :interval="5000" ref="carousel" @change="updateCar">
      <el-carousel-item v-for="item in bannerArry" :key="item.id" >
       <img :src=item.url alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
    
</template>

<script setup lang='ts'>
import { reactive, toRefs,ref} from 'vue'
const bannerArry=[
{
  id:1,
  url:"https://hbimg.huabanimg.com/05453c879fb6e8a2751dedfcd38b9cad33148d876d6e6-U9fGnX_fw658/format/webp"
},{
  id:2,
  url:"https://hbimg.huabanimg.com/42f3fbfcb70c48941fddc3e6624bf82d843f1200dce9f-O6aIry_fw658/format/webp"
},{
  id:3,
  url:"https://hbimg.huabanimg.com/7da0b00c5752e33dccfa0cc41ac90b30afacc43e58dca-S0StoF_fw658/format/webp"

},{
  id:4,
  url:"https://hbimg.huabanimg.com/776f2ab07f9ddf76e3082cf17ade36eb71af9126642ad-BQEg8E_fw658/format/webp"
}
]
function updateCar() {
  
}
</script>

<style scoped lang='scss'>
.carousel {

  position: relative;
  margin: 16px;
  padding:10px;
  border-radius: 10px;
  border: 3px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
   img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    transition: all 0.4s ease;
  }
  .el-carousel--horizontal {
    // height: 100%;
    overflow: hidden;
  }

  // 切换效果
   .el-carousel__container .is-animating {
    animation: carousel-out 1s ease-in-out;
    & button {
      animation: none;
    }
  }
   .el-carousel__container .is-active {
    animation: carousel-in 1s ease-in-out;
    & button {
      animation: none;
    }
  }
  // 左右指示器
  ::v-deep(.el-carousel__arrow--left) {

    
    border-radius: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 0px 50px 50px;
    border-color: transparent  transparent transparent rgba(255, 255, 255, 0.7);
    background: transparent;
  }
  ::v-deep(.el-carousel__arrow--right){
    width: 0;
    height: 0;
    border-radius: 0;
    right: 0;
    border-top: 50px solid transparent;
    border-right: 50px solid rgba(255, 255, 255, 0.7);
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
    background: transparent;
    
  }
  ::v-deep(.el-carousel__arrow) .el-icon-arrow-left,
  ::v-deep(.el-carousel__arrow) .el-icon-arrow-right {
    display: none;
  }
  ::v-deep(.el-carousel__arrow){
     & .el-icon{
      opacity: 0 ;
    }
  }
}
//  ::v-deep(.el-carousel__container){
//   height: 300px !important;
// }
@keyframes carousel-out {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-300px) scale(1.5);
  }
}
@keyframes carousel-in {
  0% {
    opacity: 0;
    transform: translateX(300px) scale(1.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
// .el-carousel__item  {
//     height: auto;
// }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
