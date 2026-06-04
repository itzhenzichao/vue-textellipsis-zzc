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

const router = new VueRouter({
  mode: "hash",
  base: "/vue-textellipsis-zzc/",
  routes,
});

export default router;