// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/assets/css/reset.css";

import "./assets/iconfont/iconfont.js";
import SvgIcon from "@/assets/iconfont/svg-icon.vue";
Vue.component("svg-icon", SvgIcon);

import store from "@/components/store/store.js";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

import axios from "axios";
Vue.prototype.$axios = axios
Vue.prototype.HOST = 'http://localhost:4000'

// import VueAxios from 'vue-axios'
import Message from '@/components/common/message'
Vue.prototype.$my_message = Message.install;

import Vant from "vant";
import { Dialog } from 'vant';
import "vant/lib/index.css";

Vue.use(Vant);
Vue.use(Dialog);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
