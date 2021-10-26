<template>
  <div class="container">
    <div class="black-header">
      <div class="topbar-nav">
        <ul class="topbar-nav-ul">
          <li v-for="(item, index) in topbar" :key="index">
            <a>{{ item.text }}</a>
            <span class="sep">|</span>
          </li>
        </ul>
        <ul class="top-right">
          <li class="login" v-show="!getToken">
            <span @click="toLogin">登录</span>
            <span>|</span>
          </li>
          <li class="register" v-show="!getToken">
            <span @click="toRegister">注册</span>
            <span>|</span>
          </li>
          <li class="username" v-show="getToken">
            <span>用户:{{ this.$store.state.username }}</span>
            <span>|</span>
            <div class="logout" @click="logout">
              <span class="logoutClick">退出</span>
            </div>
          </li>
          <li class="message-need">
            <span>消息通知</span>
            <span>|</span>
          </li>
          <li class="cart">
            <svg-icon
              iconname="icon-gouwucheman"
              class="icon-gouwucheman"
            ></svg-icon>
            <span>购物车</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-header">
      <div class="site-header-nav">
        <div class="nav-icon" @click="toHome">
          <svg-icon
            class="icon-xiaomiguishu"
            iconname="icon-icon-xiaomiguishu"
          ></svg-icon>
        </div>
        <div class="nav-list">
          <ul class="product-list">
            <li class="product-item">
              <span>全部商品分类</span>
            </li>
            <li
              v-for="(item, index) in productlist"
              :key="index"
              class="product-item"
              @mouseover="showProduct(item.text)"
            >
              <span>{{ item.text }}</span>
              <div class="detail-children">
                <div class="detail-list">
                  <ul>
                    <li v-for="(item, index) in showPro" :key="index">
                      <img :src="item.imgUrl" alt="" />
                      <p class="detail-name">{{ item.name }}</p>
                      <p class="detail-price">{{ item.price }}元起</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="输入商品名字" />
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import dataBase from "../../static/mock/data.js";
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {
      showPro: [],
    };
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
  },
  methods: {
    showProduct(text) {
      var showsome = new Array();
      showsome = this.productlist.find((item) => item.text === text);
      this.showPro = showsome.product;
      console.log(this.showPro);
    },
    toLogin() {
      this.$router.push("/login");
      
    },
    toRegister() {
      this.$router.push("/register");
    },
    logout() {
      this.$store.commit("LOGOUT");
      console.log("周四哎", this.getToken);
    },
    toHome() {
      this.$router.push("/");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.black-header {
  height: 40px;
  background: #333333;
  width: 100%;
}
.topbar-nav {
  width: 1226px;
  margin: 0 auto;
  display: flex;
}
.topbar-nav ul li {
  color: #b0b0b0;
  display: inline-block;
  font-size: 12px;
  line-height: 40px;
  cursor: default;
}
.topbar-nav ul li:hover {
  color: #fff;
}
.sep {
  margin: 0 3.6px 0 3.6px;
  color: #494e55;
}
.topbar-nav-ul {
  width: 826px;
}
.topbar-nav ul li:last-child .sep {
  visibility: hidden;
}
.top-right {
  display: inline-block;
  width: 400px;
  right: 0;
  text-align: right;
}
.site-header {
  width: 100%;
  height: 100px;
  background: white;
  border-bottom: 1px solid rgb(117, 113, 113);
}
.site-header-nav {
  width: 1226px;
  height: 100px;
  margin: 0 auto;
  display: flex;
}
.nav-icon {
  height: 100px;
  width: 56px;
}
.icon-xiaomiguishu {
  width: 56px;
  height: 56px;
  margin-top: 22px;
}
.nav-list {
  width: auto;
}
.product-list {
  padding: 0 0 0 50px;
  width: 800px;
  height: 100px;
}
.product-item {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  padding: 0 10px 0 10px;
  cursor: default;
  line-height: 100px;
}
.search {
  height: 100px;
  width: 320px;
  display: flex;
  justify-content: flex-end;
}
.search input {
  margin-top: 25px;
  height: 50px;
  width: 245px;
}
.icon-search {
  width: 50px;
  height: 50px;
  border: 1px solid #333;
  margin-top: 22px;
}
.product-item:hover {
  color: #ff6a00;
}
.detail-children {
  width: 100%;
  height: 0px;
  background-color: #ffffff;
  position: absolute;
  border-top: 3px solid rgb(189, 17, 17);
  visibility: hidden;
  left: 0;
  transition: 0.5s all;
  z-index: 7;
}
.product-item:nth-child(-n + 9):hover .detail-children {
  height: 200px;
  visibility: visible;
  opacity: 1;
  box-shadow: 0px 5px 5px #b6b2b2;
}
.detail-list {
  width: 1226px;
  height: 200px;
  margin: 0 auto;
  visibility: hidden;
}
.product-item:hover .detail-list {
  width: 1226px;
  height: 200px;
  margin: 0 auto;
  visibility: visible;
  transition: 0.5s all;
}
.product-item:hover ul {
  height: 200px;
  margin: 0 auto;
  visibility: visible;
  transition: 0.5s all;
}

.detail-list ul {
  width: 1226px;
  height: 0px;
  visibility: hidden;
}
.detail-list ul li {
  width: 204.33px;
  height: 0px;
  text-align: center;
  display: inline-block;
  line-height: 20px;
}

.detail-list ul li img {
  width: 130px;
  margin-top: 30px;
  line-height: 130px;
  padding-bottom: 0px;
  transition: 0.5s all;
}
.detail-list ul li .detail-name {
  line-height: 20px;
  height: 20px;
  margin-top: 15px;
  color: black;
  transition: 0.5s all;
}
.detail-list ul li .detail-price {
  line-height: 20px;
  height: 20px;
  color: #ff6a00;
  transition: 0.5s all;
}
.username {
  position: relative;
}
.logout {
  position: absolute;
  height: 10px;
  width: 100%;
  background: rgb(52, 138, 218);
  text-align: center;
  font-size: 14px;
  color: #b6b2b2;
  visibility: hidden;
  transition: 0.5s all;
}
.logoutClick {
  cursor: pointer;
}
.logoutClick:hover {
  color: #ff6a00;
}
.username:hover .logout {
  visibility: visible;
  height: 50px;
}
.swiper {
  width: 1226px;
  height: 460px;
  margin: 0 auto;
  margin-top: 60px;
}
.home-card {
  width: 1226px;
  height: 170px;
  margin: 0 auto;
  margin-top: 20px;
}
.moboil-card {
  width: 1226px;
  /* height: 120px; */
  margin: 0 auto;
  margin-top: 30px;
}
.tvcard {
  width: 1226px;
  height: 900px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>