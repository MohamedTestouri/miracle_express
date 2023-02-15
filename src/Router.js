import Vue from "vue";
import Router from "vue-router";
import AuthComponent from "@/components/AuthComponent";
import RegisterComponent from "@/components/RegisterComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: AuthComponent,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterComponent,
    },
  ],
});
