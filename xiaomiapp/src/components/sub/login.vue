<template>
  <div class="container">
    <div class="layout">
      <div class="layout-header">
        <div class="layout-header-left">
          <div class="layout-logo">
            <svg-icon
              iconname="icon-icon-xiaomiguishu"
              class="layout-xiaomi-icon"
            ></svg-icon>
            <span>小米账号</span>
          </div>
        </div>
        <div class="layout-header-right">
          <span>用户协议</span>
          <span>隐私政策</span>
          <span>帮助中心</span>
          <span>|</span>
          <span>中文(简体)</span>
        </div>
      </div>
      <div class="layout-toast">
        <div class="layout-card">
          <div class="layout-card-header">
            <span>登录</span>
            <span @click="toregister">注册</span>
          </div>
          <input
            class="oldInput"
            type="text"
            placeholder="邮箱/手机号码/小米ID"
            v-model="username"
          />
          <input
            class="oldInput"
            type="password"
            placeholder="密码"
            v-model="pwd"
          />
          <div class="login-button" @click="login">
            <span>登 录</span>
          </div>
          <p class="isNotAccount">
            还没有账号？点击<span @click="toregister">此处</span>去注册
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logins",
  components: {},
  props: [],

  data() {
    return {
      username: "",
      pwd: "",
      msg: "", //接收数据
    };
  },

  watch: {},
  computed: {
    getToken() {
      let getterstoken = this.$store.getters.getterToken;
      if (this.username === "" && this.password === "") {
        getterstoken = 1;
      } else {
        getterstoken = this.$store.getters.getterToken;
      }
      return getterstoken;
    },
  },
  methods: {
    // login() {
    //   // 向store里的mutations  GET_USER函数推送数据
    //   this.$store.commit("GET_USER", {this.userInfo});
    //   if (this.getToken === 1) {
    //     this.$router.push("/");
    //   }
    // },
    login() {
      // 提交数据
      this.$axios
        .post("http://localhost:4000" + "/api/login", {
          username: this.username,
          password: this.pwd,
        })
        .then((result) => {
          console.log("RESULT:", result);
          this.msg = result.data.msg;
          this.loginstatus = result.data.status;
          console.log("status:", this.loginstatus);
          if (this.loginstatus === 1) {
            let userinfo = [this.username];
            console.log("userinfo:", userinfo);
            this.$store.commit("GET_USER", { userinfo });
            // alert('登录成功')
            this.$my_message({
              content: "登录成功", // 弹出的文字内容
              time: 2000, // 弹出后多久消失
              type: "success", // 弹出的消息类型
              hasClose: true, // 让按钮可以被使用，默认按钮是false不可以使用的
            });
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toregister() {
      this.$router.push("/register");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.container {
  width: 100%;
  overflow: hidden;
  background-image: url("../../../static/image/背景图.jpg");
}
.layout {
  /* width: 1000px; */
  background: #fff;
}
.layout-header {
  display: flex;
  height: 80px;
  min-width: 600px;
  /* width: 1000px; */
  /* display: inline-block; */

  line-height: 40px;
}
.layout-header-left {
  width: 20%;
  min-width: 200px;
  padding: 20px 0 20px 50px;
  color: #333;
}
.layout-xiaomi-icon {
  height: 40px;
  width: 40px;
}
.layout-logo {
}

.layout-logo span {
  line-height: 40px;
  display: inline-block;
  font-size: 36px;
  font-weight: normal;
  cursor: default;
}
.layout-header-right {
  text-align: right;
  /* display:flex; */
  width: 80%;
  min-width: 400px;
  line-height: 40px;
  justify-content: flex-end;
  padding: 20px 50px 20px 0px;
}
.layout-header-right span {
  display: inline-block;
  padding-left: 10px;
  color: #838383;
  cursor: pointer;
}
.layout-header-right span:last-child {
  color: #3a3636;
  font-weight: bold;
}
.layout-header-right span:hover {
  color: #ff6a00;
}
.layout-toast {
  height: 800px;
  width: 100%;
  min-width: 600px;
  margin-top: 100px;
  text-align: center;
  display: inline-block;
}
.layout-card {
  width: 450px;
  height: 600px;
  padding: 40px 45px 40px 45px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.layout-card-header {
  text-align: left;
  font-size: 30px;
  cursor: pointer;
}
.layout-card-header span:last-child {
  color: rgb(128, 122, 122);
  font-size: 26px;
}
.oldInput {
  width: 100%;
  height: 20px;
  margin-top: 20px;
  padding: 30px 0 10px 0;
  border: 0;
  background: #f9f9f9;
}
.inputbox {
  border: 1px solid rgb(224, 92, 92);
}
::-webkit-input-placeholder {
  font-size: 20px;
  color: rgb(179, 175, 175);
}
.login-button {
  width: 100%;
  height: 60px;
  background: #ff6a00;
  margin: 20px 0 20px 0;
  line-height: 60px;
  color: rgba(255, 255, 255, 0.658);
  font-size: 20px;
  cursor: pointer;
}
.login-button:hover {
  color: rgb(255, 255, 255);
}
.isNotAccount {
  color: #3b3b3b;
}
.isNotAccount span {
  color: #ff6a00;
  cursor: pointer;
}
.isNotAccount span:hover {
  text-decoration: underline;
}
</style>