<template>
    <div class="swiper-container">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperlist" :key="index">
          <img :src="item.imgUrl" alt="" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- soasoapo -->
    </div>
</template>

<script>
import dataBase from "../../../static/mock/data.js";
export default {
name:'Swipers',
  components: {},
  props: [],
  data() {
    return {
      wid: 0,
      swiperOption: {
        autoplay: true, //自动播放
        loop: true, //轮询
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        keyboard: true,
        //前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  watch: {},
  computed: {

    swiperlist() {
      return dataBase.swiperlist;
    },
  },
  watch: {},
  
  methods: {
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.swiper-container {
  width: 1226px;
  z-index: 1;
  display: flex;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
}
.swiper-container img {
  display: block;
  width: 100%;
  height: 100%;
}
.swiper-button-prev {
  margin-left: 200px;
  width: 50px;
  height: 80px;
  background: black;
  border-radius: 10px;
  opacity: 0.5;
}
.swiper-button-next {
  width: 50px;
  height: 80px;
  background: black;
  opacity: 0.5;
  border-radius: 10px;
}
</style>