import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import textellipsis from "@/plugins/index.js";

Vue.use(textellipsis);
Vue.config.productionTip = false;

let app = null;

function render(container) {
  if (container) {
    // qiankun 环境：带路由渲染，子应用内部路由跳转正常工作
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount();
    container.appendChild(app.$el);
  } else {
    // 独立运行
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

window.textellipsisApp = { bootstrap, mount, unmount };

export { bootstrap, mount, unmount };