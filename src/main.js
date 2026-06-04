import Vue from "vue";
import App from "./App.vue";
import Textellipsis from "./views/Textellipsis.vue";
import router from "./router";
import store from "./store";
import textellipsis from "@/plugins/index.js";

Vue.use(textellipsis);
Vue.config.productionTip = false;

let app = null;

function render(container) {
  if (container) {
    // qiankun 环境：hash 模式下主应用和子应用共用 hash，子应用无法独立路由
    // 直接渲染 Textellipsis.vue，不走 router
    app = new Vue({
      render: (h) => h(Textellipsis),
    }).$mount();
    container.appendChild(app.$el);
  } else {
    // 独立运行：完整 SPA，带路由
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
}

// 独立运行时直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

async function bootstrap() {}
async function mount(props) {
  render(props.container);
}
async function unmount() {
  app.$destroy();
  if (app.$el && app.$el.parentNode) {
    app.$el.parentNode.removeChild(app.$el);
  }
  app = null;
}

window["textellipsis"] = { bootstrap, mount, unmount };

export { bootstrap, mount, unmount };