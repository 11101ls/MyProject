<template>
  <div class="picture-box">
    <div class="box"
         :ref="getImgNodeBox"
         v-for="i in imgs"
         :key="i.id">
      <img :src="i.url"
           alt=""
           class="item">
    </div>
  </div>
  <!-- <el-image
      :url-list="url"
      :preview-src-list="srcList"
      :initial-index="4"
      fit="cover"
      lazy
    /> -->

</template>

<script setup lang='ts'>
import { reactive, toRefs, ref, onMounted, inject } from "vue";
const imgs = reactive([
  {
    id: 1,
    url: "https://hbimg.huabanimg.com/b4b85ec8015b032dd01cf581a1cda16e196e8217af07a-e2Osws_fw658/format/webp",
  },
  {
    id: 2,
    url: "https://hbimg.huabanimg.com/8f6c84fed11f315a4abcc7e0add2a85a01dfb944ce7eb-p8PYkK_fw658/format/webp",
  },
  {
    id: 3,
    url: "https://hbimg.huabanimg.com/56951b9e2b9525eaf92a343e7929ce12cdcdbe3c27666-x2eqVq_fw658/format/webp",
  },
  {
    id: 4,
    url: "https://hbimg.huabanimg.com/98cd1ad1607f2d1bfe84e1c57dde9c6718144754581fe-kv6HMv_fw658/format/webp",
  },
  {
    id: 5,
    url: "https://hbimg.huabanimg.com/ff4571c0dbb2951039dd3576332fdacc47fadbcdc235a-l16NQK_fw658/format/webp",
  },
  {
    id: 6,
    url: "https://hbimg.huabanimg.com/95d7deac5af9e5609f9b547b4eb88afa3eb57106f7ebc-Ekyr9V_fw658/format/webp",
  },
  {
    id: 7,
    url: "https://hbimg.huabanimg.com/2b6e25a7dbd6a737e58f2a7101d75992595a4fe3b1e2b-qwTLLm_fw658/format/webp",
  },
  {
    id: 8,
    url: "https://hbimg.huabanimg.com/98cd1ad1607f2d1bfe84e1c57dde9c6718144754581fe-kv6HMv_fw658/format/webp",
  },
  {
    id: 9,
    url: "https://hbimg.huabanimg.com/ff4571c0dbb2951039dd3576332fdacc47fadbcdc235a-l16NQK_fw658/format/webp",
  },
  {
    id: 10,
    url: "https://hbimg.huabanimg.com/95d7deac5af9e5609f9b547b4eb88afa3eb57106f7ebc-Ekyr9V_fw658/format/webp",
  },
  {
    id: 11,
    url: "https://hbimg.huabanimg.com/2b6e25a7dbd6a737e58f2a7101d75992595a4fe3b1e2b-qwTLLm_fw658/format/webp",
  },
  {
    id: 12,
    url: "https://hbimg.huabanimg.com/b4b85ec8015b032dd01cf581a1cda16e196e8217af07a-e2Osws_fw658/format/webp",
  },
  {
    id: 13,
    url: "https://hbimg.huabanimg.com/8f6c84fed11f315a4abcc7e0add2a85a01dfb944ce7eb-p8PYkK_fw658/format/webp",
  },
  {
    id: 14,
    url: "https://hbimg.huabanimg.com/56951b9e2b9525eaf92a343e7929ce12cdcdbe3c27666-x2eqVq_fw658/format/webp",
  },
]);
let imgNode = ref<any>([]);
let imgNodeBox = ref<any>([]);
const picViewList: any = inject("getViewList");
// const getImgNode = (el: any) => {
//   if (el) {



//   }
// };
const getImgNodeBox = (el: any) => {
  if (el) {
    imgNodeBox.value.push(el);
    // console.log(el);
  }
};
onMounted(() => {
  waterfallsFlow();
});
function waterfallsFlow() {
  imgNodeBox.value.map((item: any, index: number) => {
    // imgNode.value.push(item.getElementsByTagName("img")[0])
    let src = item.getElementsByTagName("img")[0].getAttribute("src");
    let image = new Image();
    image.src = src;
    let width = item.getElementsByTagName("img")[0].width;
    let offheight = item.getElementsByTagName("img")[0].height;
    image.onload = function () {
      let w = image.width;
      let h = image.height;

      let height = Math.round((h * width) / w);
      item.getElementsByTagName("img")[0].src = src;
      item.style.gridRowEnd = `span ${~~height}`;
      let boxHeight = height + 10;
      // console.log(offheight, h, height);
      item.style.height = `${boxHeight}px`;
    };
  });
  // console.log(imgNode);

  //  Array.from(imgNode.value).forEach(function (img: any, index: number) {
  //       console.log(img.getAttribute("src"),"====");

  //  })
}
//  function WaterfallsFlow() {

//   Array.from(imgNode.value).forEach(function (img: any, index: number) {
//     let src = img.getAttribute("src");
//     let image = new Image();
//     image.src = src;
//     let width = img.width;
//     image.onload = function () {
//       let w = image.width;
//       let h = image.height;
//       let height = Math.round((h * width) / w);
//       img.src = src;
//       img.style.gridRowEnd = `span ${~~height}`;
//     };
//   });
// }
function handleIsShowPic(id: number) {
  picViewList(imgs, id);
}
//
function getViewList(allList: any, index: any) {
  let arr: any[] = [];
  let i = 0;
  allList.map((item: { url: any }) => {
    arr.push(item.url);
  });
  // for (i; i < allList.length; i++) {
  //   // console.log(allList[i].url);

  //     arr.push(allList[i].url)
  //     if (i + index >= allList.length - 1) {
  //       index = 0 - (i + 1)
  //     }
  // }
  return arr;
}
function closeViewer() {
  // isShowPicView.value=false
}
window.addEventListener("resize", (event) => {
  waterfallsFlow();
})
</script>

<style scoped lang='scss'>
.picture-box {
  min-width: 1024px;
  display: grid;

  grid-template-columns: repeat(3, 1fr); // 分为3列
  // grid-gap: 5px;
  // grid-auto-flow: row dense;
  column-gap: 2px;
  .box {
    // border-radius: 15px;
    border: 5px solid hsla(0, 0%, 100%, 0.5);
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgb(26 26 26 / 10%);
    position: relative;
    transition: all 2s ease;
    padding: 0;

    .item {
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
      height: auto;
      transition: all 3s ease;
      filter: grayscale(100%);
    }
    img {
      display: block;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 0%;
      opacity: 0;
      transition: all 2s ease;
     
    }

    &::before {
      top: -6px;
      left: -6px;
      border-top: 2px solid $bc-peonyPink;
      border-left: 2px solid $bc-peonyPink;
     
    }

    &::after {
      right: -5px;
      bottom: -5px;
      border-bottom: 2px solid $bc-peonyPink;
      border-right: 2px solid $bc-peonyPink;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      width: calc(100% + 9px);
      height: calc(100% + 9px);
      
    }
    &:hover .item {
      // border-color: #bf3;
      filter: grayscale(0);
    }
  }
}
</style>