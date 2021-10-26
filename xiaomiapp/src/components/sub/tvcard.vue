<template>
  <div class="card-container">
    <div class="card-tv">
      <div class="card-tv-header">
        <span>家电</span>
        <span>热门</span>
        <span>电视影音</span>
      </div>
      <div class="card-tv-list">
        <div class="tv6oled">
          <img src="static/image/cardtv/电视6OLED.jpg" alt="" />
          <img src="static/image/cardtv/电视77OLED.jpg" alt="" />
        </div>
        <ul>
          <li v-for="(item, index) in tvcard" :key="index">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.name }}</p>
            <p>{{ item.describe }}</p>
            <p>
              <span>{{ item.price }}元</span>
              <span>{{ item.oldPrice }}元</span>
            </p>
          </li>
          <div class="card-last-li">
            <div class="card-tv-last-top">
              <div class="card-tv-last-top-left">
                <h3>米家互联网烟灶套装(天然气)</h3>
                <p>2298元</p>
              </div>
              <img src="static/image/cardtv/天然气灶.jpg" alt="" />
            </div>
            <div class="card-tv-last-bottom">
              <h2>浏览更多</h2>
              <p>热门</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dataBase from "../../../static/mock/data.js";
export default {
  name: "tvcard",
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {
    tvcard() {
      console.log(dataBase.tvcards);
      return dataBase.tvcards;
    },
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.card-container {
  width: 100%;
  height: 100%;
}
.card-tv {
  margin-top: 40px;
}
.card-tv-header {
  font-size: 28px;
  display: flex;
  position: relative;
  cursor: pointer;
  margin-bottom: 50px;
}
.card-tv-header span:nth-child(n + 2) {
  position: absolute;

  right: 0px;
}
.card-tv-header span:nth-child(2) {
  position: absolute;

  right: 150px;
}
.tv6oled {
  width: 234px;
  height: 600px;
}
.tv6oled img {
  width: 234px;
}
.tv6oled img:first-child {
  margin-bottom: 14px;
}
.card-tv-list {
  display: flex;
  height: 614px;
  width: 1226px;
}
.card-tv-list ul {
  display: inline-block;
  width: 992px;
  height: 614px;
}
.card-tv-list ul li {
  display: inline-block;
  width: 234px;
  height: 300px;
  margin-left: 14px;
  text-align: center;
  box-shadow: 1px 1px 5px #c5c5c5;
  text-overflow: hidden;
}
.card-tv-list ul li img {
  /* display:inline-block; */
  padding-top: 20px;
  height: 160px;
  width: 160px;
  padding-bottom: 20px;
}
.card-tv-list p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 6px 0 6px;
}
.card-tv-list p:nth-child(3) {
  color: rgb(187, 182, 182);
  margin-top: 6px;
  margin-bottom: 15px;
}
.card-tv-list p:nth-child(4) {
  color: #ff6a00;
}
.card-tv-list p:nth-child(4) span:last-child {
  color: rgb(187, 182, 182);
  text-decoration: line-through;
}
.card-tv-list ul li:nth-child(-n + 4) {
  margin-bottom: 14px;
  cursor: pointer;
}
.card-tv-list ul li:nth-child(n + 3) {
  margin-top: 0;
  cursor: pointer;
}
.card-last-li {
    position: absolute;
  width: 234px;
  height: 300px;
  display: inline-block;
  /* background: #ff6a00; */
  margin-left: 9px;
  margin-bottom: -9px;
  text-align: center;
  box-shadow: 1px 1px 5px #c5c5c5;
}

.card-tv-last-top {
  width: 234px;
  height: 143px;
  /* background: #ff6a00; */
  display: flex;box-shadow: 1px 1px 5px #c5c5c5;
}
.card-tv-last-top-left {
  width: 117px;
  height: 75px;
}
.card-tv-last-top img {
  width: 80px;
  height: 80px;
  margin: 20px auto;
}
.card-tv-last-bottom {
  width: 234px;
  margin-top: 14px;
  text-align:left;
  height: 143px;box-shadow: 1px 1px 5px #c5c5c5;
}
.card-tv-last-top-left h3{
    font-size: 16px;
    padding-top:30px;
    width: 80px;
    margin:auto;
}
.card-tv-last-top-left p{
color: #ff6a00;
}
.card-tv-last-bottom h2{
    padding-top: 20px;
    padding-left: 50px;
}.card-tv-last-bottom p{
    font-size: 15px;    padding-top: 20px;
    padding-left: 50px;
}
.tv6oled img:hover,.card-tv-list ul li:hover,.card-tv-last-top:hover,.card-tv-last-bottom:hover{
    -webkit-animation: shadow-drop-2-bl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-2-bl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes shadow-drop-2-bl {
  0% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px) translateX(6px) translateY(-6px);
            transform: translateZ(50px) translateX(6px) translateY(-6px);
    -webkit-box-shadow: -12px 12px 20px -12px rgba(0, 0, 0, 0.35);
            box-shadow: -12px 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-2-bl {
  0% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px) translateX(6px) translateY(-6px);
            transform: translateZ(50px) translateX(6px) translateY(-6px);
    -webkit-box-shadow: -12px 12px 20px -12px rgba(0, 0, 0, 0.35);
            box-shadow: -12px 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
</style>