import Vue from "vue";
import VueRouter from "vue-router";
import Textellipsis from "../views/Textellipsis.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/textellipsis",
  },
  {
    path: "/textellipsis",
    name: "Textellipsis",
    component: Textellipsis,
  },
  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

// qiankun 环境下 base 为主应用分配的路由前缀
// 独立运行时 base 为子应用自己的部署路径
const base = window.__POWERED_BY_QIANKUN__
  ? "/vue2-plugins/vue-textellipsis-zzc"
  : "/vue-textellipsis-zzc";

const router = new VueRouter({
  mode: "history",
  base,
  routes,
});

export default router;