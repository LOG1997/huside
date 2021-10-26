<template>
  <div class="card-container">
    <div class="card-header">
      <img src="static/image/K40.png" alt="" />
    </div>
    <div class="card-mobail">
      <div class="card-moboil-header">
        <span>手机</span>
        <span>查看更多➡</span>
      </div>
      <div class="card-moboil-list">
        <div class="MIXFOLD">
          <img src="static/image/cardmoboil/MIXFOLD.jpg" alt="" />
        </div>
        <ul>
          <li v-for="(item, index) in moboilcard" :key="index">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.name }}</p>
            <p>{{ item.describe }}</p>
            <p>
              <span>{{ item.price }}元起</span>
              <span>{{ item.oldPrice }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dataBase from "../../../static/mock/data.js";
export default {
  name: "moboilcard",
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {
    moboilcard() {
      console.log(dataBase.moboilcard);
      return dataBase.moboilcard;
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
.card-header {
  width: 100%;
  height: 100%;
}
.card-header img {
  width: 1226px;
  height: 120px;
}
.card-mobail {
  margin-top: 40px;
}
.card-moboil-header {
  font-size: 28px;
  display: flex;
  position: relative;
  cursor: pointer;
  margin-bottom: 50px;
}
.card-moboil-header span:last-child {
  position: absolute;

  right: 0px;
}
.card-moboil-list {
  height: 614px;
  width: 1226px;
  display: flex;
}
.MIXFOLD img {
  height: 614px;
}
.MIXFOLD{
  
  box-shadow: 1px 1px 5px #c5c5c5;
}
.MIXFOLD:hover{
-webkit-animation: shadow-drop-2-bl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-2-bl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.card-moboil-list ul {
  width: 992px;
  height: 614px;
  display: inline-block;
}
.card-moboil-list ul li {
  width: 234px;
  height: 300px;
  display: inline-block;
  margin-left: 14px;
  text-align: center;
  box-shadow: 1px 1px 5px #c5c5c5;

}
.card-moboil-list ul li:hover{
-webkit-animation: shadow-drop-2-bl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-2-bl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.card-moboil-list ul li:nth-child(-n + 4) {
  margin-bottom: 14px;
  cursor: pointer;
}
.card-moboil-list ul li img {
  width: 160px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.card-moboil-list ul li p:nth-child(3) {
  color: rgb(187, 182, 182);
  margin-top: 6px;
  margin-bottom: 15px;
}
.card-moboil-list ul li p:nth-child(4) {
  color: #ff6a00;
}
.card-moboil-list ul li p:nth-child(5) {
  color: rgb(187, 182, 182);
  text-decoration: line-through;
}

.card-moboil-list ul li p:nth-child(4) span:last-child {
  color: rgb(187, 182, 182);
  text-decoration: line-through;
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