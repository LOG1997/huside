<template>
  <div class="homecard-container">
    <div class="home-channel-list">
      <ul>
        <li v-for="(item, index) in sixcard" :key="index">
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
    <div class="forcardImg">
      <ul>
        <li v-for="(item,index) in forcardImg" :key="index">
          <img :src="item.imgUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dataBase from "../../../static/mock/data.js";
export default {
  name: "HomeCard",
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {
    sixcard() {
      return dataBase.sixcard;
    },
    forcardImg(){
      return dataBase.forcardImg;
    }
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.homecard-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.home-channel-list {
  width: 200px;
  height: 170px;
  border-radius: 10px;
  background:#5F5750;
}
.home-channel-list ul {
  width: 200px;
  height: 170px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.home-channel-list ul li {
  width: 60px;
  height: 80px;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: rgb(216, 210, 210);
  cursor: pointer;
  margin: 2.5px 3px 0 3px;
  border-right: 1px solid;
  border-top: 1px solid;
}
.home-channel-list ul li:nth-child(-n+3){
  
  border-top: none;
}
.home-channel-list ul li:nth-child(3),.home-channel-list ul li:nth-child(6){
  
  border-right: none;
}
.home-channel-list ul li span{
  margin: 0 auto;
}
.home-channel-list ul li :hover{
  color: #fff;
}
.forcardImg{
  height:170px;
  display: flex;
}
.forcardImg ul{
  display: flex;
}
.forcardImg ul li{
  margin: 0 15.6px;
}
.forcardImg ul li:last-child{
  margin-right: 0;
}
.forcardImg img{
  height:170px;
  width: 316px;
}
</style>
