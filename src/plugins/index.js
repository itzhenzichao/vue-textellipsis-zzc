const requireComponment = require.context("./", true, /\.vue$/);
const install = (Vue) => {
  if (install.installed) return;
  install.installed;
  requireComponment.keys().forEach((fileName) => {
    //当前组件
    const config = requireComponment(fileName);
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
};
