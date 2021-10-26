import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/sub/Login";
import mix4 from "@/components/sub/mix4";
import HomeBottom from "@/components/sub/HomeBottom";
import Resges from "@/components/sub/reges";
import Register from "@/components/sub/register";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "",
          name: "HomeBottom",
          component: HomeBottom
        },
        {
          path: "mix4",
          name: "mix4",
          component: mix4
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
