import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


// 全局状态
const state = {
  // 从sessionStorage读取数据，同样，操作这些数据时也要向sessionStorage存储
  // 主要存储两个数据，一个username
  // 一个token判断是否登录
  username: window.sessionStorage.getItem("username"),
  token: window.sessionStorage.getItem("token")
};
// 函数，方法，修改状态
const mutations = {
  GET_USER: (state, data) => {
    // 一个循环判断密码本里面的账户密码是否与输入的账户密码相同
    // for (var i = 0; i < password.userInformation.length; i++) {
      // if (
      //   password.userInformation[i].username === data.username &&
      //   password.userInformation[i].password === data.password
      // ) {
        // 判断到相同的账户密码，则把账户写入sessionStorage，并中断循环
        state.token = 1;
        console.log("输入正确");
        state.username = data.userinfo[0];
        console.log("state.username:",data.userinfo[0])
        console.log("state.token:",state.token)
        window.sessionStorage.setItem("username", data.userinfo[0]);
        // break;
      // }
      //  else {
        
      //   state.token = 0;

      //   console.log("你错了");
      // }
    // }
    // 向sessionStorage写入登陆状态token
    window.sessionStorage.setItem("token",state.token)
  },
  // 登出函数
  LOGOUT: state => {
    state.username = null;
    state.token = 0;
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("token");
  }
};
// 异步处理数据
const actions = {};
// 获取数据
const getters = {
  // 获取token
  getterToken(state) {
    return state.token;
  },
// 获取username
  getterUsername(state) {
    return state.username;
  }
};
// 将state，mutations，actions，getters暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
