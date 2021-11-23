import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import textellipsis from "@/plugins/index.js";
Vue.use(textellipsis);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
