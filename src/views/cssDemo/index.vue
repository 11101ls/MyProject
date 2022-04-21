<template>
  <div class="cssDome">
    cssDemo
    <CssTricks></CssTricks>
    <!-- <div class="book_box">
      <div class="book_box-book">
        <div class="book_box-book-paper">
          <div class="page front">
            <img src="@assets/imgs/wq/wq1.jpg" alt="">
            <label>阿巴阿巴</label>
          </div>
          <div class="page back">
            <label>back</label>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref ,defineAsyncComponent} from 'vue';
const CssTricks=defineAsyncComponent(()=>import('./componets/cssTricks/index.vue'))
</script>

<style scoped lang='scss'>
.cssDome{
min-width: 1024px;
}
.book_box {
  padding: 20px 50%;
  background-color: rgba($color: #bf3, $alpha: 0.6);
  &-book {
    margin-right: 0;
    background-color: wheat;
    height: 700px;
    // perspective: 1000px;
    width: 450px;
    &-paper {
      width: 450px;
      height: 700px;
      position: relative;
      transform-style: preserve-3d;
      transition: all 1s ease-in-out;
      transform-origin: left center;
      .page {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: #fff;
        backface-visibility:hidden;
        display: flex;
        flex-direction: column;
      }
      .page.front {
        background: rgb(0, 177, 150);
      }
      .page.back {
        background: rgb(154, 155, 154);
        transform: rotateY(180deg);
      }
    }
    &:hover &-paper {
      transform: rotateY(-180deg);
    }
  }
}
</style>