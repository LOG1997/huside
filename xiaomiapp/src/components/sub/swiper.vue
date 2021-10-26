<template>
  <div class="swiper-container">
    <div class="sitebar">
      <ul class="sitebar-ul">
        <li
          v-for="(item, index) in sitebarlist"
          :key="index"
          @mouseover="showSitebarProduct(item.text)"
          class="sitebar-li"
        >
          <span class="sitebar-span">{{ item.text }}</span>
          <span class="sitebar-span">></span>
        </li>
      </ul>
      <div class="sitebar-children-list" :style="{ width: wid }">
        <ul :style="{ width: wid }" class="sitebar-children-list-ul">
          <li v-for="(item, index) in showSitebarProductlist" :key="index">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in swiperlist"
        :key="index"
      >
        <img :src="item.imgUrl" alt="" 
        @click="toGoods(index)"/>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import dataBase from "../../../static/mock/data.js";
export default {
  name: "Swipers",
  components: {},
  props: [],
  data() {
    return {
      showSitebarProductlist: [],
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
    productlist() {
      return dataBase.productList;
    },
    swiperlist() {
      return dataBase.swiperlist;
    },
    sitebarlist() {
      return dataBase.sitebar;
    },
  },
  watch: {},
  computed: {
    getToken() {
      return this.$store.getters.getterToken;
    },
    topbar() {
      return dataBase.header;
    },
    productlist() {
      return dataBase.productList;
    },
    swiperlist() {
      return dataBase.swiperlist;
    },
    sitebarlist() {
      return dataBase.sitebar;
    },
  },
  methods: {
    showSitebarProduct(text) {
      var showSitebarlist = new Array();
      showSitebarlist = this.sitebarlist.find((item) => item.text === text);
      this.showSitebarProductlist = showSitebarlist.product;
      if (this.showSitebarProductlist) {
        this.wid =
          256.5 * Math.ceil(this.showSitebarProductlist.length / 6) + "px";
      } else {
        this.wid = 0;
      }
      console.log(this.showSitebarProductlist);
      console.log("wid", this.wid);
    },
    toLogin() {
      this.$router.push("/login");
    },
    toGoods(val) {
      var toto = this.swiperlist[val].toUrl;
      console.log(toto);
      this.$router.push("mix4");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.swiper-container {
  width: 1226px;
  z-index: 1;
  display: flex;
  border-radius: 40px;
  margin: 0 auto;
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
.sitebar {
  position: absolute;
  z-index: 20;
  color: #000;
  width: 200px;
  height: 460px;
  background: rgb(66, 66, 66, 0.3);
  border-top-left-radius: 40px;
}
.sitebar-ul {
  width: 200px;
  height: 460px;
  color: #fff;
  border-top-left-radius: 40px;
}
.sitebar-li {
  height: 46px;
}
.sitebar-li:nth-child(1) {
  border-top-left-radius: 40px;
}
.sitebar-span {
  line-height: 46px;
  padding-left: 30px;
}
.sitebar-span:nth-child(2) {
  float: right;
  padding-right: 20px;
}
.sitebar-li:hover {
  background: #ff6a00;
}
.sitebar-li:hover {
  background: #ff6a00;
}

.sitebar-children-list {
  position: absolute;
  height: 460px;
  background: #ffffff;
  margin: -460px 0 0 200px;
  display: inline-block;
  display: inline;
  visibility: hidden;
}
.sitebar-children-list ul {
  height: 460px;
  color: #000;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  display: inline-block;
  visibility: hidden;
}
.sitebar-children-list ul li {
  height: 76.667px;
  width: 256.5px;
  line-height: 76.667px;
  border-top-left-radius: 40px;
  text-align: center;
  display: inline-block;
  color: #000;
  visibility: hidden;
}
.sitebar-children-list ul li span {
  line-height: 76.667px;
  visibility: hidden;
}
.sitebar:hover .sitebar-children-list {
  visibility: visible;
  background: #ffffff;
  opacity: 0.9;
  border-top-left-radius: 0;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 0;
}
.sitebar:hover .sitebar-children-list ul {
  visibility: visible;
}
.sitebar:hover .sitebar-children-list ul li {
  visibility: visible;
}
.sitebar:hover .sitebar-children-list ul li span {
  visibility: visible;
}

.sitebar-children-list ul li:hover {
  height: 76.667px;
  width: 256.5px;
  background: none;
  color: #ff6a00;
  cursor: pointer;
}
</style>